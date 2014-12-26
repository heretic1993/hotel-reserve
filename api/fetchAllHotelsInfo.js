//fetchAllHotelsInfo.js

var Hotel = require('../schemas').Hotel;
var hotelUser = require('../schemas').hotelUser;

var fetchAllHotelsInfo = function(req, res, next) {
	Hotel.find({}, function(err, result) {
		if (err) throw err;
		res.jsonp(result);

	})
}

module.exports = fetchAllHotelsInfo;