//fetchHotelInfo.js

var Hotel = require('../schemas').Hotel;

var fetchHotelInfo = function(req, res, next) {
	Hotel.findById(req.params.id, function(err, result) {
		if(err) throw err;
		res.jsonp(result);
		}
	)
}

module.exports=fetchHotelInfo;