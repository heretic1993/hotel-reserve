define(['jquery',
    'backbone',
    'views/hoteluser/hoteluser',
    'views/hoteluser/order/order',
    'views/hoteluser/account/account',
    'views/hoteluser/rooms/rooms',
    'views/hoteluser/comment/comment'
], function($, Backbone, userView, orderView, accountView,roomView,commentView) {
    return Backbone.Router.extend({
        routes: {
            '': "welcome",
            'order': "order",
            'rooms': 'rooms',
            'comment': 'comment',
            'account': 'account',
            'addroom': 'addroom'
        },
        initialize: function() {
            console.log("init");
            _.bindAll(this, 'order','addroom');
            window.hotel.userView = new userView();
            this.order();
            Backbone.history.start();
        },
        welcome: function() {},
        order: function() {
            $("*").removeClass("active");
            $("#order").addClass("active");
            if (window.hotel.order) {
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
        rooms: function(){
            $("*").removeClass("active");
            $("#rooms").addClass("active");

            if (window.hotel.roomView) {
                window.hotel.roomView.render();
            } else {
                window.hotel.roomView = new roomView();
            }
        },
        addroom: function(){
            this.rooms();
            
        },
        comment: function(){
            $("*").removeClass("active");
            $("#comment").addClass("active");

            if (window.hotel.commentView) {
                window.hotel.commentView.render();
            } else {
                window.hotel.commentView = new commentView();
            }
        }
    })
});