require("dotenv").config();

const db = require('./db.js')
const express = require('express')
const app = express()
app.use(express.json())

const db = require('./db.js')

app.get('/', function (req,res) {
    res.send('<h1>Working</h1>')
    console.log('Working');
});

app.get('/roles', function(req, res) {
    db.getRoles(function(rows) {
        res.send(rows)
    })
})

app.listen(8002, function () {
    console.log('Express started on port 8002')
});

app.get('/getTrainingDetails', function(req, res) {
    db.getTrainingDetails(req.query.id, function(rows) {
        res.send(rows);
    })
})
