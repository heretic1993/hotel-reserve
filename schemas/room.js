//room.js

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var roomSchema = new Schema({
	name: String,
	size: Number,
	price: Number,
	picture: [{
		type: String
	}],
	status: [{
		date: Date,
		amount: Number
	}],
	hasWindows: Boolean
})

mongoose.model('Room', roomSchema);