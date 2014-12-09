//hotelUser.js
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var hotelUserSchema = new Schema({
	name: String,
	password: {
		password: String,
		salt: String
	},
	email: String,
	telephone: String,
	hotel_name: String,
	hotel_telephone: String,
	hotel_main_image: String,
	hotel_brief_intro: String,
	hotel_intro: String,
	hotel_location: {
		city: String,
		area: String
	},
	hotel_comment: [{
		type: Schema.Types.ObjectId,
		ref: 'Comment'
	}],
	hotel_rooms: [{
		type: Schema.Types.ObjectId,
		ref: 'Room'
	}],
	order: [{
		type: Schema.Types.ObjectId,
		ref: 'order'
	}]

})

mongoose.model('hotelUser', hotelUserSchema);