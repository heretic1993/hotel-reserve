//order.js

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var OrderSchema = new Schema({
	time: {
		type: Date,
		default: Date.now
	},
	hotel: {
		type: Schema.Types.ObjectId,
		ref: 'Hotel'
	},
	room: {
		type: Schema.Types.ObjectId,
		ref: 'Room'
	},
	user: {
		type: Schema.Types.ObjectId,
		ref: 'User'
	},
	customer: {
		name: String,
		telephone: String
	}
	arriveTime: {
		type: Date
	},
	status: Boolean
});

mongoose.model('Order', OrderSchema);