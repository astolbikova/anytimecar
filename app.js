const express = require('express')
const app = express();
const path = require('path');
const ejs = require('ejs');

var socket = require('./src/socket.js');

var port = 3000;

app.set("View engine", "ejs");

app.use('/', socket);


app.listen(port, function() {
 console.log('listening on:',
  port);
});