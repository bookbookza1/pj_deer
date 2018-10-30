angular
  .module('app')
  .controller('productTestCtrl', [
        '$timeout',
        '$scope',
        '$window',
        '$rootScope',
        '$state',
        '$http',
        '$serve',
        '$translate',
        '$stateParams',
        '$location',
        function ($timeout,$scope, $window, $rootScope, $state,$http,$serve,$translate,$stateParams,$location) {

                //console.log("product");

                console.log($stateParams);
                $scope.dataProduct ={
                  name : null,
                  id : $stateParams.id,
                  sub_id : $stateParams.sub_id,
                  sub : [] ,
                  mode : $stateParams.mode
                };
                var nameMain = $stateParams.name ;



                $rootScope.showFooter = false;
                $scope.subMenu = [];
                $scope.railList = [];
                $scope.id_sub
                //console.log($state.params);
                $scope.loadingModeWall = true ;
                
                $scope.headerModeWallpaper = $translate.instant('recommended') ; //ชื่อแสดงประเภทวอลเปเปอร์
              
               
              
                $scope.nameProduct = $translate.instant('recommended product');
              
                $scope.menu = []
             
                $scope.productList = [] ;
                // $scope.tileGuleList = [] ;
                $scope.recommendedWallList = [] ;
           
                //console.log($state.params);
                $scope.numPage = {
                    wall : null ,
                    tile : null ,
                    recommendedTile : null
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

               $scope.onload = function(){

                     checkWith();
                     getProductRail(); // ข้อมูลรางผ้าม่าน

                    
                      $http.get('app/data/menu_product.json')
                            .then(function(response) {
                            //console.log(response.data);
                              
                            $scope.menu = response.data ;
                            angular.forEach(response.data, function(value,index){
                                if(value.id ==  $scope.dataProduct.id){
                                  $scope.dataProduct.sub = value.sub;
                                   $scope.dataProduct.name = value.name
                                }
                            })

                            $scope.selectProductSub($scope.dataProduct, $scope.dataProduct.sub, $scope.dataProduct.sub_id);
                        },
                           function(error,status) {
                           
                               console.log(error); 
                           }
                        ); 
  
               }

               //ดึงข้อมูลรางผ้าม่าน
               var getProductRail = function(){
                    for(var i=0;i<27;i++){
                        var dex = i+1 ;
                        $scope.railList[i] = {
                          'img' : 'app/img/product/rail/'+dex+'.jpg'
                        }
                    }
                    // console.log($scope.railList);
               }

                var checkWith = function(){
                    if (window.innerWidth > 1024) {
                        $scope.device = 'web' ;
                        $scope.numPage.wall = 18;
                        $scope.numPage.tile = 20 ;
                        $scope.numPage.recommendedTile = 10 ;

                    }
                    else{
                        $scope.device = 'device' ;
                        $scope.numPage.wall = 16;
                        $scope.numPage.tile = 12 ;
                        $scope.numPage.recommendedTile = 6 ;
                    }
               }

             

               var getProduct = function(id,id_sub_type){
                      
                      $rootScope.showFooter = false;

                      $serve.get('api/product/'+id+'/'+id_sub_type)
                            .then(function(response) {
                                //console.log(response.data);

                                // if(id_sub_type == '3-3'){
                                //       $scope.tileGuleList  = response.data; 
                                // } 
                                // else{
                                //      $scope.productList =  response.data; 
                                // }
                                $scope.productList =  response.data; 
                                    
                                 $scope.loadingModeWall = false;           
                                 $rootScope.showFooter = true;
                          },
                             function(error,status) {
                                // $scope.data.error = { message: error, status: status};
                                 console.log(error); 
                             }
                          ); 
               }


               $scope.$on('onLastRepeat', function (scope, element, attrs) {
                    $(window).trigger("resize");  
                    var component = UIkit.accordion($('.uk-accordion'),{showfirst:false,duration:500,easing:'swing'});
                    component.update();
               });


                $scope.selectProductSub = function(data,data_id_sub,id_sub){
                  
                     //console.log(id_sub);
                     if(id_sub == 0){
                        $scope.id_sub = 0 ;
                       
                     }
                     else{
                        angular.forEach(data_id_sub, function(value,index){
                            if(value.id_sub == id_sub){
                                $scope.dataProduct.name = value.name; 
                            }
                        })
                        $scope.id_sub = id_sub;

                     }

                     //console.log($scope.id_sub);
                     $scope.productList = [] ;
                     $scope.recommendedWallList = [] ;
                                    
                    

                     if(data.id == 1)
                     {
                        if($scope.id_sub == 0){
                            $scope.id_sub = '1-1';
                        }
                        $scope.loadingModeWall = true ;
                        $scope.headerModeWallpaper = $translate.instant('recommended') ;   
                        getModeWall($scope.id_sub);  
                       
                     }
                     else if(data.id == 3 || data.id == 11){
                         
                        getProduct(data.id,$scope.id_sub);
                        
                     }
                     else{
                         $scope.productList = [] ;
                         $rootScope.showFooter = true;
                    }
 
              }

              var getModeWall = function(id_sub){
                 $scope.modeWallpaper = [] ;             
                  $http.get('app/data/mode-wallpaper.json')
                    .then(function(response) {
                             var nameMode = '' ;
                             if(id_sub == "1-1"){
                                angular.forEach(response.data, function(value,index){
                                     if(value.id == 1){
                                        this.push(value);
                                      }
                                      if(value.id_category == $scope.dataProduct.mode){
                                          nameMode = value.name;
                                      }
                                },$scope.modeWallpaper)
                                
                                if($scope.dataProduct.mode == '0'){
                                    getRecommendedWall('1-1'); 
                                }
                                else{
                                    $scope.getWallpaperByMode($scope.dataProduct.mode,nameMode)
                                }
                               
                             }
                             else if(id_sub == "1-2"){
                                 angular.forEach(response.data, function(value,index){
                                   if(value.id == 2){
                                      this.push(value);
                                    }
                                    if(value.id_category == $scope.dataProduct.mode){
                                          nameMode = value.name;
                                    }
                                },$scope.modeWallpaper)
                                

                                if($scope.dataProduct.mode == '0'){
                                    getRecommendedWall('1-2'); 
                                }
                                else{
                                    $scope.getWallpaperByMode($scope.dataProduct.mode,nameMode)
                                }
                                
                             }
                             else{
                                $scope.modeWallpaper = response.data ;
                               
                                getRecommendedWall('0');  
                             }

                              
                             
                    },
                       function(error,status) {
                          // $scope.data.error = { message: error, status: status};
                           console.log(error); 
                       }
                    ); 
              }


              //wallpaper controller
              var getRecommendedWall = function(id_sub_type){
                    $scope.headerModeWallpaper = '' ;
                    $serve.get('api/product/wallpaper/recommended/'+id_sub_type+'/'+$scope.numPage.wall)
                      .then(function(response) {
                          //console.log(response.data); 
                          $scope.productList = response.data ;
                          $scope.loadingModeWall = false ;
                          $rootScope.showFooter = true;

                      },
                         function(error,status) {
                            // $scope.data.error = { message: error, status: status};
                             console.log(error); 
                         }
                      );   
              }


              $scope.getWallpaperByMode = function(id_category,name){
                    
                    $scope.headerModeWallpaper = name ;
                
                  
                    if($scope.nameMode == id_category)
                    {
                      $scope.nameMode = null ;
                    }
                    else{
                        
                        $scope.loadingModeWall = true ;
                        $serve.get('api/product/wallpaper/'+id_category)
                        .then(function(response) {
                            //console.log(response.data);    
                            //setProduct(response.data);
                            $scope.productList = response.data ;
                            $scope.loadingModeWall = false ;
                            $rootScope.showFooter = true;
                        },
                           function(error,status) {
                              // $scope.data.error = { message: error, status: status};
                               console.log(error); 
                           }
                        );   
                        $scope.nameMode = id_category ;
                    }
                }

              $scope.urlGo = function(data,sub_id){
                 // console.log(data);
                 // console.log(sub_id);
                 $location.path('product/'+data.id+'/'+sub_id+'/0');

              }

              $scope.urlGoWallMode = function(id_category){
                  //console.log($scope.id_sub);

                  $location.path('product/1/'+$scope.id_sub+'/'+id_category);
              }
                  
              
               
  
        }
    ]);