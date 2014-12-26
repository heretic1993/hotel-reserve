//auth.js
var utility = require('utility');
var encrypt = require('../utils/encrypt');
var User = require("../schemas").User;
var hotelUser = require("../schemas").hotelUser;
var Admin = require("../schemas").Admin;

exports.userAuth = function(req, res, next) {
	User.findOne({
		'name': req.body.username
	}, function(err, user) {
		if (err) return err;
		if (user !== null) {
			//console.log(req.body.password);
			if (user.password.password == encrypt(req.body.password,user.password.salt)) {
				req.session.username = user.name;
				req.session._id = user._id;
				req.session.userType = "user";
				res.redirect('/');
			} else {
				req.session.err = "密码错误";
				res.redirect('login');
			}
		} else {
			req.session.err = "错误的用户名";
			res.redirect('login');
		}
		console.log(user);
	});
}


exports.hotelAuth = function(req, res, next) {
	hotelUser.findOne({
		'name': req.body.username
	}, function(err, user) {
		if (err) return err;
		if (user !== null) {
			//console.log(req.body.password);
			if (user.password.password == encrypt(req.body.password,user.password.salt)) {
				req.session.username = user.name;
				req.session._id = user._id;
				req.session._hid= user.hotel;
				req.session.userType = "hotel";
				res.redirect('/');
			} else {
				req.session.err = "密码错误";
				res.redirect('login');
			}
		} else {
			req.session.err = "错误的用户名";
			res.redirect('login');
		}
		console.log(user);
	});
}

exports.adminAuth = function(req, res, next) {
	Admin.findOne({
		'name': req.body.username
	}, function(err, admin) {
		if (err) return err;
		if (admin !== null) {
			if (admin.password.password == encrypt(req.body.password,admin.password.salt)) {
				req.session.username = admin.name;
				req.session._id = admin._id;
				req.session.userType = "admin";
				res.redirect('/');
			} else {
				req.session.err = "密码错误";
				res.redirect('login');
			}
		} else {
			req.session.err = "错误的用户名";
			res.redirect('login');
		}
	});
}
