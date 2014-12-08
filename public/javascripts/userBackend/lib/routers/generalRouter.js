define(['jquery',
    'backbone',
    'views/index/index',
    'views/order/order'
], function($, Backbone, index, orderView) {
    return Backbone.Router.extend({
        routes: {
            '': 'welcome',
            'MyOrder': "order",
        },
        initialize: function() {
            _.bindAll(this, 'welcome');
        },
        welcome: function() {
            if (window.hotel.index) {
                window.hotel.index.destroy();
            }
            window.hotel.index = new index();
        },
        order: function() {
            this.welcome();
            if(window.hotel.order){
                window.hotel.order.destroy();
            }
            $("#order").addClass("active");
            window.hotel.order = new orderView();
        }
    })
});