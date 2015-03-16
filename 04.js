var fs = require('fs');
var numLines = undefined;

function countLines (callback){
	fs.readFile(process.argv[2], function (err, fileContents) {
		numLines = ((fileContents.toString().split('\n')).length) - 1;
		callback();
	});
}

function logNum() {
	console.log(numLines)
}

countLines(logNum);
