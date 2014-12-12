var express = require('express');
var hotel_routes = express.Router();
var auth = require('../middlewares/auth');
var Hotel = require('../schemas').Hotel;
var hotelUser = require('../schemas').hotelUser;
var API = require('../api');

hotel_routes.get('/', function(req, res, next) {
	next();

})

hotel_routes.get('/admin', function(req, res) {
	if (req.session.userType == "hotel") {
		hotelUser.findById(req.session._id, function(err, data) {
			if (err) throw err;
			console.log("!!!!!!!!"+data.hotel);
			if (data.hotel !== undefined) {
				res.render('hotel/hotelBackend', {
					username: req.session.username,
					userType: req.session.userType
				});
			} else {
				res.render('hotel/noneHotelMsg');
			}
		});

	} else {
		res.end("You don't have access permission,please login first!");
	}
});

hotel_routes.get('/details', function(req, res, next) {
	next();
});

hotel_routes.get('/details/:id', function(req, res) {
	Hotel.findById(req.params.id, 'name main_image brief_intro comment', function(err, hotel) {
		if (err) throw err;
		res.render('hotel/details', {
			username: req.session.username,
			hotel: hotel,
			userType: req.session.userType
		});

	})

});


hotel_routes.get('/login', function(req, res, next) {
	if (req.session.err) {
		var msg = req.session.err;
		req.session.err = null;
		res.render('hotel/hotelLogin', {
			message: msg
		});

	} else {
		res.render('hotel/hotelLogin');
	}
});

hotel_routes.get('/signup', function(req, res) {
	if (req.session.username) {
		res.redirect('/');
	} else {
		res.render('hotel/hotelSignup');
	}
});


hotel_routes.post('/signup', API.hotelSignUp);

hotel_routes.get('/addHotelInfo', function(req, res) {
	if (req.session.userType == "hotel") {
		res.render('hotel/addInfo');
	} else {
		res.redirect('/hotel/login');
	}
});

hotel_routes.post('/addHotelInfo', API.addHotelInfo);
hotel_routes.post('/addRoom',API.addRoom);

hotel_routes.post('/login', auth.hotelAuth);

hotel_routes.get('/fetchHotelInfo/:id', API.fetchHotelInfo);
hotel_routes.get('/fetchAllHotelsInfo', API.fetchAllHotelsInfo);
hotel_routes.get('/findHotel', API.findHotel);

module.exports = hotel_routes;