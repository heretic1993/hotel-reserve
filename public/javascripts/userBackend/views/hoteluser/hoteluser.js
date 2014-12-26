define([
    'jquery',
    'backbone',
    'underscore',
    'text!views/hoteluser/template/hoteluser.html'
], function($, Backbone, _, template) {
    return Backbone.View.extend({
        el: $("div.backboneScope"),
        template: _.template(template),
        initialize: function() {
            _.bindAll(this, "destroy", "render");
            this.render();
            this.renderData();
        },
        events: {
            'click #order': 'onOrder',
            'click #rooms': 'onRoom',
            'click #comment': 'onComment',
            'click #account': 'onAccount'
        },
        onOrder: function() {
            window.hotel.router.navigate('#order', {
                trigger: true
            })
        },
        onRoom: function() {
            window.hotel.router.navigate('#rooms', {
                trigger: true
            })
        },
        onComment: function() {
            window.hotel.router.navigate('#comment', {
                trigger: true
            })
        },
        onAccount: function() {
            window.hotel.router.navigate('#account', {
                trigger: true
            })
        },
        render: function() {
            $(this.el).html(this.template());
        },
        renderData: function() {
            window.hotel.API.fetchHotelInfo(function(data) {
                $("span#username").html(data.name);
                $("span#icon").html('<img src="' + data.main_image + '"></img>');
            });
        },
        destroy: function() {}
    })
})