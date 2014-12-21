define(['jquery',
    'backbone',
    'views/user/user',
    'views/user/order/order',
    'views/user/account/account',
    'views/user/property/property',
    'views/user/comment/comment'
], function($, Backbone, userView, orderView, accountView,propView,commentView) {
    return Backbone.Router.extend({
        routes: {
            '': "order",
            'MyOrder': "order",
            'MyAccount': 'account',
            'MyProperty': 'property',
            'MyComment': 'comment'
        },
        initialize: function() {
            _.bindAll(this, 'order');
            window.hotel.userView = new userView();
            Backbone.history.start();
        },
        order: function() {
            $("*").removeClass("active");
            $("#order").addClass("active");
            if (window.hotel.order!==undefined) {
                window.hotel.order.render();
            } else {
                window.hotel.order = new orderView();
            }

        },
        account: function() {
            $("*").removeClass("active");
            $("#account").addClass("active");

            if (window.hotel.account) {
                window.hotel.account.render();
            } else {
                window.hotel.account = new accountView();
            }
        },
        property: function(){
            $("*").removeClass("active");
            $("#prop").addClass("active");

            if (window.hotel.propView) {
                window.hotel.propView.render();
            } else {
                window.hotel.property = new propView();
            }
        },
        comment: function(){
            $("*").removeClass("active");
            $("#comment").addClass("active");

            if (window.hotel.commentView) {
                window.hotel.commentView.render();
            } else {
                window.hotel.comment = new commentView();
            }
        }
    })
});