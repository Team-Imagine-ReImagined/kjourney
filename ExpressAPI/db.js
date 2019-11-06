const mysql = require('mysql');

const db = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME
});

db.connect(function(err){
    if (err) throw err;
    console.log("Connected to mySQL")
})

exports.getRoles = function(callback) {
    db.query(
        "SELECT name, summary FROM jobRole",
        function(err, rows) {
            if (err) {
                throw err;
            }
            callback(rows);
        }
    )
}