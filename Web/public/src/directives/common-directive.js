define('angular', function (angular) {
    'use strict';
    var app = angular.module('commonModule');
    app.
        directive('draggable', ['$document', function ($document) {
            return function (scope, element, attrs) {
                var startX = 0, StatrY = 0, x = 0, y = 0;
                var clientH = getViewPortHeight(), clientW = getViewPortWidth();
                element = angular.element(document.getElementsByClassName('modal-dialog'));
                element.css({
                    position: 'relative',
                    cursor: 'move'
                });
                element.on('mousedown', function (event) {
                    //event.preventDefault();
                    startX = event.pageX - x;
                    StatrY = event.pageY - y;
                    $document.on('mousemove', mousemove);
                    $document.on('mouseup', mouseup);

                });
                function mousemove(event) {

                    if (event.pageX < 40) {
                        event.pageX = 40;
                    } else if (clientW - event.pageX < 40) {
                        event.pageX = clientW - 40;
                    }
                    if (event.pageY < 40) {
                        event.pageY = 40;
                    } else if (clientH - event.pageY < 40) {
                        event.pageY = clientH - 40;
                    }
                    x = event.pageX - startX;
                    y = event.pageY - StatrY;
                    element.css({
                        top: y + 'px',
                        left: x + 'px'
                    });
                }
                function mouseup() {
                    $document.off('mousemove', mousemove);
                    $document.off('mousemup', mouseup);
                }
                function getViewPortHeight() {
                    return document.documentElement.clientHeight || document.body.clientHeight;
                }
                function getViewPortWidth() {
                    return document.documentElement.clientWidth || document.body.clientWidth;
                }
            }

        }])
        .directive('helloWord', function () {
            return {
                restrict: 'AEMC',
                template: '<div>Hi everyone!</div>',
                replace: true
            }
        })
        .directive('listScroll', function () {
            return {
                restrict: 'E',
                scope: {
                    data: '=',
                },
                template: '<div class="chooseDiv">' +
                    '<div class="swiper-container">' +
                    '<div class="swiper-slide" ng-repeat="item  in  data" repeat-finish="renderFinish()">{{item}}</div>' +
                    '</div>' +
                    '</div>' +
                    '<div class="mark_div"></div>' +
                    '</div>',
                link: function ($scope, element, attrs) {
                    $scope.renderFinish = function () {
                        $scope.swiper = new Swiper('.chooseDiv .swiper-container', {
                            directive: 'vertical',
                            slidesPerView: 5,
                            centeredSlides: true,
                            observer: true,//修改swiper自己或子元素时，自动初始化swiper  
                            observeParents: true,//修改swiper的父元素时，自动初始化swiper  
                        })
                    }
                }
            }
        })
        .directive('renderFinish', function () {
            return {
                link: function (scope, element, attrs) {
                    if (scope.$last = true) {
                        scope.$eval(attrs.renderFinish)
                    }
                }
            }
        })
        .directive('swipers', function ($timeout) {
            return {
                restrict: "EA",
                scope: {
                    data: "=",
                },
                template: '<div class="swiperDiv">' +
                    '<div class="swiper-container">' +
                    '<ul class="swiper-wrapper">' +
                    '<li class="swiper-slide" data-swiper-autoplay="2000" ng-repeat="item  in data" ng-model="ID">' +
                    '<a class="img40"><img ng-src="{{item.imgUrl}}" alt="{{item.text}}"/></a>' +
                    '</li>' +
                    '</ul>' +
                    '<div class="swiper-pagination"></div>' +
                    ' <div class="swiper-button-prev"></div>' +
                    '<div class="swiper-button-prev"></div>' +
                    '<div class="swiper-button-next"></div>' +
                    '</div>' +
                    '</div>',
                link: function (scope, element, attrs) {
                    var imgId = scope.data[0].imgId;
                    $timeout(function () {
                        scope.swiper = new Swiper('.swiperDiv .swiper-container', {//容器
                            pagination: {
                                el: '.swiper-pagination',
                                clickable: true
                            },
                            mousewheel: true,
                            paginationType: 'bullets',
                            slideToClickedSlide: true,
                            continuous: true,
                            paginationClickable: true,
                            grabCursor: true,
                            autoplay: {
                                stopOnLastSlide: true,
                            },
                            loop: true,
                            observer: true,
                            observeParents: true,
                            longSwipesRatio: 0.3,
                            touchRatio: 1,
                            slidesPerView: 1,
                            navigation: {
                                nextEl: '.swiper-button-next',
                                prevEl: '.swiper-button-prev',
                            },
                            on: {
                                click: function () {
                                    var index = this.activeIndex % scope.data.length;
                                    imgId = scope.data[index].ID
                                    scope.$parent.changeData(imgId);
                                }
                            }
                        })
                    }, 100);
                },

            }
        })
    return app;
});