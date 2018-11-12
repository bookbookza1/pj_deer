angular
  .module('app')
  .controller('contactCtrl', [
        '$timeout',
        '$scope',
        '$window',
        '$rootScope',
        '$state',
        function ($timeout,$scope, $window, $rootScope, $state) {

                //console.log("Contact");
                
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
                    console.log($scope.device);
                    
                });
  
        }
    ]);