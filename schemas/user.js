//user.js

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UserSchema = new Schema({
	name: String,
	gender: Boolean,
	password: {
		password: String,
		salt: String
	},
	email: String,
	credit: Number,
	icon: String,
	order:[{
		type: Schema.Types.ObjectId,
		ref: 'order'
	}],
	comment:[{
		type: Schema.Types.ObjectId,
		ref: 'Comment'
	}]
})

mongoose.model('User', UserSchema);