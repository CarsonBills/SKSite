exports.getLibrary = function(){

	var library = {

	"Latest": {
		cover: "broken_play.jpg",
		title: "Broken Play",
		buy_link: "http://amzn.to/1GyFTfg",
	},

	"Upcoming": [
		{
			title: "Cherry Bomb",
			cover: "cherry_bomb.jpg",
			release: "January 12, 2016",
			available_for_preorder: "December 13, 2015"
		},
		{
			title: "Calling the Play",
			cover: "calling_the_play.jpg",
			release: "December 1, 2015",
			preorder: "http://amzn.to/1GyFTfg",
		},
	],

	"Brothers in Arms": [

		{
			title: "The Courage to Love",
			cover: "the_courage_to_love.jpg"
		},

		{
			title: "Arms of Love",
			cover: "arms_of_love.jpg"
		},
		{
			title: "At Love's Command",
			cover: "at_love's_command.jpg"
		},
		{
			title: "Defeated By Love",
			cover: "defeated_by_love.jpg"
		},
		{
			title: "Fight For Love",
			cover: "fight_for_love.jpg"
		},
		{
			title: "Love and War",
			cover: "love_and_war.jpg"
		},
		{
			title: "Love Betrayed",
			cover: "love_betrayed.jpg"
		},
		{
			title: "Love in Exile",
			cover: "love_in_exile.jpg"
		},
		{
			title: "Love Returns",
			cover: "love_returns.jpg"
		},
		{
			title: "Love Under Siege",
			cover: "love_under_siege.jpg"
		},
		{
			title: "Love's Fortress",
			cover: "love's_fortress.jpg"
		},
		{
			title: "Love's Strategy",
			cover: "love's_strategy.jpg"
		},
		{
			title: "Love's Surrender",
			cover: "love's_surrender.jpg"
		},

		{
			title: "Prisoner of Love",
			cover: "prisoner_of_love.jpg"
		},
		{
			title: "Retreat From Love",
			cover: "retreat_from_love.jpg"
		},

	],

	"The Saint's Devils": [

		{
			title: "Devil in My Arms",
			cover: "devil_in_my_arms.jpg"
		},
		{
			title: "Tempting a Devil",
			cover: "tempting_a_devil.jpg"
		},
		{
			title: "The Devil's Thief",
			cover: "the_devil's_thief.jpg"
		},

	],

	"Mercury Rising" : [

		{
			title: "Cherry Pie",
			cover: "cherry_pie.jpg"
		},
		{
			title: "Cherry Bomb",
			cover: "cherry_bomb.jpg"
		}

	],

	"93rd Highlanders" : [

		{
			title: "Brodie",
			cover: "brodie.jpg"
		},
		{
			title: "Conall",
			cover: "conall.png"
		},
		{
			title: "Douglas",
			cover: "douglas.jpg"
		},
		{
			title: "Hamish",
			cover: "hamish.jpg"
		},
		{
			title: "The 93rd Highlanders",
			cover: "93rd_vol1.jpg"
		},

	],

	"Birmingham Rebels" : [

		{
			title: "Broken Play",
			cover: "broken_play.jpg"
		},
		{
			title: "Calling the Play",
			cover: "calling_the_play.jpg"
		},

	],

	"Standalone Romance" : [

		{
			title: "A Lady in Waiting",
			cover: "a_lady_in_waiting.jpg"
		},
		{
			title: "Islands",
			cover: "islands.jpg"
		},
		{
			title: "Play it Again, Sam",
			cover: "play_it_again_sam.jpg"
		},

	],

	"Romance Anthologies" : [

		{
			title: "Aged To Perfection",
			cover: "aged_to_perfection.jpg"
		},
		{
			title: "Esprit of Corps",
			cover: "esprit_of_corps.jpg"
		},
		{
			title: "Gift of Desire",
			cover: "gift_of_desire.jpg"
		},
		{
			title: "Jewels of the Nile",
			cover: "jewels_of_the_nile.jpg"
		},
		{
			title: "Tempt The Cougar",
			cover: "tempt_the_cougar.jpg"
		},
	]}
	console.log(library["Upcoming"])
	return library
}
