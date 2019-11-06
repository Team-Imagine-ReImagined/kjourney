require("dotenv").config();

const express = require('express')
const app = express()
app.use(express.json())

const db = require('./db.js')

app.listen(8002, function () {
    console.log('Express started on port 8002')
});

app.get('/roles', function(req, res) {
    db.getRoles(function(rows) {
        res.send(rows)
    })
})

app.get('/getTrainingDetails', function(req, res) {
    db.getTrainingDetails(req.query.id, function(rows) {
        res.send(rows);
    })
})

app.get('/roles/:id', function(req, res) {
    db.getRoleDetails(req.params.id, function(row) {
        res.send(row);
    })
})

app.get('/jobFamily/:id', function(req, res) {
    db.getJobFamily(req.params.id, function(row) {
        res.send(row);
    })
})