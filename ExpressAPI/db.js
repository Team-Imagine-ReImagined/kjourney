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

exports.getCompetencies = function(bandID, callback) {
    db.query(
        "select comp_band.bandID, competency.title, comp_band.compDesc FROM competency INNER JOIN comp_band ON competency.ID = comp_band.compID WHERE bandID =?", [bandID],
        function (err, rows) {
            if (err) {
                logger.error("getCompetencies failed with error: " + err)
                throw err;
            }
            logger.debug("getCompetencies succeeded.")
            callback(rows);
        }
    )
}

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
}


