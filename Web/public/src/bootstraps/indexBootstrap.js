require([
    'index-module','ctrls/modules/common/controllers/navController','src/modules/indexManager/controllers/indexController.js'
], function () {
    'use strict';
    angular.bootstrap(document, ['indexModule']);
})