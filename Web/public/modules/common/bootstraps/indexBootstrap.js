require([
    'index-module','ctrls/common/controllers/navController','modules/indexManager/controllers/indexController.js'
], function () {
    'use strict';
    angular.bootstrap(document, ['indexModule']);
})