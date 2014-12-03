define(['jquery',
    'backbone',
    'views/index/index'
], function ($, Backbone, index) {
    return Backbone.Router.extend({
        routes: {
            '': 'welcome'
        },
        initialize: function () {
            _.bindAll(this, 'welcome');
        },
        welcome: function () {
            window.hotel.index = {
                indexView: new index()
            };
        }
    })
});



