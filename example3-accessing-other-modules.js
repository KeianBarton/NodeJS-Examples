var maxTime = 1000;

var fooFunction = function(v, callback) {
	console.log("foo");
};

module.exports.fooFunction = fooFunction;

// Then in another file, we can write:
// var foo = require('./example3-accessing-other-modules')
// foo.fooFunction( ... )