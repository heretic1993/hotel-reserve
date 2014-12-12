//addRoom.js

// var roomSchema = new Schema({
// 	name: String,
// 	size: Number,
// 	price: Number,
// 	picture: [
// 		type: String
// 	],
// 	status: [{
// 		date: Date,
// 		amount: Number
// 	}],
// 	hasWindows: Boolean
// })


var hotelUser = require('../schemas').hotelUser;
var Hotel = require('../schemas').Hotel;
var Room = require('../schemas').Room;

var addRoom = function(req, res, next) {
	if (req.session.userType == "hotel") {
		hotelUser.findById(req.session._id).populate("hotel").exec(function(err, result) {
			if (err) throw err;
			var newRoom = new Room({
				name: req.body.name,
				size: req.body.size,
				price: req.body.price,
				hasWindows: req.body.window
			});
			console.log(result);
			newRoom.save();
			result.hotel.rooms.push(newRoom);
			result.hotel.save(function(err){
				if(err) res.end(err);
				res.redirect('http://localhost:3000/hotel/Admin#rooms');
			});
		});
	} else {
		res.end("You don't hava permission to access here!");
	}
}

module.exports = addRoom;