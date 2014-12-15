//ajax.js

function getRoom(id) {
	$.ajax({
		url: "/hotel/fetchRoomInfo/" + id,
		accept: "jsonp",
		type: 'GET',
		async: true,
		processData: true,
		cache: false,
		success: function(data) {
			var temp = _.template($('.PanelTemplate').html());
			$(data).each(function(i, d) {
				$('.roomSchemaBox').append(temp({
					name: d.name,
					size: d.size,
					hasWindow: d.hasWindow,
					price: d.price
				}));
			});
		}
	});
}