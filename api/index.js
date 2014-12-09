//index.js
var getLoginInfo = require('./getLoginInfo');
var fetchHotelInfo = require('./fetchHotelInfo');
var fetchAllHotelsInfo = require('./fetchAllHotelsInfo');
var authUser = require('./authUser');
var findHotel = require('./findHotel');
var signup = require('./signup');
var hotelSignUp = require('./hotelSignup');

exports.getLoginInfo = getLoginInfo;
exports.fetchHotelInfo = fetchHotelInfo;
exports.fetchAllHotelsInfo = fetchAllHotelsInfo;
exports.authUser = authUser;
exports.findHotel = findHotel;
exports.signup = signup;
exports.hotelSignUp = hotelSignUp;