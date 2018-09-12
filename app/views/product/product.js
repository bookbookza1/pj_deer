angular
  .module('app')
  .controller('productCtrl', [
        '$timeout',
        '$scope',
        '$window',
        '$rootScope',
        '$state',
        '$http',
        '$serve',
        '$translate',
        function ($timeout,$scope, $window, $rootScope, $state,$http,$serve,$translate) {

                //console.log("product");


                $scope.dataProduct = $state.params.data;
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

                     if($scope.dataProduct == null){
                        
                         getProductRecommended();
                         getRecommendedWallFirst();
                      
                     }
                     else{
                        $scope.selectProductSub($scope.dataProduct);
                     }

               }

               // ดึงข้อมูลรางผ้าม่าน
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

               var getRecommendedWallFirst = function(){
                  $serve.get('api/product/wallpaper/recommended/0/12')
                      .then(function(response) {
                          //console.log(response.data); 
                          $scope.recommendedWallList = response.data ;
                          $rootScope.showFooter = true;
                      },
                         function(error,status) {
                          
                             console.log(error); 
                         }
                      );   
               }
               var getProductRecommended = function(){
                       $scope.loadingModeWall = true;
                       $serve.get('api/product/recommended/'+$scope.numPage.recommendedTile)
                           .then(function(response) {
                           
                            $scope.productList = response.data ;
                            $scope.loadingModeWall = false;
                            $rootScope.showFooter = true;
                        },
                           function(error,status) {
                              // $scope.data.error = { message: error, status: status};
                               console.log(error); 
                           }
                        ); 
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


                $scope.selectProductSub = function(data,data_id_sub){
                     //console.log(data_id_sub);
                     //console.log(data);
                     //$scope.reload.product = true ;
                     if(data_id_sub == null || data_id_sub == undefined){
                        $scope.id_sub = 0 ;
                        $scope.nameProduct = data.name;   
                     }
                     else{
                        $scope.id_sub = data_id_sub.id_sub ;
                        $scope.nameProduct = data_id_sub.name;   
                     }
                     //console.log($scope.id_sub);
                     $scope.productList = [] ;
                     $scope.recommendedWallList = [] ;
                                    
                    

                     if(data.id == 1)
                     {
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

                             if(id_sub == "1-1"){
                                angular.forEach(response.data, function(value,index){
                                     if(value.id == 1){
                                        this.push(value);
                                      }
                                },$scope.modeWallpaper)
                                
                                getRecommendedWall('1-1');  
                             }
                             else if(id_sub == "1-2"){
                                 angular.forEach(response.data, function(value,index){
                                   if(value.id == 2){
                                      this.push(value);
                                    }
                                },$scope.modeWallpaper)
                                
                                getRecommendedWall('1-2');  
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

                        },
                           function(error,status) {
                              // $scope.data.error = { message: error, status: status};
                               console.log(error); 
                           }
                        );   
                        $scope.nameMode = id_category ;
                    }
                }
                  
              
               
  
        }
    ]);