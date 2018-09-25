define(['common-module', 'config'], function (app) {
    'use strict';

    var config = require('config');

    app.factory('loginService', function ($http) {
		var svc = {
			signin: function (account, password,callBack) {
				return $http.post(config.getAddress() + '/Sys/Auth/Login',
					{
						"account": account,
						"password": password,
						"endpoint": "client"
					});
			}
		};
		return svc;
	});
});