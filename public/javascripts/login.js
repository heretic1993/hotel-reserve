$(function() {
	$("#submit_btn").on("click", function() {
		$("#password").val($.md5($("#password").val()))
	})
});