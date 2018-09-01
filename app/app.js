"use strict";

var app = angular.module('app', [
    'ui.router',
    'oc.lazyLoad',
    'naif.base64',
    'ngAnimate',
    'pascalprecht.translate',
    'angularUtils.directives.dirPagination',
    // 'ngSanitize',
    // 'ngRetina',
    // 'ngMessages',
    'angular.filter',
    'selectize'
    // 'angularCSS',
]);

app
    .run([
        '$rootScope',
        '$state',
        '$stateParams',
        '$templateCache',
        '$window',
        '$translate',
        '$anchorScroll',
        '$timeout',
            function ($rootScope, $state, $stateParams,$templateCache,$window,$translate,$anchorScroll,$timeout) {
             //$templateCache.removeAll();
            //console.log("test");
             $rootScope.language = 'th' ;
             $rootScope.showFooter = true;
             //$state.reload();
             $rootScope.loadingPage = false ;
             $rootScope.checkOpen = null ;
             $rootScope.$on('$stateChangeStart', function (event, toState, toParams, fromState, fromParams) {              
                //$rest.api.cancelRequest();
                $templateCache.removeAll();
                console.log("in");
                //$rootScope.loadingPage = false ;
                document.body.scrollTop = document.documentElement.scrollTop = 0;

                  // get window width
                  

                  $rootScope.loadingPage = true ;
                  // $timeout(function(){
                  //      $rootScope.loadingPage = false ;
                  //      $(window).trigger("resize");  
                  // },1300)

                
              
                 //$state.go('layout.home')
                
            });

             $rootScope.$on("$stateChangeSuccess", function(event, toState, toParams, fromState, fromParams) {
                       
                       $timeout(function(){
                           $rootScope.loadingPage = false ;
                           $(window).trigger("resize"); 
                      },1000)
              });

           
             // get window width
            var w = angular.element($window);
            $rootScope.largeScreen = w.width() >= 1220;

            w.on('resize', function () {
                $rootScope.$broadcast('window_resize');
                return $rootScope.largeScreen = w.width() >= 1220;
            });



              //Set Language
            $rootScope.$watch("language", function (newVal, oldVal) {
                var language = newVal;
                
                // if (newVal == 'en'){
                //     moment.locale('en');
                // }
                // else{
                //     moment.locale('th');
                // }
                console.log(language);
                $translate.use(language).then(function () {
                    $rootScope.$broadcast('translateRefresh');
                });
            });


            //  $rootScope.$on("$locationChangeSuccess", function(){
            //       $timeout(function() {
            //               //$rootScope.pageLoading = false;
            //               $($window).resize();
            //           },300);
            // });

     




        }
    
]);

app.config(['$compileProvider',
  function ($compileProvider) {
      $compileProvider.debugInfoEnabled(true);
      $compileProvider.aHrefSanitizationWhitelist(/^\s*(https?|local|data):/);
      
  }
]);


app.config([
  '$translateProvider',
  function($translateProvider) {
    $translateProvider
      .useStaticFilesLoader({
        prefix: 'app/translations/',
        suffix: '.json'
      })
      .preferredLanguage('th');
  }
]);

app.config(function($logProvider){
  $logProvider.debugEnabled(false);
});


app.config(['$httpProvider', function ($httpProvider) {

    //$httpProvider.defaults.withCredentials = true;
    //initialize get if not there
    if (!$httpProvider.defaults.headers.get) {
        $httpProvider.defaults.headers.get = {};
        
    }
    // $httpProvider.defaults.headers.common = {};
    // $httpProvider.defaults.headers.post = {};
    // $httpProvider.defaults.headers.put = {};
    // $httpProvider.defaults.headers.patch = {};

    // $httpProvider.interceptors.push('redirectInterceptor');
    //$httpProvider.defaults.headers.post['If-Modified-Since'] = '0';
    // $httpProvider.defaults.headers.get['If-Modified-Since'] = '0';

}]);