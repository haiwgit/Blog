require.config({
    baseUrl: '/',
    paths: {
        //引入angular
        'angular': '/lib/angular/angular',
        'angular-animate': '/lib/angular/angular-animate',
        'angular-cookies': '/lib/angular/angular-cookies',
        'angular-ui-router': '/lib/angular-ui/angular-ui-router',
        'jquery': '/lib/jquery/jquery-3.3.1.min',
        'ui-bootstrap': '/lib/angular-ui-bootstrap/ui-bootstrap',
        'ui-bootstrap-tpls': '/lib/angular-ui-bootstrap/ui-bootstrap-tpls',
        //配置文件夹
        'ctrls': '/src/modules',
        
        //公共服务
        'config':'/src/services/config-service',
        'http':'/src/common/services/httpCommonService',
        //模块文件
        'common-module': '/src/bootstraps/common-module',
        'login-module': '/src/bootstraps/login-module'

    },
    shim: {
        'angular': { exports: 'angular' },
        'angular-animate': ['angular'],
        'angular-cookies': ['angular'],
        'angular-ui-router': ['angular'],
        'ui-bootstrap': ['angular', 'angular-animate'],
        'ui-bootstrap-tpls': ['angular', 'ui-bootstrap'],
        'common-module': ['angular'],
        'login-module': ['angular', 'angular-animate', 'angular-cookies', 'angular-ui-router', 'ui-bootstrap-tpls', 'common-module'],
    },
    deps: ['src/bootstraps/loginBootstrap.js']
});