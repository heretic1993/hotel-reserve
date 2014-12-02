//signup.js
var hotelUser = require('../schemas').hotelUser;
var encrypt = require('../utils/encrypt');

module.exports = function(req, res, next) {
	hotelUser.find('req.body.username', function(result) {
		if (result !== null) {
		} else {
			var salt=Math.round(Math.random() * 100000);
			var psw_with_salt=encrypt(req.body.password,salt);
			console.log(req.body.username);
			var newUser = new hotelUser({
				name: req.body.username,
				password: {
					password: psw_with_salt,
					salt: salt
				},
				email: "abc@qq.com"
			});
			newUser.save();
			res.redirect('/login');
		}
	})
}