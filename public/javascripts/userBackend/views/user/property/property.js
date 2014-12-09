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
            this.el = $("div#right-content");
            _.bindAll(this, "destroy", "render");
            this.render();
        },
        events: {},
        render: function() {
            $(this.el).html(this.template());
            //this.renderData();
        },
        renderData: function() {
           
        },
        destroy: function() {}
    })
})