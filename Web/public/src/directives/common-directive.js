define('angular',function (angular) {
    'use strict';
    var app = angular.module('commonModule');
    app.directive('draggable', ['$document', function ($document) {
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
    return app;
});