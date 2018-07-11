var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');

var parseJSON = bodyParser.json();
var urlencodedParser = bodyParser.urlencoded({
 extended: true
});



// router.get('/', urlencodedParser, function(req, res) {
//  return res.render("index.ejs");
// });

router.get('https://anytimecar.ru/api/3.5/?get=cars&key=5d90897eeb0855e9d9c395460846f6ad', parseJSON, function(req, res) {
 //res.send();
 console.log(req.body);
});



module.exports = router;

/*io.emit('some event', {
 for: 'everyone'
});

io.on('connection', function(socket) {
 socket.broadcast.emit('hi everyone!');
 console.log("hi everyone!");
});

io.on('connection', function(socket) {
 socket.on('chat message', function(msg) {
  io.emit('chat message', msg);
 });
});

io.on('connection', function(socket) {
 console.log('alina user connected');
 socket.on('disconnect', function() {
  console.log("alina user disconnected");
 });

 socket.on('chat message', function(msg) {
  console.log('message: ' + msg);
 });
});
*/