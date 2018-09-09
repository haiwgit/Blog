define(['index-module'], function (app) {
    'use strict';
    angular.module("indexModule").controller('navController', function ($rootScope, $scope, $state, $ocLazyLoad) {
        $ocLazyLoad.load('modules/indexManager/controllers/indexController.js');
        $scope.bolgName = "个人网站";
        $scope.currentParem = null;
        $scope.navslist = [{
            title: '首页',
            parem: 'index',
            rate: '/index',
            modelcode: 1
        }, {
            title: '文章',
            parem: 'blog',
            rate: '/blog',
            modelcode: 1,
        }];
        $scope.ininMe = function () {
            $scope.currentParem = $scope.navslist[0];
            $scope.navClick($scope.currentParem);
        }
        $scope.navClick = function (parem) {
            $scope.currentParem = parem;
            $state.go($scope.currentParem.parem)
        }
    })
})