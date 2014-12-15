//reserve.js

$(function() {
	$.get('/hotel/fetchHotelInfo/' + $(".hotelID").html(), function(data) {
		$(".hotelName").append(data.name);
		$(".hotelPhone").append(data.telephone);
		$(".hotelAddr").append(data.location.address);
	});
	$.get('/hotel/fetchRoomInfo/' + $(".hotelID").html(), function(data) {
		var temp = _.template($('.PanelTemplate').html());
		$(data).each(function(i, room) {
			if (room != null) {
				$('.roomSchemas').append('<option value="' + room._id + '">' + room.name + '</option>');
				$('.roomSchemaBox').append(temp({
					name: room.name,
					size: room.size,
					hasWindow: room.hasWindow,
					price: room.price,
					_id: room._id
				}));
			}
		});
		$(".panel").on("click", function(target) {
			var current = target.currentTarget;
			$(".panel").removeClass("panel-success");
			$(current).addClass("panel-success");
			$('.roomSchemas').val($(current).children("span").html());
		});
		$(".roomSchemas").on("change", function(target) {
			var id = $(target.currentTarget).val();
			$('span.sr-only').each(function(index, sp) {
				console.log($(sp).html());
				if ($(sp).html() == id) {
					$(".panel").removeClass("panel-success");
					$(sp).parent("div.panel").addClass("panel-success")
				}
			})
		});
	});

	$('#submit_btn').on('click', function(target) {
		$.post('/reserve',{
			hotel:$(".hotelID").html(),
			room:$(".roomSchemas").val(),
			name:$(".name").val(),
			date:$(".date").val(),
			telephone:$(".telephone").val()
		},function(data){
			if(data=="success"){
				alert("success!");
			}
		})
		return false;
	});

});