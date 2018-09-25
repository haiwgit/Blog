define([
    'login-module', 'ctrls/loginManager/services/loginService'
], function (app) {
    'use strict';
    app.controller('loginController', function ($rootScope, $scope, loginService) {
        $scope.User = {};
        $scope.login = function () {
            loginService.signin($scope.User.NAME, $scope.User.PASS, function (res) {
                var x = res;
            });
        }
    })
});