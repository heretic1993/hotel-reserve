//index.js
var fetchHotelInfo = require('./fetchHotelInfo');
var fetchAllHotelsInfo = require('./fetchAllHotelsInfo');
var authUser = require('./authUser');
var findHotel=require('./findHotel');
var hotelSignUp=require('./hotelSignup');


exports.fetchHotelInfo = fetchHotelInfo;
exports.fetchAllHotelsInfo = fetchAllHotelsInfo;
exports.authUser = authUser;
exports.findHotel = findHotel;
exports.hotelSignUp=hotelSignUp;