const mysql = require('mysql');
const log4js = require('log4js');
const logger = log4js.getLogger();
logger.level = 'debug';

const db = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME
});

db.connect(function (err) {
    if (err) {
        logger.error("Failed to connect to MySQL.");
        throw err;
    }
    logger.debug("Connected to MySQL.");
    db.query("use kJourneyDB;")
});

exports.getRoles = function (callback) {
    db.query(
        "SELECT name, summary FROM jobRole",
        function (err, rows) {
            if (err) {
                logger.error("getRoles failed with error: " + err);
                throw err;
            }
            logger.debug("getRoles succeeded.");
            callback(rows);
        }
    )
};

exports.getTrainingDetails = function (ID, callback) {
    db.query(
        "SELECT id, name, description FROM training",
        [ID],
        function (err, rows) {
            if (err) {
                logger.error("getTrainingDetails failed with error: " + err);
                throw err;
            }
            logger.debug("getTrainingDetails succeeded.");
            callback(rows);
        }
    )
};


exports.getTrainingPerBand = function (bandID, callback) {
    db.query(
        "SELECT band_Training.bandID, training.name, training.trainingType, training.trainingLink " +
        "FROM band_Training INNER JOIN training ON band_Training.trainingID = training.ID " +
        "WHERE band_Training.bandID=?",[bandID],
    function (err, rows) {
            if (err) {
                logger.error("getTrainingPerBand failed with error: " + err);
                throw err;
            }
            logger.debug("getTrainingPerBand succeeded.");
            callback(rows);
        }
    )
};

exports.getCompetencies = function(bandID, callback) {
    db.query(
        "select comp_band.bandID, competency.title, comp_band.compDesc FROM competency INNER JOIN comp_band ON competency.ID = comp_band.compID WHERE comp_band.bandID=?", [bandID],
        function (err, rows) {
            if (err) {
                logger.error("getCompetencies failed with error: " + err)
                throw err;
            }
            logger.debug("getCompetencies succeeded.")
            callback(rows);
        }
    )
};

exports.getResponsibilities = function(bandID, callback) {
    db.query(
        "select resp_band.bandID, resp_band.respID, responsibilities.respDesc FROM responsibilities INNER JOIN resp_band ON responsibilities.ID = resp_Band.respID WHERE bandID =?", [bandID],
        function (err, rows) {
            if (err) {
                logger.error("getResponsibilities failed with error: " + err);
                throw err;
            }
            logger.debug("getResponsibilities succeeded.");
            callback(rows);
        }
    )
};



exports.getUser = function(Username, callback){
    db.query(
        "SELECT id, username, passwordHash, failedAttempts, lockedOut, lockoutDate, jwt, jwtDate, isAdmin " +
        "FROM authData WHERE username = '"+Username+"' LIMIT 1;",
        function (err, rows) {
            if (err) {
                logger.error("getUser failed with error: " + err)
                throw err;
            }
            logger.debug("getUser for "+Username)
            callback(rows);
    })
};

exports.secureGenerateUser = function(data){
    db.query('INSERT INTO authData SET ?', data,
    function(error, results, fields){
        if(error)
        {
            logger.error(error);
            throw error;
        }
        logger.debug("Generating user "+ data.username)
    });
};


exports.setUserLockoutCount = function (userId, setCount){
    logger.debug("Setting lockout count for user "+ data.username + " at "+setCount)
    db.query('UPDATE authData set failedAttempts = '+setCount+' where ID = '+userId+';',
    function(error){
        if(error){
            logger.error(error);
            throw error;
        }
    });
};

exports.setUserLockedout = function(userID, lockoutdate){
    logger.debug("Locking out user "+ data.username)
    db.query('UPDATE authData set lockedOut = 1, lockoutDate = '+lockoutdate+' where ID = '+userID+';',
    function(error){
        if(error){
            logger.error(error);
            throw error;
        }
    });
};

exports.resetLockout = function(userID){
    logger.debug("Resetting lockout for user "+ data.username)
    db.query('UPDATE authData set lockedOut = 0, lockoutDate = null where ID = '+userID+';',
    function(error){
        if(error){
            logger.error(error);
            throw error;
        }
    });
};

exports.storeUserToken = function(UserID, tokenValue, tokenDate){
    logger.debug("Storing token for user "+ data.username)
    db.query('UPDATE authData set jwt = "'+ tokenValue + '", jwtDate = "'+tokenDate+ '" where ID = '+UserID+';',
    function(error){
        if(error){
            logger.error(error);
            throw error;
        }
    });
};

exports.getUserToken = function(UserID){
    logger.debug("Getting token for user "+ data.username)
    db.query('Select jwt, jwtDate from authData where ID = '+UserID+' LIMIT 1 ;',
    function(error, rows){
        if(error){
            logger.error(error);
            throw error;
        }
        return rows;
    });
};

exports.clearUserToken = function(tokenToClear){
    logger.debug("Clearing token for user "+ data.username)
    db.query('UPDATE authData set jwt = NULL, jwtDate = 0 WHERE jwt = "'+tokenToClear+'";',
    function(error){
        if(error){
            logger.error(error);
            throw error;
        }
    });
};

exports.getBandRoles = function(bandID, callback) {
    db.query(
        "SELECT jobRole.bandID, jobRole.ID as roleID, jobRole.name as roleName, jobFam.name as jobFamilyName " +
        "FROM jobRole JOIN jobFam ON jobRole.jobFamID = jobFam.ID " +
        "WHERE bandID = " + bandID,
        function (err, rows) {
            if (err) {
                logger.error("getBandRoles failed with error: " + err);
                throw err;
            }
            logger.debug("getBandRoles succeeded.");
            callback(rows);
        }
    )
}

exports.getBandName = function(bandID, callback) {
    db.query(
        "SELECT id, name, level " +
        "FROM band " +
        "WHERE id = " + bandID,
        function (err, rows) {
            if (err) {
                logger.error("getBandName failed with error: " + err);
                throw err;
            }
            logger.debug("getBandName succeeded.");
            callback(rows);
        }
    )
}
