//fetchUserInfo.js

var User = require('../schemas').User;

var fetchUserInfo = function(req, res, next) {
	User.findById(req.params.id,'name gender email credit',function(err,result){
		if(err) throw err;
		res.jsonp(result);
	})
}

module.exports = fetchUserInfo;