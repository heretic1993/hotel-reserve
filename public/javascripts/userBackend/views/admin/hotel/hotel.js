//order.js

define([
    'jquery',
    'backbone',
    'underscore',
    'text!views/admin/hotel/template/hotel.html',
    'text!views/admin/hotel/template/itemTemplate.html'
], function($, Backbone, _, template, itemTemplate) {
    return Backbone.View.extend({
        template: _.template(template),
        initialize: function() {
            this.parent = $($("#right-content")[0]);
            _.bindAll(this, "destroy", "render");
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
            $('.tbd_hotel').html("");
            window.hotel.API.fetchAllHotelsInfo(function(data) {
                $(data).each(function(index, hotel) {
                    var iteminfo = {};
                    iteminfo.hotelName = hotel.name;
                    iteminfo.telephone = hotel.telephone;
                    iteminfo.id = hotel._id;
                    iteminfo.confirm = hotel.confirm;
                    $('.tbd_hotel').append(item(iteminfo));
                })
            })
        },
        onClick: function(event) {
            var self = this;
            var order_id = $($(event.target).parent()).siblings().children().html();
            var action = $(event.target).attr('value');
            console.log(order_id);
            $.get('/hotelManipulate/' + order_id + '/' + action, function(data) {
                self.renderData();
                console.log(data);
            });
        },
        destroy: function() {}
    })
})