//order.js

define([
    'jquery',
    'backbone',
    'underscore',
    'text!views/user/property/template/property.html'
], function($, Backbone, _, template) {
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
            this.renderData();
        },
        renderData: function() {
            window.hotel.API.fetchMyInfo(function(data){
                console.log(data);
                $(".money").html(data.money);
                $(".credit").html(data.credit);
            })
        },
        destroy: function() {}
    })
})