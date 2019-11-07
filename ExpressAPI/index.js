require("dotenv").config();

const express = require('express')
const app = express()
app.use(express.json())

const db = require('./db.js')

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

app.get('/getRoleDetails', function(req, res) {
    db.getTrainingDetails(req.query.jobFamID, req.query.bandID, function(rows) {
        res.send(rows);
    })
})
