// admin.js

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var adminSchema = new Schema({
	name: String,
	password: {
		password: String,
		salt: String
	}
})

mongoose.model('Admin', adminSchema);