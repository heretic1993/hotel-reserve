/**
 * Created by Administrator on 2014/8/5.
 */

define(["backbone",
        "jquery",
        "jqueryui",
        "lib/routers/generalRouter",
        "lib/api/JSON_API"
    ],
    function(Backbone, $, yui, gR, api) {
        return {
            initialize: function() {
                window.hotel = {};
                window.hotel.user = {};
                window.hotel.routers = {
                    generalRouter: new gR(),
                };
                Backbone.history.start();
            }
        }
    })