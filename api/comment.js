// comment.js

var User = require('../schemas').User
var Hotel = require('../schemas').Hotel;
var Order = require('../schemas').Order;
var Comment = require('../schemas').Comment;

var comment = function(req, res, next) {
	if (req.session.userType == "user") {
		Order.findById(req.params.orderId, function(err, order) {
			if (err) throw err;
			if (order.user == req.session._id && order.status == 11) {
				res.render('comment', {
					orderId: order._id
				})
			} else {
				res.end("You don't have permission to access here!");
			}
		});
	} else {
		res.end("You don't have permission to access here!");
	}
}

module.exports = comment;