// adminRouter.js

define(['jquery',
    'backbone',
    'views/admin/admin',
    'views/admin/hotel/hotel'
], function($, Backbone, adminView, hotelView) {
    return Backbone.Router.extend({
        routes: {
            '': "hotel"
        },
        initialize: function() {
            _.bindAll(this, 'hotel');
            window.hotel.adminView = new adminView();
            Backbone.history.start();
        },
        hotel: function() {
            $("*").removeClass("active");
            $("#HotelManage").addClass("active");
            if (window.hotel.hotel !== undefined) {
                window.hotel.hotel.render();
            } else {
                window.hotel.hotel = new hotelView();
            }
        }
    })
});