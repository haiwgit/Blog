require([
    'index-module','common-module','indexService','ctrls/common/routerController'
], function () {
    'use strict';
    angular.bootstrap(document, ['indexModule','commonModule','indexService']);
})