// admin.js

var express = require('express');
var admin_routes = express.Router();
var auth = require('../middlewares/auth');
var Hotel = require('../schemas').Hotel;
var hotelUser = require('../schemas').hotelUser;
var API = require('../api');


admin_routes.get('/', function(req, res, next) {
	if (req.session.userType == "admin") {
		hotelUser.findById(req.session._id, function(err, data) {
			if (err) throw err;
			res.render('admin/adminBackend', {
				username: req.session.username,
				userType: req.session.userType
			});
		});
	} else {
		res.redirect('/admin/login');
	}
});


admin_routes.get('/login', function(req, res, next) {
	if (req.session.err) {
		var msg = req.session.err;
		req.session.err = null;
		res.render('admin/login', {
			message: msg
		});

	} else {
		res.render('admin/login');
	}
});

admin_routes.get('/signup', function(req, res) {
	if (req.session.username) {
		res.redirect('/');
	} else {
		res.render('admin/signup');
	}
});


admin_routes.post('/signup', API.adminSignUp);

admin_routes.post('/login', auth.adminAuth);

module.exports = admin_routes;