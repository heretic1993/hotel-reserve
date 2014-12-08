/**
 * Created by Administrator on 2014/8/5.
 */

define(["backbone",
        "jquery",
        "jqueryui",
        "lib/routers/generalRouter",
        "lib/api/AjaxAPI"
    ],
    function(Backbone, $, yui, gR, api) {
        return {
            initialize: function() {
                window.hotel = {};
                window.hotel.user = {};
                window.hotel.API = new api();
                window.hotel.router = new gR();
                Backbone.history.start();
            }
        }
    })