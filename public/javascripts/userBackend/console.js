/**
 * Created by Administrator on 2014/8/5.
 */

define(["backbone",
        "jquery",
        "jqueryui",
        "lib/routers/userRouter",
        "lib/routers/hotelRouter",
        "lib/api/AjaxAPI",
        "moment",
        "momentLocale"
    ],
    function(Backbone, $, yui, uR, hR, api, moment, zhcn) {
        return {
            initialize: function() {
                moment.locale('zh-cn');
                console.log(moment.locale());
                window.hotel = {};
                window.hotel.API = new api();
                window.hotel.API.getUserInfo(function(data) {
                    if (data.userType == "user") {
                        window.hotel.router = new uR();
                    } else if (data.userType == "hotel") {
                        window.hotel.router = new hR();
                    } else if (data.userType == "admin") {

                    }
                });

            }
        }
    })