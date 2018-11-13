angular
  .module('app')
  .controller('about_usCtrl', [
        '$timeout',
        '$scope',
        '$window',
        '$rootScope',
        '$state',
        '$anchorScroll',
        function ($timeout,$scope, $window, $rootScope, $state,$anchorScroll) {
                $anchorScroll();
                //console.log("article");

                $scope.onload = function(){
                    checkWith();
                }
               var checkWith = function(){
                      if (window.innerWidth > 1024) {
                        $scope.device = 'web' ;

                      }
                      else{
                          $scope.device = 'device' ;
                      }
                }
                $scope.$on('window_resize', function () {
                    if (window.innerWidth > 1024) {
                        $scope.device = 'web' ;

                    }
                    else{
                        $scope.device = 'device' ;
                    }
                //console.log($scope.device);
                    
                });
                $scope.link = "app/views/article/article1.html" ;
                //console.log($scope.link);
                $scope.length = []
                for(var i=0;i<8;i++){
                   $scope.length[i] = i ;
                }
              
               
  
        }
    ]);