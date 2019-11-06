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
        "SELECT id, name, description FROM training",
        [ID],
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

exports.getRoleDetails = function(jobFamID, bandID, callback) {
    db.query(
        "SELECT id, name, summary, link, jobFamID, bandID" +
        "FROM jobRoles WHERE jobFamID = " + jobFamID + " AND bandID = " + bandID + ";", )
    )
}
