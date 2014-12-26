//signup.js
var User = require('../schemas').User;
var encrypt = require('../utils/encrypt');
var fs = require('fs');
var path = require('path');
var multiparty = require('multiparty');
var util = require('util');

module.exports = function(req, res, next) {
	User.find('req.body.username', function(result) {
		if (result !== null) {
			req.session.err = "用户名已被注册";
		} else {
			// console.log(req);
			// console.log(req.files);
			// console.log("文件默认属性：" + req.files.uploadImg);
			// var obj = req.files.uploadImg;
			// var tmp_path = obj.path;
			// var new_path = "../public/images/" + obj.name;
			// console.log("原路径：" + tmp_path);
			// fs.rename(tmp_path, new_path, function(err) {
			// 	if (err) {
			// 		throw err;
			// 	}
			// })

			var form = new multiparty.Form();
			var image;
			var userName;
			var gender;
			var password;
			var email;
			// var imageStream = fs.createWriteStream(path.join(__dirname, "../public/images/upload/a.jpg"), {
			// 	flags: 'w',
			// 	encoding: null,
			// 	mode: 0666
			// });

			form.on('error', next);
			form.on('close', function() {


				//fs.writeFileSync(path.join(__dirname, "../public/images/upload/a.jpg"), image);
			});

			form.on('field', function(name, val) {
				if (name == "username") {
					userName = val;
				} else if (name == "gender") {
					gender = val;
				} else if (name == "password") {
					password = val;
				} else if (name == "email") {
					email = val;
				} else {
					return;
				}
			});

			// listen on part event for image file
			form.on('part', function(part) {
				if (!part.filename) return;
				if (part.name !== 'image') return part.resume();
				image = {};
				image.filename = part.filename;
				image.size = 0;
				part.on('data', function(buf) {
					image.size += buf.length;
					// fs.write(imageStream, buf, image.size, buf.length, null, function(){
					// 	console.log("buf!");
					// });
				});
			});

			form.on('file', function(name, file) {
				var is = fs.createReadStream(file.path)
				var os = fs.createWriteStream(path.join(__dirname, "../public/images/upload/", file.originalFilename));
				util.pump(is, os, function() {
					fs.unlinkSync(file.path);
					uri = "./images/upload/" + file.originalFilename;

					var salt = Math.round(Math.random() * 100000);
					var psw_with_salt = encrypt(password, salt);
					var newUser = new User({
						name: userName,
						gender: gender,
						icon: uri,
						password: {
							password: psw_with_salt,
							salt: salt
						},
						email: email,
						money: 0,
						credit: 0
					});
					newUser.save();
					res.redirect('/login');
				});
			})

			// parse the form
			form.parse(req);

		}
	})
}