var assert = require('assert');
var doubler = require('./example1-async-code-conventions').evenDoubler;

doubler(2, function(err, results) {
	assert.ifError(err);
	assert.equal(results, 4, "evenDoubler failed on even number");
});

doubler(3, function(err, results) {
	assert.notEqual(err, null);
});