/**
 * Created by Administrator on 2014/8/5.
 */
require.config({
    baseUrl: "../javascripts/userBackend",
    shim: {
        backbone: {
            deps: ["underscore", "jquery"],
            exports: "backbone"
        }
    },
    paths: {
        domready: "lib/requirejs/domready",
        text: "lib/requirejs/text",
        underscore: "lib/underscore/underscore-min",
        jquery: "lib/jquery/jquery-1.11.1.min",
        jqueryui:"lib/jqueryui/jquery-ui.min",
        backbone: "lib/backbone/backbone-min"
    }
}),
    require(["domready", "console"],
        function (dom,con) {
            dom(function(){
                con.initialize();
            });
        }
    )