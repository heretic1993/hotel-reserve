//index.js
var getLoginInfo = require('./getLoginInfo');
var fetchHotelInfo = require('./fetchHotelInfo');
var fetchAllHotelsInfo = require('./fetchAllHotelsInfo');
var authUser = require('./authUser');
var findHotel = require('./findHotel');
var signup = require('./signup');
var hotelSignUp = require('./hotelSignup');
var addHotelInfo = require('./addHotelInfo');
var addRoom = require('./addRoom');

exports.getLoginInfo = getLoginInfo;
exports.fetchHotelInfo = fetchHotelInfo;
exports.fetchAllHotelsInfo = fetchAllHotelsInfo;
exports.authUser = authUser;
exports.findHotel = findHotel;
exports.signup = signup;
exports.hotelSignUp = hotelSignUp;
exports.addHotelInfo = addHotelInfo;
exports.addRoom = addRoom;