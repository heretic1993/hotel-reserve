// fetchRoomByHotelId.js

var Hotel = require('../schemas').Hotel;
var Room = require('../schemas').Room;

var fetchRoomByHotelId = function(req, res, next) {
	Hotel.findById(req.params.id, function(err, result) {
		if (err) throw err;
		var rooms = [];
		var info = [];
		if (err) throw err;
		rooms = result.rooms;
		Syc(rooms, rooms.length, info, function(info) {
			res.jsonp(info);
		});

	})
}


function Syc(rooms, length, info, cb) {
	Room.findById(rooms[length - 1], function(err, result) {
		info.push(result);
		if (length - 1 !== 0) {
			return Syc(rooms, length - 1, info, cb);
		} else {
			return cb(info);
		}
	});
}
module.exports = fetchRoomByHotelId;