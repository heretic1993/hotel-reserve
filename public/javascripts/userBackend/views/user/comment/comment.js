//order.js

define([
    'jquery',
    'backbone',
    'underscore',
    'text!views/user/comment/template/comment.html',
    'text!views/user/comment/template/item.html'
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
            this.renderData();
        },
        renderData: function() {
            var commentTemplate = _.template(itemTemplate);
            window.hotel.API.getUserComment(function(data) {
                $(data).each(function(index, info) {
                    $("#comment_area").append(commentTemplate(info));
                })
            })

        },
        destroy: function() {}
    })
})