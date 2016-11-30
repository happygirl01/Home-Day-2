 
var request = require ("request")
var readline = require('readline')
var rl = readline.createInterface({
 input: process.stdin,
 output: process.stdout
});

console.log('enter your username')

rl.question('username: ', (answer) => {
 // TODO: Log the answer in a database
 request({
  url: 'http://api.geonames.org/citiesJSON/', //URL to hit
  qs: {username: answer, formatted: true, north: 44.1, south: -9.9, east: -22, west: 55.2, style: "full", maxRows: 3 }, //Query string data
  method: 'POST',
}, function(error, response, body){
  if(error) {
      console.log(error);
  } else {
  	var myResponse = JSON.parse(body);
    var cities = myResponse['geonames'];
    var name = process.argv[2]
    for (var i=0;i<cities.length;i++) {
    	if (cities[i].name == name) {
    		console.log(cities[i])
    	}
    }
  }
});

 rl.close();
});