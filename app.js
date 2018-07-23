const express = require('express')
const app = express();
const http = require('http').Server(app);
const path = require('path');
const ejs = require('ejs');
const io = require('socket.io')(http)
const request = require('./server/request');
const data = require('./server/data')
const socket = require('./server/socket')
const promise = require('./server/promise')

var port = 4000;
var carsData;
var viewPort;

app.set("View engine", "ejs");
app.use('/', request);
app.use(express.static(__dirname + '/client'));

socket.createHandler(io, "coordinates have been changed", function(viewPort) {

 let waitingData = promise.getPromise();
 waitingData.then(
  (result) => {

   let carsInside = data.filter(result.cars, viewPort);
   //console.log(carsInside);
   //socket.createEvent(io, 'data have been passed', carsInside);
   io.on('connection', function(socket) {
    socket.emit('data have been passed', carsInside);
   });
  },
  (err) => {
   try {
    throw new Error();
   } catch (e) {
    console.log(e.name + ": " + e.message);
   }
  }
 );
});

http.listen(port, function() {
 console.log('listening on:',
  port);
});