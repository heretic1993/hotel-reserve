//hotel.js
var mongoose = require('mongoose');

var Room = require('../schemas/').Room;
var Hotel = require('../schemas/').Hotel;
var HotelUser = require('../schemas/').HotelUser;


mongoose.connect('mongodb://localhost/hotel');

var hotel1 = new Hotel({
	name: "酒店1",
	telephone: "028-39293321",
	main_image: "/images/hotel/1.jpg",
	brief_intro: "酒店1的简介，地处市区繁华地段",
	location: {
		city: '成都',
		area: '梁家巷'
	},
	comment: [{
		username: "wxf",
		content: "这个酒店不错，干净，前台服务态度好！"
	}],
	rooms: []
})

var hotel2 = new Hotel({
	name: "酒店2",
	telephone: "028-39293321",
	main_image: "/images/hotel/2.jpg",
	brief_intro: "酒店2的简介，地处市区繁华地段",
	location: {
		city: '成都',
		area: '梁家巷'
	},
	comment: [{
		username: "wxf",
		content: "这个酒店不错，干净，前台服务态度好！"
	}],
	rooms: []

})

var hotel3 = new Hotel({
	name: "酒店3",
	telephone: "028-39293321",
	main_image: "/images/hotel/3.jpg",
	brief_intro: "酒店3的简介，地处市区繁华地段",
	location: {
		city: '成都',
		area: '梁家巷'
	},
	comment: [{
		username: "wxf",
		content: "这个酒店不错，干净，前台服务态度好！"
	}],
	rooms: []
})

var hotel4 = new Hotel({
	name: "酒店4",
	telephone: "028-39293321",
	main_image: "/images/hotel/4.jpg",
	brief_intro: "酒店4的简介，地处市区繁华地段",
	location: {
		city: '成都',
		area: '梁家巷'
	},
	comment: [{
		username: "wxf",
		content: "这个酒店不错，干净，前台服务态度好！"
	}],
	rooms: []
})

var hotel5 = new Hotel({
	name: "酒店5",
	telephone: "028-39293321",
	main_image: "/images/hotel/5.jpg",
	brief_intro: "酒店5的简介，地处市区繁华地段",
	location: {
		city: '成都',
		area: '梁家巷'
	},
	comment: [{
		username: "wxf",
		content: "这个酒店不错，干净，前台服务态度好！"
	}],
	rooms: []
})

var hotel6 = new Hotel({
	name: "酒店6",
	telephone: "028-39293321",
	main_image: "/images/hotel/6.jpg",
	brief_intro: "酒店6的简介，地处市区繁华地段",
	location: {
		city: '成都',
		area: '梁家巷'
	},
	comment: [{
		username: "wxf",
		content: "这个酒店不错，干净，前台服务态度好！"
	}],
	rooms: []
})

var room1 = new Room({
	size: 30,
	roomType: '标准间',
	amount: 5,
	price: 150,
	status: {
		remaind: 5
	},
	hasWindows: true
})

var room2 = new Room({
	size: 15,
	roomType: '单人间',
	amount: 10,
	price: 100,
	status: {
		remaind: 9
	},
	hasWindows: true
})


var room3 = new Room({
	size: 15,
	roomType: '单人间',
	amount: 10,
	price: 100,
	status: {
		remaind: 9
	},
	hasWindows: true
})

var room4 = new Room({
	size: 15,
	roomType: '单人间',
	amount: 10,
	price: 100,
	status: {
		remaind: 9
	},
	hasWindows: true
})

var room5 = new Room({
	size: 15,
	roomType: '单人间',
	amount: 10,
	price: 100,
	status: {
		remaind: 9
	},
	hasWindows: true
})

var room6 = new Room({
	size: 15,
	roomType: '单人间',
	amount: 10,
	price: 100,
	status: {
		remaind: 9
	},
	hasWindows: true
})

var room7 = new Room({
	size: 15,
	roomType: '单人间',
	amount: 10,
	price: 100,
	status: {
		remaind: 9
	},
	hasWindows: true
})

var room8 = new Room({
	size: 15,
	roomType: '单人间',
	amount: 10,
	price: 100,
	status: {
		remaind: 9
	},
	hasWindows: true
})

var room9 = new Room({
	size: 15,
	roomType: '单人间',
	amount: 10,
	price: 100,
	status: {
		remaind: 9
	},
	hasWindows: true
})

var room10 = new Room({
	size: 15,
	roomType: '单人间',
	amount: 10,
	price: 100,
	status: {
		remaind: 9
	},
	hasWindows: true
})

hotel1.rooms.push(room1);
hotel1.rooms.push(room2);
hotel2.rooms.push(room3);
hotel3.rooms.push(room4);
hotel3.rooms.push(room5);
hotel3.rooms.push(room6);
hotel4.rooms.push(room7);
hotel5.rooms.push(room8);
hotel6.rooms.push(room9);
hotel6.rooms.push(room10);


hotel1.save();
hotel2.save();
hotel3.save();
hotel4.save();
hotel5.save();
hotel6.save();

return 0;