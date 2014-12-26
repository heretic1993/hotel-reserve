// successfullyPay.js
var User = require('../schemas').User
var Hotel = require('../schemas').Hotel;
var Order = require('../schemas').Order;

var successfullyPay = function(req, res, next) {
	if (req.session.userType == "user") {
		Order.findById(req.body.orderId).populate("room").exec(function(err, order) {
			if (err) throw err;
			if (order !== null) {
				if (order.status == 1) {
					order.update({
						status: 5
					}, {
						upsert: false
					}, function() {
						res.end("success");
					});
				} else if (order.status == 2) {
					order.update({
						status: 6
					}, {
						upsert: false
					}, function() {
						res.end("success");
					});
				}
			}
		})

	} else {
		res.end("You don't have permission to access here!");
	}
}

module.exports = successfullyPay;