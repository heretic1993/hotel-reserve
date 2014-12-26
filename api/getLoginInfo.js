//getLoginInfo.js

var User = require('../schemas').User;
var hotelUser = require('../schemas').hotelUser;
var Admin = require('../schemas').Admin;

module.exports = function(req, res, next) {
	if (req.session.username !== null) {
		if (req.session.userType == "user") {
			User.findById(req.session._id, 'name email icon', function(err, user) {
				var temp = {};
				temp.user = user;
				temp.userType = req.session.userType;
				res.jsonp(temp);
			});
		} else if (req.session.userType == "hotel") {
			hotelUser.findById(req.session._id, 'name email icon', function(err, user) {
				var temp = {};
				temp.user = user;
				temp.userType = req.session.userType;
				res.jsonp(temp);
			});
		} else if (req.session.userType == "admin") {
			Admin.findById(req.session._id, 'name', function(err, admin) {
				var temp = {};
				temp.admin = admin;
				temp.userType = req.session.userType;
				res.jsonp(temp);
			});
		} else {
			res.end("Error!");
		}


	}
}