var express = require('express');
var exphbs = require("express-handlebars");
var app = express();

var library = require('./config/library.js');
var books = require('./config/book.js');

app.use(express.static(__dirname + '/public'));

app.engine("handlebars", exphbs({defaultLayout: "main"}));
app.set("view engine", "handlebars");

app.get('/', function(req, res){
	res.render("index")
});



app.get('/library', function(req, res){
	res.render("library", {
		content: library.getLibrary()
	});
});

app.get('/books/:title', function(req, res, next){
	var title = req.params.title
	res.render('book', {
		book: books.getSingleBook(title)
	});
});

app.get('/events', function(req, res){
	res.render('events')
})



app.listen(8080);
console.log('port 8080');