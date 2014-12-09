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
	hotels: [{
		type: Schema.Types.ObjectId,
		ref: 'Hotel'
	}]

})

mongoose.model('hotelUser', hotelUserSchema);