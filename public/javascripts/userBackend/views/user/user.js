define([
    'jquery',
    'backbone',
    'underscore',
    'text!views/user/template/user.html'
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
            'click .order_btn': 'onOrder',
            'click .account_btn': 'onAccount'
        },
        onOrder: function() {
            window.hotel.router.navigate('#MyOrder', {
                trigger: true
            })
        },
        onAccount: function() {
            window.hotel.router.navigate('#MyAccount', {
                trigger: true
            })
        },
        render: function() {
            $(this.el).html(this.template());
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