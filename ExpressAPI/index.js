require("dotenv").config();

const express = require('express');
const app = express();
const url = require('url');
app.use(express.json());

const db = require('./db.js');

app.get('/roles', function (req, res) {
    db.getRoles(function (rows) {
        res.send(rows)
    })
});

app.listen(8002, function () {
    console.log('Express started on port 8002')
});

app.get('/competencies', function(req, res) {
    db.getCompetencies(function(rows) {
        res.send(rows);
    })
});

app.get('/training/:bandId', function (req, res) {
    db.getTrainingPerBand(req.params.bandId, function(rows) {
        res.send(rows);
    })
});
