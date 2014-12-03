var express = require('express');
var router = express.Router();
var auth = require('../middlewares/auth.js');
var signup = require('../api').signup;
var hotelSignUp = require('../api').hotelSignUp;
var Hotel = require('../schemas').Hotel;


router.get('/', function(req, res) {

	Hotel.find({}, 'name main_image brief_intro').limit(6).exec(function(err, result) {
		res.render('index', {
			username: req.session.username,
			hotelInfo: result
		});
	})

	console.log(req.session.username);
});


router.get('/user', function(req, res) {
	if(req.session.username){
		res.render('userBackend',{username: req.session.username,});
	}
	else{
		res.render("index");
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
})
router.post('/signup', hotelSignUp);




module.exports = router;