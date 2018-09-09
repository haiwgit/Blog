define(['index-module'], function () {
    'use strict';
    angular.module("indexModule").controller('blogController', function ($rootScope, $scope, $location, $state, $window,$ocLazyLoad) {
        $scope.x=1;
    })
})