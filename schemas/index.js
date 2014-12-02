var mongoose = require('mongoose');

var User = require('./user');
var Hotel = require('./hotel');
var hotelUser = require('./hotelUser');
var Room = require('./room');


exports.User = mongoose.model('User');
exports.Room = mongoose.model('Room');
exports.Hotel = mongoose.model('Hotel');
exports.hotelUser = mongoose.model('hotelUser');