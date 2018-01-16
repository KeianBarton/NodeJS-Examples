var util = require('util');
var EventEmitter = require('events').EventEmitter

function Resource (m) {
	var self = this;
	process.nextTick(function() {
		self.emit('start');
	});
};

util.inherits(Resource, EventEmitter);

// You could refactor this out to a separate file...
var r = new Resource(7);

r.on('start', function() {
	console.log("I've started!");
});