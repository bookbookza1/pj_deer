angular
  .module('app')
  .controller('portfolioCtrl', [
        '$timeout',
        '$scope',
        '$window',
        '$rootScope',
        '$state',
        '$serve',
        '$http',
        function ($timeout,$scope, $window, $rootScope, $state,$serve,$http) {

               

                // $scope.partitionList;
                // $scope.curtainList;
                // $scope.tileList ;
                // $scope.wallList ;
                $scope.port;
                // $scope.loading = {
                //   partition : false ,
                //   curtain : false ,
                //   tile : false ,
                //   wall : false 
                // }
                $scope.onload = function(){
                    getData()
                    checkWith();
                }


                var getData = function(){
                     $serve.get('api/portfolio')
                        .then(function(response) {
                           //console.log(response.data);
                            //$scope.imgPort = response.data ;
                            $scope.port = response.data ;
                            
                        },
                           function(error,status) {
                              // $scope.data.error = { message: error, status: status};
                               console.log(error); 
                           }
                        ); 
                    // getPartition();
                    // getCurtain();
                    // getTile();
                    // getWall();
                }
                // var getPartition = function(){
                //     $scope.loading.partition = true;
                //     $serve.get('api/portfolio/partition')
                //       .then(function(response) {
                //          //console.log(response.data);
                //           //$scope.imgPort = response.data ;
                //           $scope.partitionList = response.data ;
                //           $scope.loading.partition = false;
                //       },
                //          function(error,status) {
                //             // $scope.data.error = { message: error, status: status};
                //              console.log(error); 
                //          }
                //       ); 

                // }
                // var getWall = function(){
                //    $scope.loading.wall = true;
                //     $serve.get('api/portfolio/wallpaper')
                //       .then(function(response) {
                //          //console.log(response.data);
                //           //$scope.imgPort = response.data ;
                //           $scope.wallList = response.data ;
                //            $scope.loading.wall = false;
                //       },
                //          function(error,status) {
                //             // $scope.data.error = { message: error, status: status};
                //              console.log(error); 
                //          }
                //       ); 

                // }
                //  var getTile = function(){
                //     $scope.loading.tile = true;
                //     $serve.get('api/portfolio/tile')
                //       .then(function(response) {
                //          //console.log(response.data);
                //           //$scope.imgPort = response.data ;
                //           $scope.tileList = response.data ;
                //             $scope.loading.tile = false;
                //       },
                //          function(error,status) {
                //             // $scope.data.error = { message: error, status: status};
                //              console.log(error); 
                //          }
                //       ); 

                // }
                $scope.$on('onLastRepeat', function (scope, element, attrs) {
                    $(window).trigger("resize"); 
                });
                //  var getCurtain = function(){
                //     $scope.loading.curtain = true;
                //     $serve.get('api/portfolio/curtain')
                //       .then(function(response) {
                //          //console.log(response.data);
                //           //$scope.imgPort = response.data ;
                //           $scope.curtainList = response.data ;
                //           $scope.loading.curtain = false;
                //       },
                //          function(error,status) {
                //             // $scope.data.error = { message: error, status: status};
                //              console.log(error); 
                //          }
                //       ); 

                // }
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

                $scope.resize = function(){
                 
                   $(window).trigger("resize"); 
                }
                

  
               
  
        }
    ]);