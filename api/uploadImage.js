// uploadImage.js
var fs = require('fs');

var uploadImage = function(req, res) {
	console.log("文件默认属性：" + req.files.uploadImg);
	var obj = req.files.uploadImg;
	var tmp_path = obj.path;
	var new_path = "../public/images/" + obj.name;
	console.log("原路径：" + tmp_path);
	fs.rename(tmp_path, new_path, function(err) {
		if (err) {
			throw err;
		}
	})
}

module.exports = uploadImage;