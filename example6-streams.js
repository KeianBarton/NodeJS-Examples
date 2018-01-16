var request = require('request') // http requests

var options = {	// would normally work, but proxy issues
    url: 'http://google.com',
	proxy: 'http://127.0.0.1:3128'
};
var s = request(options);
// var s = request('http://www.google.com/');

s.on('data', function(chunk) {
	console.log('>>>Data>>> ' + chunk);
});

s.on('end', function() {
	console.log('>>>Done!>>>');
});


// Writable stream example
console.log("stdout is writable? " + process.stdout.writable);

process.stdout.write("Hello");
process.stdout.write("World");

// s.pipe(process.stdout) piping
// request("http://www.google.com/").pipe(process.stdout)  can also chain