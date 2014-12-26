//signup.js
$(function() {
	$("#submit_btn").on("click", function() {
		try {
			var name = new RegExp("^[a-zA-Z0-9]{6,30}$")
			if (name.test($("#username").val())) {

			} else {
				throw new Error("不能少于六位或超过30位");
				$(".username").addClass("has-warning");
			}

			var psw = new RegExp("^[a-zA-Z0-9]{6,30}$");
			if ($("#password").val() === $("#password_confirm").val()) {
				$("#password").val($.md5($("#password").val()))
			} else if (!psw.test($("#password").val())) {
				throw new Error("密码不符合规则");
			} else {
				throw new Error("两次输入密码不相同");
				$(".password").addClass("has-warning");
				$(".password_confirm").addClass("has-warning");
				$("#password_confirm").text();
			}

			var ph = new RegExp();//ph.test($("#telephone").val())
			if (1) {

			} else {
				throw new Error("电话错误");
				$(".phone").addClass("has-warning");
			}

			//var icon=

			var email = new RegExp("^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z]{2,4})$")
			if (email.test($("#email").val())) {
				$("#submit_btn").attr("disabled", false);
			} else {
				throw new Error("邮箱错误");
				$(".email").addClass("has-warning");
			}
			return true;
		} catch (err) {
			$("#notice").text(err.message);
			return false;
		}

	});
});