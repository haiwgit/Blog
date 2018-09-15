define(['index-module'], function (app) {
    'use strict';
    app.controller('navController', function ($rootScope, $scope, $state, $ocLazyLoad, $http) {
        $scope.bolgName = "个人网站";
        $scope.currentParem = null;
        $scope.navslist = [];
        $http.get('src/modules/moduleConfig.json').then(function (res) {
            $scope.navslist = res.data;
        })
        $scope.ininMe = function () {
            if ($scope.navslist && $scope.navslist.length > 0) {
                $scope.currentParem = $scope.navslist[0];
                $scope.navClick($scope.currentParem);
            }
        }
        $scope.navClick = function (parem) {
            if (fileExists(parem.temppath)) {
                $scope.currentParem = parem;
                $state.go($scope.currentParem.parem)
            } else {
                return;
            }
        }
        function getTempPath(value) {
            return 'src/modules/' + value + '/routerController.js'
        }
        function fileExists(url) {
            var isExists;
            $.ajax({
                url: url,
                async: false,
                type: 'HEAD',
                error: function () {
                    isExists = 0;
                },
                success: function () {
                    isExists = 1;
                }
            });
            if (isExists == 1) {
                return true;
            } else {
                return false;
            }
        }
    })
})