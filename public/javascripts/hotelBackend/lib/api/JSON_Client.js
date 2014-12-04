if (typeof window !== 'undefined') {
    define(['jquery'],
        function($){
            var JSON_client=function(){
            };
            JSON_client.prototype={
                request:function(options,cb){
                    $.ajax({
                        url:options.path,
                        accept: "json",
                        type: options.method,
                        async: true,
                        processData: true,
                        cache: false,
                        success: function (data) {
                            cb( data);
                        }
                    });
                }
            }
            return JSON_client;
        });
}
else{
    var Request = require('request');

    var JSON_client = function () {

    };
    JSON_client.prototype = {

        request: function (path, options, cb) {
            Request({
                url: path,
                method: options.verb,
                headers: options.headers,
                json: options.data ? options.data : null,
                timeout: options.timeout || 10000
            }, function (data) {
                cb( data);
            });
        }
    };
    module.exports = JSON_client;
}
