// In CMD, use mocha file_name instead of node
var should = require('should');
var doubler = require('./example1-async-code-conventions').evenDoubler;

describe('EvenDoubler', function() {
	
	it('should double even numbers correctly', function(done) {
		
		doubler(2, function(err, results) {
			should.not.exist(err);
			results.should.equal(4);
			done();
		});
		
	});

});