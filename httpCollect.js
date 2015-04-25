//http get to a url in process.argv2

//collect all data from the server, not just first data event

//write two lines to console
//first - integer representing number of characters received from server
//second - complete string of characters received from server

var http = require('http');
var url = process.argv[2];
var bl = require('bl');

http.get(url, function(res){
	res.pipe(bl(function(err, data){
		if (err) return console.error(err)
		data = data.toString();
		console.log(data.length);
		console.log(data);
	}))
	})
