//findHotel.js

var Hotel = require('../schemas').Hotel;
var findHotelByName = require('./findHotelByName');

var findHotel = function(req, res, next) {
	console.log(req.query.searchType);
	switch (req.query.searchType) {
		case 'name':
			findHotelByName(req, res, next);
			break;
		case 'keywords':

			break;
		case 'area':
			break;
	}
}

module.exports = findHotel;