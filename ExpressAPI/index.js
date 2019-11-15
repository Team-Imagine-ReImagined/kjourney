require("dotenv").config();

const express = require('express');
const app = express();
const url = require('url');
app.use(express.json());
const bcrypt = require('bcrypt');
const saltRounds = 10;
const secretKey = process.env.JWT_Secret;
var options = { cookies: true };
var jwtGen = require('jsonwebtoken', options);
var jwt = require('express-jwt');

app.use(jwt({ secret: process.env.JWT_Secret }).unless({
    path: ['/login', '/secureGenerateUser',
        '/capabilities', '/jobFamilies', '/jobRoles', '/training']
}));

app.use(express.json());

const db = require('./db.js');

app.get('/roles', function (req, res) {
    db.getRoles(function (rows) {
        res.send(rows)
    })
});

app.get('/capabilities', function(req, res) {
    db.getCapabilities(req.query.capabilityID, function(rows) {
        res.send(rows)
    })
});

app.get('/jobFamilies', function(req, res) {
    db.getJobFamilies(function(rows) {
        res.send(rows)
    })
});

app.listen(8002, function () {
    console.log('Express started on port 8002')
});

app.get('/training', function (req, res) {
    if (!req.query.bandID) {
        res.status(400).json({ Error: "bandID not specified" });
    }
    db.getTrainingPerBand(req.query.bandID, function (rows) {
        res.send(rows);
    })
});

app.get('/competencies', function (req, res) {
    if (!req.query.bandID) {
        res.status(400).json({ Error: "bandID not specified" });
    }
    db.getCompetencies(req.query.bandID, function (rows) {
        res.send(rows);
    })
});

app.get('/responsibilities', function (req, res) {
    if (!req.query.bandID) {
        res.status(400).json({ Error: "bandID not specified" });
    }
    db.getResponsibilities(req.query.bandID, function (rows) {
        res.send(rows);
    })
});

app.post('/login', function (req, res) {
    genericError = "Invalid username or password";
    lockedOutError = "Your account is locked out for ";
    lockOutDurationSeconds = 1800;
    tokenValidDurationSeconds = 1800;
    lockOutAttempts = 5;

    data = req.body;

    if (data.username && data.password) {
        //attempt to fetch user from db
        db.getUser(data.username, function (retRowsList) {
            if (retRowsList.length) {
                retRows = retRowsList[0];
                lockedOut = retRows.lockedOut;
                if (lockedOut === 1) {
                    //if User is locked out
                    //compare current time to lockedoutdate
                    //if passed, set lockedOut to false, do db jobs
                    //if failed, returned locked out error message

                    currentDate = Date.now();
                    if (retRows.lockoutDate <= Date.now()) {
                        //user's locked out duration has expired
                        lockedOut = false
                        db.resetLockout(retRows.id);
                    } else {

                        //user's lockout duration has not expired
                        lockoutFormat = Math.round(((retRows.lockoutDate - Date.now()) / 60000));
                        res.send({ Status: 401, Message: lockedOutError + lockoutFormat + ' minutes' })
                    }
                }

                if (!lockedOut) {
                    //either user was not locked out, or is no longer locked out
                    //hash supply password & compare
                    //if match, generate JWT and log user in
                    //if fail, incriment failCount and eval lockout condition

                    bcrypt.compare(data.password, retRows.passwordHash, function (err, result) {

                        const passwordMatch = result;
                        if (passwordMatch) {
                            //User is not locked out and has supplied correct password, log them in
                            //JWT = generateJWT(retRows.ID, tokenValidDurationMinutes);
                            //db.StoreUserJWT(JWT, addMinutes(getCurrentDate(), tokenValidDurationMinutes));
                            var accessToken = jwtGen.sign({ id: retRows.id, isAdmin: retRows.isAdmin, date: Date.now() }, secretKey, {
                                expiresIn: tokenValidDurationSeconds
                            });

                            db.storeUserToken(retRows.id, accessToken, (Date.now() + (tokenValidDurationSeconds * 1000)));


                            res.send({
                                Status: 200, User: {
                                    "username": retRows.username,
                                    "id": retRows.id
                                }, Auth: accessToken
                            })

                            //clear failed attempts as user has successfully logged in
                            if (retRows.failedAttempts != 0) {
                                db.setUserLockoutCount(retRows.id, 0);
                            }
                            //return User;

                        } else {
                            //Password did not match, evaluate lockout condition
                            if (retRows.failedAttempts === null || retRows.failedAttempts === undefined) {
                                //if somehow null, set to 0 to avoid app crash
                                retRows.failedAttempts = 0;
                            }

                            db.setUserLockoutCount(retRows.id, (retRows.failedAttempts + 1));
                            if (retRows.failedAttempts >= lockOutAttempts - 1) {
                                //user has failed login too many times
                                newLockedOutDate = Date.now() + (lockOutDurationSeconds * 1000); //1800 seconds - 30 minutes

                                db.setUserLockedout(retRows.id, newLockedOutDate);


                                res.send({ Status: 401, Message: lockedOutError + (Math.round(lockOutDurationSeconds / 60)) + ' minutes' });
                            } else {
                                res.send({ Status: 401, Message: genericError });
                            }
                        }

                    });
                }
            } else {
                //user doesn't exist
                res.send({ Status: 401, Message: genericError });
            }

        });
    } else {
        //username and/or password not supplied
        res.send({ Status: 401, Message: genericError });
    }
});

