// fetchMyInfo.js

var Hotel = require('../schemas').Hotel;
var User = require('../schemas').User;
var Admin = require('../schemas').Admin;

var fetchMyInfo = function(req, res, next) {
	if (req.session.userType == 'user') {
		User.findById(req.session._id, "name gender email credit icon money", function(err, user) {
			if (err) throw err;
			res.jsonp(user);
		})
	} else if (req.session.userType == 'hotel') {
		Hotel.findById(req.session._id, "name", function(err, hotel) {
			if (err) throw err;
			res.jsonp(hotel);
		})
	} else if (req.session.userType == 'admin') {
		Admin.findById(req.session._id, "name", function(err, admin) {
			if (err) throw err;
			res.jsonp(admin);
		})
	} else {
		res.end("You don't have permission to access here!");
	}

}

module.exports = fetchMyInfo;