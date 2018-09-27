define(['common-module','config'], function (svc,config) {
    'use strict';
    svc.factory('http', function ($http, $cookies, $window) {
        var authID = newGuid();//$cookies.get('AUTH_ID');
        var hostAddress = config.getAddress();
        var hearders = {
            'Content-Type': 'application/json;charset=UTF-8',
            'AUTH_ID': authID
        }
        function onError(ex, statusCode) {
            if (statusCode == 403) {
                $cookies.remove('AUTH_ID');
                $window.location.replace('/template/timeout.html');
            } else { }
        }
        function fn(callback) {
            return typeof callback === "function" ? callback : angular.noop;
        }
        var http = {
            get: function (url, queryParams, callback) {
                $http.get(hostAddress + url, {
                    params: queryParams,
                    hearders: hearders
                }).success(fn(callback)).error(onError)
            },
            post:function(url,data,callback,queryParams){
                $http.post(hostAddress + url,data,{
                    params: typeof queryParams==="undefined"?null:queryParams,
                    hearders: hearders
                }).success(fn(callback)).error(onError)
            }
        }
        function newGuid() {
            var guid = "";
            for (var i = 1; i <= 32; i++) {
                var n = Math.floor(Math.random() * 16.0).toString(16);
                guid += n;
                if ((i == 8) || (i == 12) || (i == 16) || (i == 20))
                    guid += "-";
            }
            return guid;
        }
        return http;
    });
    return svc;
});