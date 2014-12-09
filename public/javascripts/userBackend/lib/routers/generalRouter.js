define(['jquery',
    'backbone',
    'views/index/index',
    'views/order/order',
    'views/account/account'
], function($, Backbone, index, orderView,accountView) {
    return Backbone.Router.extend({
        routes: {
            '': 'welcome',
            'MyOrder': "order",
            'MyAccount':'account'
        },
        initialize: function() {
            _.bindAll(this, 'welcome');
        },
        welcome: function() {
            if (window.hotel.index) {
                window.hotel.index.render();
            }
            window.hotel.index = new index();
        },
        order: function() {
            this.welcome();
            if(window.hotel.order){
                window.hotel.order.render();
            }
            $("#order").addClass("active");
            window.hotel.order = new orderView();
        },
        account:function(){
            this.welcome();
            if(window.hotel.account){
                window.hotel.account.render();
            }
            $("#account").addClass("active");
            window.hotel.account = new accountView();
        }

    })
});