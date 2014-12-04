define([
        'jquery',
        'backbone',
        'underscore',
        'text!views/index/template/index.html'
    ], function ($, Backbone, _, index) {
        return Backbone.View.extend({
            el: $(".backboneScope"),
            template: _.template(index),
            initialize: function () {
                _.bindAll(this, "destroy", "render");
                this.render();
            },
            events: {
            },

            render: function () {
                $(this.el).html(this.template());
            },
            destroy: function () {
            }
        })
    }
)