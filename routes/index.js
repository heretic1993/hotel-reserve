var express = require('express');
var router = express.Router();
var auth = require('../middlewares/auth.js');
var API = require('../api');
var signup = require('../api').signup;
var HotelUser = require('../schemas').hotelUser;
var Hotel = require('../schemas').Hotel;


router.get('/', function(req, res) {
	Hotel.find({}, 'name brief_intro main_image location').limit(6).exec(function(err, result) {
		console.log(result);
		res.render('index', {
			username: req.session.username,
			userType: req.session.userType,
			hotelInfo: result
		});
	});

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
			res.clearCookie;
			res.redirect('/#');
		});

})

router.get('/signup', function(req, res) {
	if (req.session.username) {
		res.redirect('/');
	} else {
		res.render('signup');
	}
});

router.post('/signup', signup);


router.get('/reserve/:id', function(req, res) {
	if (req.session.userType == "user") {
		res.render('hotel/reserve', {
			username: req.session.username,
			userType: req.session.userType,
			hotel_id: req.params.id
		});
	} else {
		req.session.err = "请先以普通用户登入";
		res.redirect('/login');
	}
});
router.post('/reserve', API.makeOrder);

router.get('/pay/:orderId', API.pay);
router.post('/pay', API.successfullyPay);
router.get('/comment/:orderId', API.comment);
router.post('/comment', API.submitComment);

router.get('/getLoginInfo', API.getLoginInfo);
router.get('/getComment/:type', API.getComment);
router.get('/getComment/:type/:id', API.getComment);
router.get('/getOrder', API.getOrder);
router.get('/fetchUserInfo/:id', API.fetchUserInfo);
router.get('/orderManipulate/:id/:action', API.orderManipulate);
router.get('/hotelManipulate/:id/:action', API.hotelManipulate);
router.get('/fetchMyInfo', API.fetchMyInfo);


module.exports = router;