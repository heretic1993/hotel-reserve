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
	hotel: {
		type: Schema.Types.ObjectId,
		ref: 'Hotel'
	}
})

var hotelSchema = new Schema({
	name: String,
	telephone: String,
	main_image: String,
	brief_intro: String,
	intro: String,
	location: {
		city: String,
		area: String
	},
	comment: [{
		type: Schema.Types.ObjectId,
		ref: 'Comment'
	}],
	rooms: [{
		type: Schema.Types.ObjectId,
		ref: 'Room'
	}],
	order: [{
		type: Schema.Types.ObjectId,
		ref: 'Order'
	}]
});


mongoose.model('Hotel', hotelSchema);
mongoose.model('hotelUser', hotelUserSchema);