exports.getSingleBook = function(input){
		var library = 
		{ 
			"Calling the Play" : {
			title: "Calling the Play",
			description: "first in the series"},
		"Broken Play" : {
			title: "Broken Play",
			description: "second"}
		}
	console.log(library[input])
	return library[input];
}