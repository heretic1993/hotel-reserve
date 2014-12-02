//findHotelByName.js

var Hotel = require('../schemas').Hotel;

var findHotelByName = function(req, res, next) {
	Hotel.find({'name':new RegExp(req.query.keywords)}, function(err, result) {
		if(err) throw err;
		res.jsonp(result);
		}
	)
}

module.exports=findHotelByName;