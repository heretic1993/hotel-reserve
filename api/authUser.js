//authUser.js

var User = require('../schemas').User;
var encrypt=require('../utils/encrypt');

var authUser = function(req, res, next) {
	User.findOne({
		'name': req.body.username
	}, function(err, user) {
		if (err) return err;
		if (user !== null) {
			if (user.password.password == encrypt(req.body.password,user.password.salt)) {
				req.session.username = req.body.username;
				res.write('Success').end();
			} else {
				req.session.err = "密码错误";
				res.status(403).send('Error password!');
			}
		} else {
			req.session.err = "错误的用户名";
			res.status(403).send('Error username!');
		}
	});

}