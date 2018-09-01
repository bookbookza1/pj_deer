angular
  .module('app')
  .controller('addProductCtrl', [
        '$timeout',
        '$scope',
        '$window',
        '$rootScope',
        '$state',
        '$anchorScroll',
        '$http',
        '$location',
        '$serve',
        function ($timeout,$scope, $window, $rootScope, $state,$anchorScroll,$http,$location,$serve) {
                $anchorScroll();
                console.log("addProduct");
                $scope.titlePage = "add product" ;
                $scope.file = [] ;
                
                console.log($location.path());
                $scope.product = {
                    id_type : null,
                    id_sub_type : null,
                    img1:null,
                    img2:null,
                    img3:null,
                    img4:null,
                    product_name : null,
                    product_key:null ,
                    product_detail : null ,
                    price : 0 ,
                    price_sale : 0
                }
                $scope.img1 = null ;
                $scope.img2 = null;
                $scope.img3  = null ;
                $scope.img4  = null;
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

                $scope.uploadme;
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
                $scope.uploadImage = function() {
                      var fd = new FormData();
                      var imgBlob = dataURItoBlob($scope.uploadme);
                      fd.append('file', imgBlob);
                      $http.post('app/img/product',fd, {
                            transformRequest: angular.identity,
                            headers: {
                              'Content-Type': undefined
                            }
                          }
                        )
                        .success(function(response) {
                          console.log('success', response);
                        })
                        .error(function(response) {
                          console.log('error', response);
                        });
                }


                //you need this function to convert the dataURI
                function dataURItoBlob(dataURI) {
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

                $scope.add = function(){
                  var obj = angular.copy($scope.product);
                  obj = setObj(obj)
                  console.log(obj);
                   $serve.post('api/product',obj)
                         .then(function(response){
                              console.log(response.data)
                              if(response.data == "true"){
                                
                                alert("add success");
                                clearScope();
                              }
                              else{
                                alert("dupicate img name"+response.data);
                              }
                               
                            
                         },function(error) {
                              console.log(error);
                              alert("Fail..");
                          }
                  );  
                    
                }

                var clearScope = function(){
                     $scope.product = {
                        id_type : null,
                        id_sub_type : null,
                        img1:null,
                        img2:null,
                        img3:null,
                        img4:null,
                        product_name : null,
                        product_key:null ,
                        product_detail : null ,
                        price : 0 ,
                        price_sale : 0
                    }
                    $scope.img1 = null ;
                    $scope.img2 = null;
                    $scope.img3 = null ;
                    $scope.img4 = null;
                }

                var setObj = function(data){
                    console.log(data);
                    //console.log(data.img2);

                    if($scope.img1  != null){
                      data.img1 = $scope.img1.name;      
                    }         
                    if($scope.img2 != null){
                      data.img2 = $scope.img2.name;
                    }
                     if($scope.img3 != null){
                      data.img3 = $scope.img3.name;
                    }
                     if($scope.img4 != null){
                      data.img4 = $scope.img4.name;
                    }
                    return data;

                }
                
              
               
  
        }
    ]);