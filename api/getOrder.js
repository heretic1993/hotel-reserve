//getOrder.js

var hotelUser = require('../schemas').hotelUser;
var Hotel = require('../schemas').Hotel;
var Room = require('../schemas').Room;
var User = require('../schemas').User;
var Order = require('../schemas').Order;

var getOrder = function(req, res, next) {
	if (req.session.userType == 'user') {
		User.findById(req.session._id).populate('order').exec(function(err, result) {
			if (err) throw err;
			res.jsonp(result.order);
		});
	} else if (req.session.userType == 'hotel') {
		Hotel.findById(req.session._hid).populate('order').exec(function(err, result) {
			if (err) throw err;
			res.jsonp(result.order);
		});
	} else {
		res.end("You don't have permission to access here!");
	}
}

module.exports = getOrder;