define(function () {
    'use strict';
    var app = angular.module("indexModule", ["ui.router", "oc.lazyLoad", 'ngCookies', 'ngAnimate', 'ui.bootstrap', 'commonModule']);
    app.config(["$stateProvider", "$locationProvider", "$urlRouterProvider", "$ocLazyLoadProvider","$controllerProvider","$provide",
        function ($stateProvider, $locationProvider, $urlRouterProvide, $ocLazyLoadProvider,$controllerProvider,$provide) {
            app.controller=$controllerProvider.register,
            app.factory=$provide.factory,
            app.service=$provide.service,
            app.constant=$provide.constant,
            $urlRouterProvide.otherwise("/");
            $locationProvider.hashPrefix("");
            $stateProvider
                .state("/", {
                    url: "/",
                    views: {
                        'lazyLoadView': {
                            templateUrl: '/src/modules/common/views/common.html'
                        },

                    }
                }).state("index", {
                    url: "/index",
                    views: {
                        'lazyLoadView': {
                            controller: 'indexController',
                            templateUrl: '/src/modules/indexManager/views/index.html'
                        },

                    },
                    resolve: {
                        loadMyCtrl: ['$ocLazyLoad', '$injector', function ($ocLazyLoad, $injector) {
                            return $ocLazyLoad.load({
                                debug:true,
                                files: [
                                    '/src/modules/indexManager/services/indexManagerService.js',
                                    getTempPath('indexManager')
                                ]
                            })
                        }]
                    }

                }).state("blog", {
                    url: "/blog",
                    views: {
                        "lazyLoadView": {
                            controller: 'blogController',
                            templateUrl: '/src/modules/blogManager/views/blog.html'
                        }
                    },
                    resolve: {
                        loadMyCtrl: ['$ocLazyLoad', function ($ocLazyLoad) {
                            return $ocLazyLoad.load({
                                files: [getTempPath('blogManager')]//js文件地址
                            })
                        }]
                    }
                })




        }
    ]);
    function getTempPath(value) {
        return 'src/modules/' + value + '/routerController.js'
    }
    return app;
})