app.post('/secureGenerateUser', function (req, res) {
    data = req.body;
    username = data.username;
    password = data.password;
    fullname = data.fullname;
    roleID = data.roleID;

    if (data && username && password && fullname && roleID) {

        db.GetRoleByRoleID(roleID, function (roleRows) {


            db.getUser(data.username, function (retRows) {

                if (retRows.length || !roleRows.length) {
                    if (retRows.length) {
                        retRow = retRows[0];
                        res.send({ Status: 401, Message: "User " + data.username + " already exists" })
                    } else {
                        res.send({ Status: 401, Message: "Role is not valid" })
                    }

                } else {

                    bcrypt.genSalt(saltRounds, function (err, salt) {
                        bcrypt.hash(data.password, salt, function (err, hash) {
                            // Store hash in your password DB.
                            //generate entry in userData table
                            if (err) {
                                res.send({ Message: err });
                                return null;
                            } else {
                                db.dataGenerateUser({ "name": fullname, "roleID": roleID }, function (retID, ierr) {
                                    if (ierr) {
                                        res.send({ Message: ierr });
                                        return null;
                                    } else {
                                        signInNewlyRegisteredUser(retID, data, hash, res)
                                    }
                                });
                            }
                        });

                        if (err) {
                            res.send({ Status: 503, Message: err })
                        } else {
                        }
                    });
                }
            })
        });
    } else {
        res.send({ Status: 503, Message: "Form invalid" });
    }
});

function signInNewlyRegisteredUser(retID, data, hash, res) {
    db.secureGenerateUser({ "IDFromUserDataTable": retID, "username": data.username, "passwordHash": hash, "lockedOut": false },
        function (i2err) {
            if (i2err) {
                res.send({ Message: i2err });
                return null;
            }
        }, function () {
            db.getUser(data.username, function (retRowsList) {
                //get the user we just created

                tokenValidDurationSeconds = 1800;
                retRows = retRowsList[0];
                //generate their access token for immediate access
                var accessToken = jwtGen.sign({ id: retRows.id, isAdmin: retRows.isAdmin, date: Date.now() }, secretKey, {
                    expiresIn: tokenValidDurationSeconds
                });
                db.storeUserToken(retRows.id, accessToken, (Date.now() + (tokenValidDurationSeconds * 1000)));
                //return
                res.send({
                    Status: 200, User: {
                        "username": retRows.username,
                        "id": retRows.id
                    }, Auth: accessToken
                })
            })
        }
    );
}



app.get('/InvalidateUserToken', function (req, res) {
    if (req.headers.authorization && req.headers.authorization.split(' ')[0] === 'Bearer') {
        header = req.headers.authorization.split(" ")[1]
        db.clearUserToken(header);
        res.sendStatus(200)
    }
});

app.get('/IsUserValid', function (req, res) {
    //blank endpoint for uservalidation
    //jwt will auto return 401 if invalid 
    //or if we reach here, we send 200 
    res.status(200).send({ Status: 200 });
})

app.get('/capabilities', function (req, res) {
    db.GetCapabilitiesRegisterUser(function (rows) {
        res.send({ Data: rows });
    });
})

app.get('/jobFamilies', function (req, res) {
    var capID = req.query.capID;
    db.GetJobFamiliesPerCapRegisterUser(capID, function (rows) {
        res.send({ Data: rows });
    });
})

app.get('/jobRoles', function (req, res) {
    var jobFamID = req.query.jobFamID
    db.GetJobRolesPerJobFamRegisterUser(jobFamID, function (rows) {
        res.send({ Data: rows });
    });
})

app.get('/roles', function (req, res) {
    if (req.query.bandID > 0) { // If a bandID has been supplied, get all roles for that band
        db.getBandRoles(req.query.bandID, function (rows) {
            res.send(rows);
        })
    } else { // Otherwise, get all roles
        db.getRoles(function (rows) {
            res.send(rows)
        })
    }
});

app.get('/roles', function (req, res) {
    if (req.query.bandID > 0) { // If a bandID has been supplied, get all roles for that band
        db.getBandRoles(req.query.bandID, function (rows) {
            res.send(rows);
        })
    } else { // Otherwise, get all roles
        db.getRoles(function (rows) {
            res.send(rows)
        })
    }
});

app.get('/roles', function(req, res) {
    if (!req.query.bandID){
        res.json ({
            message: "Band ID required"
        });
    } else {
        db.getBandRoles(req.query.bandID, function (rows) {
            res.send(rows);
        })
    }
});

app.get('/band', function(req, res) {
    if (!req.params.bandID){
        res.json ({
            message: "Band ID required"
        });
    } else {
        db.getBandName(req.params.bandID, function (rows) {
            res.send(rows);
        })
    }
});

app.get('/roles', function(req, res) {
    if (req.params.bandID > 0){ // If a bandID has been supplied, get all roles for that band
        db.getBandRoles(req.params.bandID, function(rows) {
            res.send(rows);
        })
    } else { // Otherwise, get all roles
        db.getRoles(function (rows) {
            res.send(rows)
        })
    }
});

app.get('/bands/:bandID', function (req, res) {
    db.getBandName(req.params.bandID, function (rows) {
        res.send(rows);
    })
});

app.get('/getUserInfo', function (req, res) {
    const userID = req.user.id;
    db.getUserInfo(userID, function (rows) {
        res.send(rows);
    })
})
app.get('/hierarchy/:bandID', function (req, res) {
    db.getHierarchy(req.params.bandID, function (rows) {
        res.send(rows);
    })
});
