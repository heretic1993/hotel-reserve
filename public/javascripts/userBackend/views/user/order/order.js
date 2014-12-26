//order.js

define([
    'jquery',
    'backbone',
    'underscore',
    'moment',
    'text!views/user/order/template/order.html',
    'text!views/user/order/template/item.html'
], function($, Backbone, _, moment, template, itemTemplate) {
    return Backbone.View.extend({
        template: _.template(template),
        initialize: function() {
            this.parent = $($("#right-content")[0]);
            _.bindAll(this, "destroy", "render","onClick");
            this.render();
        },
        events: {
            'click button': 'onClick'
        },
        render: function() {
            $(this.el).html(this.template());
            this.parent.html(this.el);
            this.renderData();
        },
        renderData: function() {
            var item = _.template(itemTemplate);
            $.get('/getOrder', function(data) {
                $('.tbd_order').empty();
                console.log(data);
                $(data).each(function(index, order) {
                    var info = {
                        id: order._id,
                        orderTime: moment(order.time).format('ll'),
                        personName: order.customer.name,
                        arriveTime: moment(order.arriveTime).format('ll'),
                        status: order.status
                    };
                    $.get('hotel/fetchHotelInfo/' + order.hotel, function(hotel) {
                        info.hotelName = hotel.name;
                        $.get('/hotel/fetchRoomById/' + order.room, function(room) {
                            info.roomSchema = room.name;
                            $('.tbd_order').append(item(info));
                        })
                    })
                });
            });
        },
        onClick: function(event) {
            var self=this;
            var order_id = $($(event.target).parent()).siblings().children().html();
            var action = $(event.target).attr('value');
            $.get('/orderManipulate/' + order_id + '/' + action, function(data) {
                self.renderData();
                console.log(data);
            });
        },
        destroy: function() {}
    })
})