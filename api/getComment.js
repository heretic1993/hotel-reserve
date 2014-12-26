//getComment.js
var HotelUser = require('../schemas').hotelUser;
var Hotel = require('../schemas').Hotel;
var User = require('../schemas').User;
var Comment = require('../schemas').Comment;

var getComment = function(req, res, next) {
	if (req.params.type == "user") {
		User.findById(req.session._id).populate("comment").exec(function(err, result) {
			if (err) throw err;
			if (result !== null) {
				var comment = result.comment;
				res.jsonp(comment);
			} else {
				res.end("You don't have permission!");
			}
		});
	} else if (req.params.type == "hotel") {
		var idToFind;
		if (req.session.userType == "hotel") {
			if (req.params.id == undefined) {
				idToFind=req.session._hid;
			} else {
				idToFind = req.params.id;
			}
		} else {
			idToFind = req.params.id;
		}

		Hotel.findById(idToFind).populate("comment").exec(function(err, result) {
			if (err) throw err;
			if (result !== null) {
				var comment = result.comment;
				res.jsonp(comment);
			} else {
				res.end("null");
			}
		});
	} else {
		Comment.find(function(err, result) {
			res.jsonp(result);
		});
	}
}

module.exports = getComment;