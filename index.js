var express = require('express');
var bodyParser = require('body-parser');
var fs = require('fs');
var app = express();
var port = process.env.PORT || 8000;

app.use(express.static(__dirname + '/server'));
app.use(express.static(__dirname + '/public'));

app.use(bodyParser.urlencoded());

//app.use('/images', express.static(__dirname +'/images'));

app.get('/', function(req, res){
    res.sendfile('ash.html');
});

app.listen(port, function(){
    console.log('server is running on ' + port);
});

app.post('/submit', function(req, res){
	console.log(req.body.input)
	fs.writeFile('Output.txt', req.body.input, function (err) {
	  if (err) throw err;
	  console.log('Saved!');
	  res.sendfile('saved.html');
	});
});