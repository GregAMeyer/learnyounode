
//program that uses the module
var filterFn = require('./makeModular-module.js')
var pathName = process.argv[2];
var fileType = process.argv[3];

filterFn(pathName, fileType, function(err, list) {
	if (err) throw err
	list.forEach(function (file){
		console.log(file)
	})
})

/*
var filterFn = require('./makeModular-module.js')
var pathname = process.argv[2];
var fileType = process.argv[3];

filterFn(pathname, fileType, function(err, list) {
	if(err) {
		return console.error('There was an error:', err)
	}
    list.forEach(function (file) {
    console.log(file)
  })
})
*/