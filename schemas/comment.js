var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var CommentSchema = new Schema({
		username: String,
		hotel: String,
		date: {
			type: Date,
			default: Date.now
		},
		content: String
	})

mongoose.model('Comment', CommentSchema);