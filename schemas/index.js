var mongoose = require('mongoose');

var User = require('./user');
var hotelUser = require('./hotelUser');
var Room = require('./room');
var Comment = require('./comment');
var Order = require('./order');
var Admin = require('./admin');


exports.User = mongoose.model('User');
exports.Room = mongoose.model('Room');
exports.hotelUser = mongoose.model('hotelUser');
exports.Hotel = mongoose.model('Hotel');
exports.Comment = mongoose.model('Comment');
exports.Order = mongoose.model('Order');
exports.Admin = mongoose.model('Admin');