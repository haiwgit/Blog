require.config({
    baseUrl: '/',
    paths: {
        //引入angular
        'angular': '/lib/angular/angular',
        'angular-animate': '/lib/angular/angular-animate',
        'angular-cookies': '/lib/angular/angular-cookies',
        'angular-ui-router': '/lib/angular-ui/angular-ui-router',
        'ui-bootstrap': '/lib/angular-ui-bootstrap/ui-bootstrap',
        'ui-bootstrap-tpls': '/lib/angular-ui-bootstrap/ui-bootstrap-tpls',
        'jquery': '/lib/jquery/jquery-3.3.1.min',
        'echarts': '/lib/Echarts/echarts.min',
        'oclazyload': '/lib/oclazyload/ocLazyLoad.min',
        //配置文件夹
        'ctrls':'/src/modules',
        //路由文件
        'index-module': '/src/bootstraps/index-module',
    },
    shim: {
        'angular': { exports: 'angular' },
        'angular-animate': ['angular'],
        'angular-cookies': ['angular'],
        'angular-ui-router': ['angular'],
        'oclazyload': ['angular'],
        'ui-bootstrap': ['angular', 'angular-animate'],
        'ui-bootstrap-tpls': ['angular', 'ui-bootstrap'],
        'index-module': ['angular', 'oclazyload', 'angular-animate', 'angular-cookies', 'angular-ui-router', 'ui-bootstrap-tpls'],
    },
    deps: ['src/bootstraps/indexBootstrap.js']
});