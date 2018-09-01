angular
  .module('app')
  .controller('adminCtrl', [
        '$timeout',
        '$scope',
        '$window',
        '$rootScope',
        '$state',
        '$http',
        function ($timeout,$scope, $window, $rootScope, $state,$http) {

                console.log("admin");
                $scope.device;
                $scope.seleteMenu = null ;
                $scope.files = [];
                $scope.pageMenu = {
                    link : null
                }
                $scope.$on('window_resize', function () {
                      if (window.innerWidth >= 768) {
                          $scope.device = 'web' ;

                      }
                      else{
                          $scope.device = 'mobile' ;
                      }
                      console.log($scope.device);
                      
                  });

                 // $scope.onChange = function (e, fileList) {
                 //    alert('this is on-change handler!');
                 //  };
                  
                 //  $scope.onLoad = function (e, reader, file, fileList, fileOjects, fileObj) {
                 //    alert('this is handler for file reader onload event!');
                 //  };

                $scope.menuAdmin = [
                    {
                      title : 'Add product',
                      link : 'app/views/admin/addProduct.html',
                    },
                    {
                      title : 'Product list',
                      link : 'app/views/admin/productList.html',
                    } , 
                    {
                      title : 'Convert DataURL',
                      link : 'app/views/admin/convertDataUrl.html',
                      
                    }  
                ];

                //$scope.pageMenu = $scope.menuAdmin[0] ;
                //$scope.page_ctrl =  $scope.menuAdmin[0].ctrl ;
                //w$scope.page_link =  $scope.menuAdmin[0].link ;
                // console.log($scope.pageMenu.link);
                // console.log($scope.pageMenu.ctrl );

                $scope.setpage  = function(state,ctrl){
                  console.log(state);
                  $scope.pageMenu.link = state ;
                   // $scope.page_ctrl = ctrl ;
                   // $scope.page_link = state ;
                   //$state.go(state)

                }

                $scope.portfolio_upload = function(){
                      console.log($scope.files);

                      var item = angular.copy($scope.files);
                      if(item.length == 0 ) return ;
                      for(var i=0;i<item.length;i++){
                           $http.post('http://demo1.funsoffice.com/demo1_api/portfolio',item[i].base64)
                            .then(function(response) {
                               console.log(response.data);
                               

                            },
                               function(error,status) {
                                  // $scope.data.error = { message: error, status: status};
                                   console.log(error); 
                               }
                            ); 
                      }

                }
               
              
               
  
        }
    ]);