//order.js

define([
    'jquery',
    'backbone',
    'underscore',
    'text!views/user/comment/template/comment.html'
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
            //this.renderData();
        },
        renderData: function() {

        },
        destroy: function() {}
    })
})