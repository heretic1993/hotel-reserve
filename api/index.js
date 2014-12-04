//index.js
var getLoginInfo = require('./getLoginInfo');
var fetchHotelInfo = require('./fetchHotelInfo');
var fetchAllHotelsInfo = require('./fetchAllHotelsInfo');
var authUser = require('./authUser');
var findHotel = require('./findHotel');
var hotelSignUp = require('./hotelSignup');

exports.getLoginInfo = getLoginInfo;
exports.fetchHotelInfo = fetchHotelInfo;
exports.fetchAllHotelsInfo = fetchAllHotelsInfo;
exports.authUser = authUser;
exports.findHotel = findHotel;
exports.hotelSignUp = hotelSignUp;