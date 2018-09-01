angular
  .module('app')
  .controller('covertDataURLCtrl', [
        '$timeout',
        '$scope',
        '$window',
        '$rootScope',
        '$state',
        '$anchorScroll',
        '$http',
        '$location',
        function ($timeout,$scope, $window, $rootScope, $state,$anchorScroll,$http,$location) {
                $anchorScroll();
                console.log("addProduct");
                $scope.titlePage = "add product" ;
                $scope.file = [] ;
                
                console.log($location.path());
                $scope.product = {
                    id_type : null,
                    id_sub_type : null
                }
                $scope.typeProduct = [] ;
                $scope.subType = [] ;
                //var fileURL = URL.createObjectURL()

                // $scope.uploadFile = function(files){

                //     //console.log(file);
                //     var fd = new FormData();

                //     fd.append("file",files[0]);
                //     //console.log(files);
                //     $http.post('app/img/product' ,fd,{
                //         //withCredentials : true ,
                //         header : {'Content-Type' : undefined},
                //         transformRequest : angular.identity
                //     }).success(function(response){
                //         console.log(response.data);
                //     }).error(function(error){
                //         console.log(error);

                //     })    
                // }

                $scope.dataURL;
                $scope.imgBlobURL;
                $scope.onload = function(){
                    getTypeProduct();
                }
                var getTypeProduct = function(){
                     $http.get('app/data/menu_product.json')
                      .then(function(response) {
                          console.log(response.data);
                          //$scope.imgPort = response.data ;
                          $scope.typeProduct = response.data ;

                           

                      },
                         function(error,status) {
                            // $scope.data.error = { message: error, status: status};
                             console.log(error); 
                         }
                      ); 
                }
                // $scope.uploadImage = function() {
                //       var fd = new FormData();
                //       var imgBlob = dataURItoBlob($scope.uploadme);
                //       fd.append('file', imgBlob);
                //       $http.post('app/img/product',fd, {
                //             transformRequest: angular.identity,
                //             headers: {
                //               'Content-Type': undefined
                //             }
                //           }
                //         )
                //         .success(function(response) {
                //           console.log('success', response);
                //         })
                //         .error(function(response) {
                //           console.log('error', response);
                //         });
                // }


                //you need this function to convert the dataURI
                function dataURItoBlob(dataURI) {
                      console.log(dataURI);

                      
                      var binary = atob(dataURI.split(',')[1]);
                      var mimeString = dataURI.split(',')[0].split(':')[1].split(';')[0];
                      var array = [];
                      for (var i = 0; i < binary.length; i++) {
                        array.push(binary.charCodeAt(i));
                      }
                      return new Blob([new Uint8Array(array)], {
                        type: mimeString
                      });
                }

                $scope.selectType = function(id_type){
                      console.log(id_type);

                       var data = angular.copy($scope.typeProduct);
                        for(var i=0;i<data.length;i++){
                            if(data[i].id == id_type){
                                $scope.subType =  data[i].sub ;
                                break;
                            }
                        }
                        console.log($scope.subType);
                             
                }

                $scope.setBlobURL = function(dataURL){
                  //console.log(dataURL);
                  var dataBlob = dataURItoBlob(dataURL);
                  console.log(dataBlob);
                  $scope.imgBlobURL = URL.createObjectURL(dataBlob);

                }
                
              
               
  
        }
    ]);