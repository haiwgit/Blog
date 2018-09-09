define(function () {
    'use strict';
    var app = angular.module("indexModule", ["ui.router", "oc.lazyLoad", 'ngCookies', 'ngAnimate', 'ui.bootstrap']);
    app.config(["$stateProvider", "$locationProvider", "$urlRouterProvider", "$ocLazyLoadProvider",
        function ($stateProvider, $locationProvider, $urlRouterProvide, $ocLazyLoadProvider) {
            $urlRouterProvide.otherwise("/");
            $urlRouterProvide.when("/", "/index");
            $locationProvider.hashPrefix("");
            $ocLazyLoadProvider.config({
                events: true
            });
            $stateProvider.state("index", {
                url: "/index",
                views: {
                    "lazyLoadView": {
                        controller: 'indexController',
                        templateUrl: 'modules/indexManager/views/index.html'
                    }
                },
                resolve: {
                    loadMyCtrl: ['$ocLazyLoad', function ($ocLazyLoad) {
                        return $ocLazyLoad.load({
                            files: ['modules/indexManager/controllers/indexController.js']//js文件地址
                        })
                    }]
                }
            }).state("blog", {
                url: "/blog",
                views: {
                    "lazyLoadView": {
                        controller: 'blogController',
                        templateUrl: 'modules/blogManager/views/blog.html'
                    }
                },
                resolve: {
                    loadMyCtrl: ['$ocLazyLoad', function ($ocLazyLoad) {
                        return $ocLazyLoad.load({
                            files: ['modules/blogManager/controllers/blogController.js']//js文件地址
                        })
                    }]
                }
            })

        }])
})