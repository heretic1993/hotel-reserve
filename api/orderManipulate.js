//orderManipulate.js

var Order = require('../schemas').Order;
var orderManipulate = require('./orderManipulate');

var orderManipulate = function(req, res, next) {
	Order.findById(req.params.id, function(err, order) {
		if (req.session._id == order.user) {
			switch (req.params.action) {
				case "cancel":
					res.end("success");
					break;
				case "":
					break;
				default:
				    res.sendStatus(403);
			        res.end("Access denied!");
			}


		} else if (req.session._id == order.hotel) {

		} else if (req.session.userType == "admin") {

		} else {
			res.sendStatus(403);
			res.end("Access denied!");
		}
	})
}

module.exports = orderManipulate;