var http = require('http');
var bl = require('bl');
var responses = [];

var count = 0;

function GET(index) {
	http.get(process.argv[2+index], function(res){
	res.pipe(bl(function(err, data){
		if (err) {
			return console.error(err)
		}
		else{
			data = data.toString();
			responses[index] = data;
			count++
			if(count==3){
				console.log(responses[0])
				console.log(responses[1])
				console.log(responses[2])
			}
		}
	}))
	})
}

for(var i=0; i<3; i++){
	GET(i);
}


