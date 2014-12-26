//orderManipulate.js

var Order = require('../schemas').Order;
var User = require('../schemas').User;
var Hotel = require('../schemas').Hotel;
var Room = require('../schemas').Room;
var orderManipulate = require('./orderManipulate');

var orderManipulate = function(req, res, next) {
	Order.findById(req.params.id, function(err, order) {
		if (err) throw err;
		if (req.session._id == order.user) {
			switch (req.params.action) {
				case "cancel":
					if (order.status == 1) {
						order.update({
							status: 4
						}, {
							upsert: false
						}, function() {
							res.end("success");
						});
					}
					break;
				case "cancelAndReturn":
					if (order.status == 6) {
						order.update({
							status: 8
						}, {
							upsert: false
						}, function() {
							res.end("success");
						});
					} else if (order.status == 5) {
						order.update({
							status: 7
						}, {
							upsert: false
						}, function() {
							Room.findById(order.room, function(err, room) {
								User.findByIdAndUpdate(req.session._id, {
									$inc: {
										money: room.price
									}
								}, {
									upsert: false
								}, function(err) {
									if (err) throw err;
									res.end("success");
								})
							});
						});
					}
					break;
				case "delete":
					if (order.status == 3 || order.status == 4 || order.status == 7 || order.status == 11 || order.status == 12) {
						User.findById(req.session._id, function(err, user) {
							if (err) throw err;
							var index = user.order.indexOf(req.params.id);
							var newArray = [];
							if (index !== -1) {
								for (var i = 0; i < user.order.length; i++) {
									if (i !== index) {
										newArray.push(user.order[i]);;
									}
								}
							}
							user.order = newArray;
							user.save(function(err) {
								if (err) throw err;
								res.end('success');
							})
						})
					}
					break;
				case "pay":
					if (order.status == 1 || order.status == 2) {
						res.redirect("/pay/" + order._id);
					}
					break;
				default:
					res.sendStatus(403);
					res.end("Access denied!");
			}
			//-----------------hotel----------------------
		} else if (req.session._hid == order.hotel) {
			switch (req.params.action) {
				case "confirm":
					if (order.status == 1) {
						order.update({
							status: 2
						}, {
							upsert: false
						}, function() {
							res.end("success");
						});
					} else if (order.status == 5) {
						order.update({
							status: 6
						}, {
							upsert: false
						}, function() {
							res.end("success");
						});
					}
					break;
				case "reject":
					if (order.status == 1) {
						order.update({
							status: 3
						}, {
							upsert: false
						}, function() {
							res.end("success");
						});
					}
					break;
				case "arrived":
					if (order.status == 2 || order.status == 6 || order.status == 9) {
						order.update({
							status: 10
						}, {
							upsert: false
						}, function() {
							res.end("success");
						});
					}
					break;
				case "depart":
					if (order.status == 10) {
						order.update({
							status: 11
						}, {
							upsert: false
						}, function() {
							res.end("success");
						});
					}
					break;
				case "delete":
					if (order.status == 3 || order.status == 4 || order.status == 7 || order.status == 11 || order.status == 12) {
						Hotel.findById(req.session._hid, function(err, user) {
							if (err) throw err;
							var index = user.order.indexOf(req.params.id);
							var newArray = [];
							if (index !== -1) {
								for (var i = 0; i < user.order.length; i++) {
									if (i !== index) {
										newArray.push(user.order[i]);;
									}
								}
							}
							user.order = newArray;
							user.save(function(err) {
								if (err) throw err;
								res.end('success');
							})
						})
					}
					break;
				case "cancelAndReturn":
					if (order.status == 5) {
						//return money!
						order.update({
							status: 7
						}, {
							upsert: false
						}, function() {
							Room.findById(order.room, function(err, room) {
								User.findByIdAndUpdate(order.user, {
									$inc: {
										money: room.price
									}
								}, {
									upsert: false
								}, function(err) {
									if (err) throw err;
									res.end("success");
								})
							});
						});
					}
					break;
				case "agree":
					if (order.status == 8) {
						order.update({
							status: 7
						}, {
							upsert: false
						}, function() {
							Room.findById(order.room, function(err, room) {
								User.findByIdAndUpdate(order.user, {
									$inc: {
										money: room.price
									}
								}, {
									upsert: false
								}, function(err) {
									if (err) throw err;
									res.end("success");
								})
							});
						});
					}
					break;
				case "notArrived":
					if (order.status == 2 || order.status == 6 || order.status == 9) {
						order.update({
							status: 12
						}, {
							upsert: false
						}, function() {
							res.end("success");
						});
					}
					break;
				case "disagree":
					if (order.status == 8) {
						order.update({
							status: 9
						}, {
							upsert: false
						}, function() {
							res.end("success");
						});
					}
				default:
					res.sendStatus(403);
					res.end("Access denied!");
			}
		} else if (req.session.userType == "admin") {

		} else {
			res.sendStatus(403);
			res.end("Access denied!");
		}
	})
}

module.exports = orderManipulate;