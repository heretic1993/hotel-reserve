//order.js

define([
    'jquery',
    'backbone',
    'underscore',
    'text!views/hoteluser/comment/template/comment.html'
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
            this.delegateEvents();
            this.renderData();
        },
        renderData: function() {
            var commentTemplate=_.template($('#commentTemplate').html());
            window.hotel.API.getHotelComment(function(data){
                console.log(data);
                $(data).each(function(index,info){
                    $("#comment").append(commentTemplate(info));
                })
            })
        },
        destroy: function() {}
    })
})