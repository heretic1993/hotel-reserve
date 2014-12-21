//fetchRoomById.js
var Room = require('../schemas').Room;

var fetchRoomById = function(req, res, next) {
	Room.findById(req.params.id, function(err, result) {
		if(err) throw err;
		res.jsonp(result);
		}
	)
}

module.exports=fetchRoomById;