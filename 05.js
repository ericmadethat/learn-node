var fs = require('fs');
var path1 = process.argv[2]; //path to the file
var filter = "." + process.argv[3]; // the extension

fs.readdir(path1, function (err, list) {
	var result = [];
	for (var item in list) {
		var filename = list[item];
		var pattern = new RegExp(filter);
		if (pattern.test(filename)) { 
			console.log(filename);
		}
	}
})
