// addHotelInfo.js

var hotelUser = require('../schemas').hotelUser;
var Hotel = require('../schemas').Hotel;

var addHotelInfo = function(req, res, next) {
	if (req.session.userType == "hotel") {
		hotelUser.findById(req.session._id, function(err, result) {
			if (err) throw err;
			if (result.hotel == null) {
				var info = new Hotel({
					name: req.body.hotelname,
					telephone: req.body.telephone,
					main_image: req.body.image,
					brief_intro: req.body.brief_intro,
					intro: req.body.intro,
					location: {
						city: req.body.city,
						area: req.body.area
					}
				});
				info.save();
				result.hotel = info._id;
				result.save();
				res.redirect("Admin");
			} else {
				res.end("You don't hava permission to access here!");
			}
		})
	}
}

module.exports = addHotelInfo;