define([
    'jquery',
    'backbone',
    'underscore',
    'views/user/user',
    'views/hoteluser/hoteluser',
    'views/admin/admin'
], function($, Backbone, _, user, hoteluser, admin) {
    return Backbone.View.extend({

        initialize: function() {
            var self = this;
            window.hotel.API.getUserInfo(function(data) {
                if (data.userType == "user") {
                    if (window.hotel.user) {
                        window.hotel.user.render();
                    } else {
                        window.hotel.user = new user();
                    }
                } else if (data.userType == "hotel") {
                    if (window.hotel.hotel) {
                        window.hotel.hotel.render();
                    } else {
                        window.hotel.hotel = new hoteluser();
                    }
                } else if (data.userType == "admin") {
                    if (window.hotel.admin) {
                        window.hotel.admin.render();
                    } else {
                        window.hotel.admin = new admin();
                    }
                }
                self.renderData();
            });
            _.bindAll(this, "destroy", "render");
            this.render();
        },
        events: {
      //      'click .order_btn': 'onOrder'
        },
        onOrder: function() {
            window.hotel.router.navigate('#MyOrder', {
                trigger: true
            })
        },

        render: function() {},
        renderData: function() {
            window.hotel.API.getUserInfo(function(data) {
                $("span#username").html(data.name);
                $("span#icon").html('<img src="' + data.icon + '"></img>');
            });
        },
        destroy: function() {}
    })
})