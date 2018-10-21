angular.module('indexModule').controller('indexController', ['$rootScope', '$scope', '$location', '$window', '$ocLazyLoad', 'indexManagerService', function ($rootScope, $scope, $location, $window, $ocLazyLoad, indexManagerService) {
    $scope.x = 0;
    $scope.z = 'egafgnadslgasgfm';
    $scope.slides = [];
    $scope.slides.push({ imgUrl: '/images/index/carousel/1.jpg', ContenURL: "", ID: 13, text: '亲爱的你，情人节快乐' });
    $scope.slides.push({ imgUrl: '/images/index/carousel/2.jpg', ContenURL: "", ID: 131, text: '亲爱的你，情人节快乐' });
    $scope.slides.push({ imgUrl: '/images/index/carousel/3.jpg', ContenURL: "", ID: 1314, text: '亲爱的你，情人节快乐' });
    $scope.initMe=function(){
        // indexManagerService.getUserInfoList(function(res){
        //     $scope.z=res;
        // });
    }
    $scope.initMe();
}]);