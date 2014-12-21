//order.js

define([
    'jquery',
    'backbone',
    'underscore',
    'text!views/hoteluser/order/template/order.html',
    'text!views/hoteluser/order/template/item.html'
], function($, Backbone, _, template, itemTemplate) {
    return Backbone.View.extend({
        template: _.template(template),
        initialize: function() {
            this.parent = $($("#right-content")[0]);
            _.bindAll(this, "destroy", "render");
            this.render();
        },
        events: {},
        render: function() {
            $(this.el).html(this.template());
            this.parent.html(this.el);
            this.delegateEvents();
            this.renderData();
        },
        renderData: function() {
            var item = _.template(itemTemplate);
            $.get('/getOrder', function(data) {
                $('.tbd_order').empty();
                $(data).each(function(index, order) {
                    var info = {
                        orderNumber: order._id,
                        orderTime: moment(order.time).format('ll'),
                        personName: order.customer.name,
                        telephone: order.customer.telephone,
                        arriveTime: moment(order.arriveTime).format('ll'),
                        status: order.status
                    };
                    $.get('/hotel/fetchHotelInfo/' + order.hotel, function(hotel) {
                        info.hotelName = hotel.name;
                        $.get('/hotel/fetchRoomById/' + order.room, function(room) {
                            info.roomSchema = room.name;
                            $.get('/fetchUserInfo/' + order.user, function(user) {
                                info.userName = user.name;
                                $('.tbd_order').append(item(info));
                            })
                        })
                    })
                });
            });
        },
        destroy: function() {}
    })
})