//encrypt.js
var utility = require('utility');


module.exports = function(password, salt) {
	return utility.md5(password+salt);
}