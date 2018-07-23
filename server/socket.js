function createEvent(io, eventname, data) {

 io.on('connection', function(socket) {
  socket.emit(eventName, data);
 });
}

function createHandler(io, eventName, handler) {

 io.on('connection', function(socket) {
  socket.on(eventName, handler);
 });
}

module.exports = {
 createEvent: createEvent,
 createHandler: createHandler
}