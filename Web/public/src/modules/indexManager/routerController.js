
angular.module('indexModule', ['commonModule','indexService'])
    .controller('indexController', ['$rootScope', '$scope', '$location', '$window', '$ocLazyLoad','indexManagerService',function ($rootScope, $scope, $location, $window, $ocLazyLoad,indexManagerService) {
        $scope.x = 0;
        $scope.z = 'egafgnadslgasgfm';
    }])