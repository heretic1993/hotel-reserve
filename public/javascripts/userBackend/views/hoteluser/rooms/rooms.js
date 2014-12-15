define([
    'jquery',
    'backbone',
    'underscore',
    'text!views/hoteluser/rooms/template/rooms.html',
    'text!views/hoteluser/rooms/template/addroom.html',
    'text!views/hoteluser/rooms/template/roomInfo.html'
], function($, Backbone, _, template, addroom, panel) {
    return Backbone.View.extend({
        template: _.template(template),
        initialize: function() {
            this.parent = $($("#right-content")[0]);
            _.bindAll(this, "destroy", "render");
            this.render();
        },
        events: {
            'click #addRoom': 'addRoom'
        },
        render: function() {
            $(this.el).html(this.template());
            this.parent.html(this.el);
            this.delegateEvents();
            this.renderData();
            return this;
        },
        addRoom: function() {
            $(this.el).html(_.template(addroom));
        },
        renderData: function() {
            window.hotel.API.fetchRoomInfo(function(data) {
                console.log(data);
                $(data).each(function(index, content) {
                    $("#roomInfoPanel").append(_.template(panel)({
                        name: content.name,
                        size: content.size,
                        price: content.price,
                        hasWindow: content.hasWindow
                    }));
                })
            })
        },
        destroy: function() {}
    })
})