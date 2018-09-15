require([
    'login-module','common-module','src/modules/loginManager/loginController'
], function () {
    'use strict';
    angular.bootstrap(document, ['loginModule','commonModule']);
})