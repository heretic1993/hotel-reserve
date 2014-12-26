// pay.js
var User = require('../schemas').User
var Hotel = require('../schemas').Hotel;
var Order = require('../schemas').Order;

var pay = function(req, res, next) {
	if (req.session.userType == "user") {
		Order.findById(req.params.orderId).populate("room").exec(function(err, order) {
			if (err) throw err;
			if (order.user == req.session._id && (order.status == 1 || order.status == 2)) {
				res.render("pay", {
					amount: order.room.price,
					orderId: req.params.orderId
				});
			} else {
				res.end("You don't have permission to access here!");
			}
		})

	} else {
		res.end("You don't have permission to access here!");
	}
}

module.exports = pay;