angular
  .module('app')
  .controller('productListCtrl', [
        '$timeout',
        '$scope',
        '$window',
        '$rootScope',
        '$state',
        '$serve',
        '$http',
        function ($timeout,$scope, $window, $rootScope, $state,$serve,$http) {
             
                //console.log("productListCtrl");
                //$scope.titlePage = "product List"
                
                $scope.product = [] ;
                $scope.editProduct = [] ;
                $scope.typeProduct = [] ;
                $scope.subType = [];
                $scope.onload = function(){                  
                    getTypeProduct();
                }

                $scope.img1 = null ;
                $scope.img2 = null ;
                $scope.img3 = null ;
                $scope.img4 = null ;

                var getTypeProduct = function(){
                     $http.get('app/data/menu_product.json')
                      .then(function(response) {
                          console.log(response.data);
                          //$scope.imgPort = response.data ;
                          $scope.typeProduct = response.data ;
                          getProduct();
                           

                      },
                         function(error,status) {
                            // $scope.data.error = { message: error, status: status};
                             console.log(error); 
                         }
                      ); 
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

                var getProduct = function(){
                     $serve.get('api/product')
                         .then(function(response){
                                  console.log(response.data)
                                  $scope.product = response.data;
                                  
                                
                             },function(error) {
                                  console.log(error);
                                  alert("Fail..");
                              }
                      );  
                }

                $scope.delete = function(id){
                    var pass = confirm("Do you want Delete?");
                    if(pass == true){
                        $serve.delete('api/product/'+id)
                         .then(function(response){
                                  //console.log(response.data)
                                  //$scope.product = response.data;
                                  getProduct();
                                   
                                
                             },function(error) {
                                  console.log(error);
                                  alert("Fail..");
                              }
                      );  
                    }
                    
                }

                $scope.setEdit = function(data){
                    console.log(data);
                    $scope.editProduct  =  data ;

                    var type = angular.copy($scope.typeProduct) ;
                    var type2 = [] ;
                    for(var i=0;i<type.length;i++){
                        if(data.id_type == type[i].id){
                            $scope.nameShowType = type[i].name ;
                            type2 = type[i].sub;
                            break;
                        }
                    }
                     
                     for(var i=0;i<type2.length;i++){
                        if(data.id_sub_type == type2[i].id_sub){
                            $scope.nameShowType2 = type2[i].name ;
                             break;
                        }
                    }

                    $scope.img1 = data.img1 ;
                    $scope.img2 = data.img2 ;
                    $scope.img3 = data.img3 ;
                    $scope.img4 = data.img4 ;


                }

                $scope.update = function(data){
                  
                    var obj = angular.copy($scope.editProduct);
                    obj = setUpdate(obj);
                    console.log(obj);
                     $serve.put('api/product/'+obj.id,obj)
                         .then(function(response){
                                  //console.log(response.data)
                                  //$scope.product = response.data;
                                  getProduct();
                                  clearScope();
                                  alert("Update Success.");
                                   
                                
                             },function(error) {
                                  console.log(error);
                                  alert("Fail..");
                              }
                      );  
                }

                var clearScope = function(){
                      $scope.editProduct = [] ;
                      $scope.img1 = null ;
                      $scope.img2 = null ;
                      $scope.img3 = null ;
                      $scope.img4 = null ;
                }

                var setUpdate = function(data){

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