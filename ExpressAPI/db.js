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

db.connect(function(err){
    if (err) {
        logger.error("Failed to connect to MySQL.")
        throw err;
    }
    logger.debug("Connected to MySQL.");
    db.query("use kJourneyDB;")
})

exports.getRoles = function(callback) {
    db.query(
        "SELECT name, summary FROM jobRole",
        function(err, rows) {
            if (err) {
                logger.error("getRoles failed with error: " + err)
                throw err;
            }
            logger.debug("getRoles succeeded.")
            callback(rows);
        }
    )
}

exports.getTrainingDetails = function(ID, callback) {
    db.query(
        "SELECT * FROM training",
        function (err, rows) {
            if (err) {
                logger.error("getTrainingDetails failed with error: " + err)
                throw err;
            }
            logger.debug("getTrainingDetails succeeded.")
            callback(rows);
        }
    )
}

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
}

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
}


exports.setUserLockoutCount = function (userId, setCount){
    logger.debug("Setting lockout count for user "+ data.username + " at "+setCount)
    db.query('UPDATE authData set failedAttempts = '+setCount+' where ID = '+userId+';',
    function(error){
        if(error){
            logger.error(error);
            throw error;
        }
    });
}

exports.setUserLockedout = function(userID, lockoutdate){
    logger.debug("Locking out user "+ data.username)
    db.query('UPDATE authData set lockedOut = 1, lockoutDate = '+lockoutdate+' where ID = '+userID+';',
    function(error){
        if(error){
            logger.error(error);
            throw error;
        }
    });
}

exports.resetLockout = function(userID){
    logger.debug("Resetting lockout for user "+ data.username)
    db.query('UPDATE authData set lockedOut = 0, lockoutDate = null where ID = '+userID+';',
    function(error){
        if(error){
            logger.error(error);
            throw error;
        }
    });
}

exports.storeUserToken = function(UserID, tokenValue, tokenDate){
    logger.debug("Storing token for user "+ data.username)
    db.query('UPDATE authData set jwt = "'+ tokenValue + '", jwtDate = "'+tokenDate+ '" where ID = '+UserID+';',
    function(error){
        if(error){
            logger.error(error);
            throw error;
        }
    });
}

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
}

exports.clearUserToken = function(tokenToClear){
    logger.debug("Clearing token for user "+ data.username)
    logger.debug(tokenToClear);
    db.query('UPDATE authData set jwt = NULL, jwtDate = 0 WHERE jwt = "'+tokenToClear+'";',
    function(error){
        if(error){
            logger.error(error);
            throw error;
        }
    });
}


