//signup.js
var User = require('../schemas').User;
var encrypt = require('../utils/encrypt');

module.exports = function(req, res, next) {
	User.find('req.body.username', function(result) {
		if (result !== null) {
			req.session.err="用户名已被注册";
		} else {
			var salt = Math.round(Math.random() * 100000);
			var psw_with_salt = encrypt(req.body.password, salt);
			console.log(req.body.username);
			var newUser = new User({
				name: req.body.username,
				gender: req.body.gender,
				password: {
					password: psw_with_salt,
					salt: salt
				},
				email: req.body.email,
				credit: 0
			});
			newUser.save();
			res.redirect('/login');
		}
	})
}