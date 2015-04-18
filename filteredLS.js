var fs = require('fs');
var path = require('path');
var fileType = process.argv[3];

fs.readdir(process.argv[2], function (err, list){
	for(var i=0; i<list.length; i++){
		var ext = path.extname(list[i]);
		if(ext == '.'+fileType){
			console.log(list[i]);
		}
	};
});

