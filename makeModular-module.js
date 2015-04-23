//the module

var fs = require('fs');
var path = require('path');

module.exports = function (dir, fileType, callback){
	fs.readdir(dir, function(err, directory){
		if (err) return callback(err)

		var filteredList = [];
		//for(var i=0; i<directory.length; i++){
			directory.forEach(function(item){
				if(path.extname(item) == '.' + fileType){
					filteredList.push(item);
				}
			})
			/*
			var ext = path.extname(directory[i]);
			if(ext == '.' + fileType){
				filteredList.push(directory[i]);
			}
		}
		*/
		callback(null, filteredList)
	})
}


/*
var fs = require('fs');
var path = require('path');

module.exports = function(dir, type, callback){
	fs.readdir(dir, function (err, list) {
		if(err){
		return callback(err)
	}
	list = list.filter(function (file) {
		return path.extname(file) === '.' + type
	})
	callback(null, list)
})
}
*/
