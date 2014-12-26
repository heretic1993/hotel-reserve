define([
    'jquery',
    'backbone',
    'underscore',
    'text!views/admin/template/admin.html'
], function($, Backbone, _, template) {
    return Backbone.View.extend({
        el: $("div.backboneScope"),
        template: _.template(template),
        initialize: function() {
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
        destroy: function() {
            
        }
    })
})