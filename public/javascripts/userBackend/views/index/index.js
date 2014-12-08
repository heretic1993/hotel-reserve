define([
    'jquery',
    'backbone',
    'underscore',
    'text!views/index/template/index.html'
], function($, Backbone, _, index) {
    return Backbone.View.extend({
        el : $("div.backboneScope"),
        template: _.template(index),
        initialize: function() {
            
            _.bindAll(this, "destroy", "render");
            this.render();
        },
        events: {
            'click .order_btn': 'onOrder'
        },
        onOrder: function() {
            window.hotel.router.navigate('#MyOrder', {
                trigger: true
            })
        },

        render: function() {
            $(this.el).html(this.template());
            this.renderData();
        },
        renderData: function() {
            window.hotel.API.getUserInfo(function(data) {
                $("span#username").html(data.name);
                $("span#icon").html('<img src="' + data.icon + '"></img>');
            });
        },
        destroy: function() {}
    })
})