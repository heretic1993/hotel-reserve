//reserve.js

var User = require('../schemas').User;
var Hotel = require('../schemas').Hotel;
var Order = require('../schemas').Order;
var moment = require('moment');

var makeOrder = function(req, res, next) {
	if (req.session.userType == "user") {
		User.findById(req.session._id, function(err, user) {
			if (err) throw err;
			Hotel.findById(req.body.hotel, function(err, hotel) {
				if (err) throw err;
				var newOrder = new Order({
					hotel: hotel,
					room: req.body.room,
					user: user,
					customer: {
						name: req.body.name,
						telephone: req.body.telephone
					},
					arriveTime: req.body.date,
					status: 1
				});
				user.order.push(newOrder);
				hotel.order.push(newOrder);
				newOrder.save(function() {
					user.save(function() {
						hotel.save(function(){
							res.end("success");
						}
						);
					});
				});
			})
		})
	} else {
		res.redirect('/login');
	}
}

module.exports = makeOrder;