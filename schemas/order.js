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
	},
	arriveTime: {
		type: Date
	},
	status: Number
});

//status
//1 for reserved
//2 for has been confirmed by hotel
//3 for has been refused by hotel
//4 for has been canceled by user
//5 for has been payed by user
//6 for payed and confirmed
//7 for has returned the money
//8 for signing up for return
//9 for cancel refused by hotel
//10 for have arrived the hotel
//11 for have departed from the hotel

mongoose.model('Order', OrderSchema);