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
        //模块文件
        'common-module': '/src/bootstraps/common-module',
        'index-module': '/src/bootstraps/index-module',
        'indexService':'/src/modules/indexManager/services/indexManagerService',
        'common-filter':'/src/filters/common-filter',
        'common-directive':'/src/directives/common-directive',

        //公共服务
        'config':'/src/services/config-service',
        'http':'/src/modules/common/services/httpCommonService'
    },
    shim: {
        'angular': { exports: 'angular' },
        'angular-animate': ['angular'],
        'angular-cookies': ['angular'],
        'angular-ui-router': ['angular'],
        'oclazyload': ['angular'],
        'ui-bootstrap': ['angular', 'angular-animate'],
        'ui-bootstrap-tpls': ['angular', 'ui-bootstrap'],
        'common-module': ['angular'],
        'index-module': ['angular', 'oclazyload', 'angular-animate', 'angular-cookies', 'angular-ui-router', 'ui-bootstrap-tpls','common-module'],
    },
    deps: ['src/bootstraps/indexBootstrap.js']
});