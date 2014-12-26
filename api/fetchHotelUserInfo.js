// fetchHotelUserInfo.js
var hotelUser = require('../schemas').hotelUser;

var fetchHotelUserInfo = function(req, res, next) {
	if (req.session.userType == "admin") {
		hotelUser.findById(res.params.id, function(err, result) {
			if (err) throw err;
			res.jsonp(result);
		})
	}
	else {
		res.status(500).end("You don't have permission to access here !");
	}

}

module.exports = fetchHotelUserInfo;