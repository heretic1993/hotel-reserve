// adminSignUp.js

var Admin = require('../schemas').Admin;
var encrypt = require('../utils/encrypt');

module.exports = function(req, res, next) {
	Admin.find('req.body.username', function(result) {
		if (result !== null) {} else {
			var salt = Math.round(Math.random() * 100000);
			var psw_with_salt = encrypt(req.body.password, salt);
			var newAdmin = new Admin({
				name: req.body.username,
				password: {
					password: psw_with_salt,
					salt: salt
				}
			});
			newAdmin.save();
			req.session.username = newAdmin.name;
			req.session._id = newAdmin._id;
			req.session.userType = "admin";
			res.redirect('/');
		}
	})
}