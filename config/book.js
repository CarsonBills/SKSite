exports.getSingleBook = function(input){
		var library = 
		{ 
			"Calling the Play" : 
			{
				description: "first in the series",
				links: {

				}
			},
			"Broken Play" : 
			{
				description: "second",
				links: {

				}
			},
		}
	return library[input];
}