// hotelManipulate.js

var Order = require('../schemas').Order;
var User = require('../schemas').User;
var Hotel = require('../schemas').Hotel;
var Room = require('../schemas').Room;
var hotelUser = require('../schemas').hotelUser;



var hotelManipulate = function(req, res, next) {
	if (req.session.userType == 'admin') {
		Hotel.findById(req.params.id, function(err, hotel) {
			if (err) throw err;
			console.log(hotel);
			switch (req.params.action) {
				case "confirm":
					if (!hotel.confirm) {
						hotel.update({
							confirm: true
						}, {
							upsert: false
						}, function() {
							res.end('success');
						});
					}
					break;
				case "reject":
					if (hotel.confirm) {
						hotel.update({
							confirm: false
						}, {
							upsert: false
						}, function() {
							res.end('success');
						});
					}
					break;
				case "delete":
					hotel.remove(function(err, hotel) {
						if (err) throw err;
						res.end('success');
					})
					break;
				default:
					res.status(500).end("err");
			}

		})
	} else {
		res.status(403).end("You don't have permission to access here!");
	}

}

module.exports = hotelManipulate;