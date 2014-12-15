//fetchRoomInfo.js

var hotelUser = require('../schemas').hotelUser;
var Hotel = require('../schemas').Hotel;
var Room = require('../schemas').Room;

var fetchRoomInfo = function(req, res, next) {
	if (req.session.userType == "hotel") {
		hotelUser.findById(req.session._id).populate("hotel").exec(function(err, result) {
			var rooms = [];
			var info = [];
			if (err) throw err;
			rooms = result.hotel.rooms;
			Syc(rooms, rooms.length, info, function(info) {
				res.jsonp(info);
			});
		});
	} else {
		res.end("You don't hava permission to access here!");
	}
}



function Syc(rooms, length, info, cb) {
	Room.findById(rooms[length - 1], function(err, result) {
		info.push(result);
		if (length-1 !== 0) {
			return Syc(rooms, length - 1, info, cb);
		} else {
			return cb(info);
		}
	});
}

module.exports = fetchRoomInfo;