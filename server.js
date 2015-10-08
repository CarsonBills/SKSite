var express = require('express');
var exphbs = require("express-handlebars");
var app = express();

var library = require('./config/library.js');
var books = require('./config/book.js');

app.use(express.static(__dirname + '/public'));

app.engine("handlebars", exphbs({defaultLayout: "main"}));
app.set("view engine", "handlebars");

app.get('/', function(req, res){
	res.render("index", {
		latest: books.getSingleBook("Broken Play"),
		next: books.getSingleBook("Calling the Play")
	});
});

app.get('/library', function(req, res){
	res.render("library", {
		all: library.getLibrary(),
		brothers: library.getLibrary()["Brothers in Arms"],
		saints: library.getLibrary()["The Saint's Devils"],
		mercury: library.getLibrary()["Mercury Rising"],
		highlanders: library.getLibrary()["93rd Highlanders"],
		rebels: library.getLibrary()["Birmingham Rebels"],
		standalone: library.getLibrary()["Standalone Romance"],
		anthologies: library.getLibrary()["Romance Anthologies"]
	});
});

app.get('/books/:title', function(req, res){
	var title = req.params.title
	res.render('book', {
		book: books.getSingleBook(title)
	});
});

app.get('/events', function(req, res){
	res.render('events');
});

app.get('/videos', function(req, res){
	res.render('videos');
});

app.get('/about', function(req, res){
	res.render("about");
});


app.listen(8080);
console.log('port 8080');