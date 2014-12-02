//room.js

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var roomSchema = new Schema({
	size: Number,
	roomType: String,
	amount: Number,
	price: Number,
	status: {
		remaind: Number
	},
	hasWindows: Boolean
})

mongoose.model('Room', roomSchema);