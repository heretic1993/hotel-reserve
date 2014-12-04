//getLoginInfo.js

var User = require('../schemas').User;

module.exports = function(req, res, next) {
	if (req.session.username !== null) {
		User.findOne({
			'name': req.session.username
		}, '_id name email',function(err, user) {
			res.jsonp(user);
		});
	}
}