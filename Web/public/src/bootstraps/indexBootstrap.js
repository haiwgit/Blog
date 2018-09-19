require([
    'index-module','common-module','ctrls/common/routerController'
], function () {
    'use strict';
    angular.bootstrap(document, ['indexModule','commonModule']);
})