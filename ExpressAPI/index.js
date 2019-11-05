require("dotenv").config();

const express = require('express')
const app = express()

app.get('/', function (req,res) {
    res.send('<h1>Working</h1>')
    console.log('Working');
});

app.listen(7999, function () {
    console.log('Express started on port 7999')
});
