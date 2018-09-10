define(['index-module'], function () {
    'use strict';
    angular.module("indexModule").controller('indexController', function ($rootScope, $scope, $location, $state, $window,$ocLazyLoad) {
        $scope.x=0;
    })
})