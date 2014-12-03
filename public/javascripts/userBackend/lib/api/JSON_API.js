define(['./JSON_Client'],
    function (JsonClient) {
    var api = function () {
        //console.log(JsonClient);
        this.JsonClient = new JsonClient();
    };

    api.prototype.getJSON = function (path,cb) {
        var options={};
        options.verb = 'GET';
        options.path = path;
        if (!options.status_code && !options.status_codes) {
            options.status_code = 200;
        }
        this.JsonClient.request(options, cb);
    };
    return api;

})