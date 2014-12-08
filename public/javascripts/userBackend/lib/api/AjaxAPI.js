define(['./AjaxReq'],
    function (AjaxReq) {
    var api = function () {
        this.AjaxReq = new AjaxReq();
    };

    api.prototype.getUserInfo = function (cb) {
        var options={};
        options.verb = 'GET';
        options.path = '/getLoginInfo';
        if (!options.status_code && !options.status_codes) {
            options.status_code = 200;
        }
        this.AjaxReq.request(options, cb);
    };


    return api;
})