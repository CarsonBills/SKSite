var express = require('express');
var exphbs = require("express-handlebars")
var app = express();

app.use(express.static(__dirname + '/public'));

app.engine("handlebars", exphbs({defaultLayout: "main"}));
app.set("view engine", "handlebars");

app.get('/', function(req, res){
	res.render("index")
})

app.listen(8080);
console.log('port 8080')