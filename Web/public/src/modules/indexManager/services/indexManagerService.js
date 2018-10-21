
angular.module('indexModule').factory('indexManagerService', function (http) {
    //var app = require('http');
    var service = {
        getString: function (name, callback) {
            var url = "/Sys/Service/GetString?name=" + name;
            http.get(url, null, callback)
        },
        getUserInfoList:function (callback) {
            var url = "/Sys/Service/GetUserInfoList";
            http.get(url, null, callback)
        },
    }
    return service;
});