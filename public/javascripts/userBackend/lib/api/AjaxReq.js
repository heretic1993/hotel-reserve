if (typeof window !== 'undefined') {
    define(['jquery'],
        function($){
            var AjaxReq=function(){
            };
            AjaxReq.prototype={
                request:function(options,cb){
                    $.ajax({
                        url:options.path,
                        accept: "jsonp",
                        type: options.method,
                        async: true,
                        processData: true,
                        cache: false,
                        success: function (data) {
                            cb(data);
                        }
                    });
                }
            }
            return AjaxReq;
        });
}
else{
    var Request = require('request');

    var AjaxReq = function () {

    };
    AjaxReq.prototype = {

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
    module.exports = AjaxReq;
}
