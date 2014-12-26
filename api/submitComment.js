// submitComment.js

var User = require('../schemas').User
var Hotel = require('../schemas').Hotel;
var Order = require('../schemas').Order;
var Comment = require('../schemas').Comment;
var mongoose = require('mongoose');

var submitComment = function(req, res, next) {
	if (req.session.userType == "user") {
		console.log(req.body.orderId);
		Order.findById(req.body.orderId, function(err, order) {
			if (err) throw err;
			if (order.user == req.session._id && order.status == 11) {
				User.findById(req.session._id, function(err, user) {
					if (err) throw err;
					Hotel.findById(order.hotel, function(err, hotel) {
						if (err) throw err;
						var newComment = new Comment({
							username: user.name,
							hotel: hotel.name,
							content: req.body.comment,
							star: req.body.star
						});
						newComment.save(function() {
							user.comment.push(newComment);
							hotel.comment.push(newComment);
							user.save(function() {
								hotel.save(function() {
									order.status = 13;
									order.save(function() {
										res.end("success");
									})
								});
							});
						});
					})
				})

			} else {
				res.end("You don't have permission to access here!");
			}
		});
	} else {
		res.end("You don't have permission to access here!");
	}
}

module.exports = submitComment;