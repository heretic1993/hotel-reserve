//order.js

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var OrderSchema = new Schema({
	time: {
		type: Date,
		default: Date.now
	},
	hotel: String,
	room:String,
	user: String,
	arriveTime:{
		type: Date
	},
	status: Boolean
});

mongoose.model('Order', OrderSchema);