angular
  .module('app')
  .controller('footerCtrl', [
        '$timeout',
        '$scope',
        '$window',
        '$rootScope',
        '$state',
        function ($timeout,$scope, $window, $rootScope, $state) {

                //console.log("footer");
                $scope.$on('window_resize', function () {
                    if (window.innerWidth > 1024) {
                        $scope.device = 'web' ;

                    }
                    else{
                        $scope.device = 'device' ;
                    }
                    //console.log($scope.device);
                    
                });

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
           
        }
    ]);