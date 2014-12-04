var express = require('express');
var router = express.Router();
var auth = require('../middlewares/auth.js');
var API = require('../api');
var hotelSignUp = require('../api').hotelSignUp;
var Hotel = require('../schemas').Hotel;


router.get('/', function(req, res) {

	Hotel.find({}, 'name main_image brief_intro').limit(6).exec(function(err, result) {
		res.render('index', {
			username: req.session.username,
			userType: req.session.userType,
			hotelInfo: result
		});
	})
});


router.get('/user', function(req, res) {
	if (req.session.userType == "user") {
		res.render('userBackend', {
			username: req.session.username,
			userType: req.session.userType
		});
	} else if (req.session.userType == "hotel") {
		res.render('hotel/hotelBackend', {
			username: req.session.username,
			userType: req.session.userType
		});
	} else {
		res.redirect('/login');
	}

});

router.get('/login', function(req, res, next) {
	if (req.session.err) {
		var msg = req.session.err;
		req.session.err = null;
		res.render('login', {
			message: msg
		});

	} else {
		res.render('login');
	}
});

router.post('/login', auth.userAuth);

router.get('/logout', function(req, res) {
	req.session.destroy(
		function() {
			res.redirect('/');
		});

})

router.get('/signup', function(req, res) {
	if (req.session.username) {
		res.redirect('/');
	} else {
		res.render('signup');
	}
});

router.post('/signup', hotelSignUp);

router.get('/getLoginInfo', API.getLoginInfo);


module.exports = router;