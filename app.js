var express = require('express');
require('dotenv').config();

var app = express();

app.get('/', function (req, res) {
  res.send('Hello Fikar!');
});

app.listen(process.env.PORT, function () {
  console.log('Example app listening on port 3000!');
});