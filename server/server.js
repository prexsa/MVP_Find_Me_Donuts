var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');

//var config = require('./config.js');

var app = express();

app.use(bodyParser.json());
app.use(cors());
app.use(express.static(__dirname + '/../client'));


/*************** YELP **********************/


var yelp = require('./config.js');


app.post('/', function(req, res){
	yelp.search({ term: 'donuts', location: req.body.zipCode })
		.then(function (data) {
		  //console.log("INSIDE SERVER APP", data);
		  res.send(data);
		})
		.catch(function (err) {
		  console.error(err);
		});
	console.log("The server is up and running");
})



app.listen(3000);
console.log("Listening on port 3000");