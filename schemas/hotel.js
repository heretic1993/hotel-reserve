//hotel.js

var mongoose = require('mongoose');

var Schema = mongoose.Schema;


var HotelSchema = new Schema({
	name: String,
	telephone: String,
	main_image: String,
	brief_intro: String,
	location: {
		city: String,
		area: String
	},
	comment: [{
		username: String,
		date: {
			type: Date,
			default: Date.now
		},
		content: String
	}],
	rooms: [{
		type: Schema.Types.ObjectId,
		ref: 'Room'
	}]
});



mongoose.model('Hotel', HotelSchema);