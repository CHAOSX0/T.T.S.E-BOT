var events = require('events');
var event = new events.EventEmitter();
event.on("timer", data => {
event.emit("timer1", data) 
})
module.exports = event