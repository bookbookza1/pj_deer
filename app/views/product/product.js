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

                console.log("product");


                $scope.subOpen = false ;
                $rootScope.showFooter = false;
                $scope.subMenu = [];
                $scope.railList = [];
                // var accordion = UIkit.accordion($('.uk-accordion'));
                //console.log($state.params);
                $scope.loadingModeWall = true ;
                //console.log($state.params.id_sub);
                $scope.headerModeWallpaper = $translate.instant('recommended') ; //ชื่อแสดงประเภทวอลเปเปอร์

               
                $scope.checkOpen = $rootScope.checkOpen;
                $scope.nameProduct = $translate.instant('recommended product');
                $scope.setParamsSplitMenu = 0 ;
                $scope.menu = []
             
                $scope.productList = [] ;
                // $scope.tileGuleList = [] ;
                $scope.recommendedWallList = [] ;
                $scope.id_sub = $state.params.id_sub ;
                console.log($state.params);
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

                     getMenu();
                     checkWith();
                     getProductRail();

                     if($scope.id_sub == null){
                        // console.log($scope.id_sub);
                         getProductRecommended();
                         getRecommendedWallFirst();
                         //console.log('1')
                     }
                     else{
                          //console.log('2')
                        $scope.checkOpen = $state.params.id ;
                        $scope.selectProductSub($scope.id_sub);
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
                      },
                         function(error,status) {
                            // $scope.data.error = { message: error, status: status};
                             console.log(error); 
                         }
                      );   
               }
               var getProductRecommended = function(){
                       $scope.loadingModeWall = true;
                       $serve.get('api/product/recommended/'+$scope.numPage.recommendedTile)
                           .then(function(response) {
                            //console.log(response.data);
                            //setProduct(response.data);
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
                                console.log(response.data);

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

              

               // โหลดข้อมูลเมนู
               var getMenu = function(){
                    $http.get('app/data/menu_product.json')
                      .then(function(response) {
                          //console.log(response.data);
                          //$scope.imgPort = response.data ;
                          $scope.menu = response.data ;

                            var length = angular.copy($scope.menu);
                            if($rootScope.checkOpen != null){
                                $scope.subOpen = true ;
                                for(var i=0;i<length.length;i++){
                                    if(length[i].id == $scope.checkOpen){
                                           $scope.subMenu = length[i].sub
                                           break;
                                    }
                                }
                            }

                      },
                         function(error,status) {
                            // $scope.data.error = { message: error, status: status};
                             console.log(error); 
                         }
                      ); 
               }

                // เลือกเมนูใหญ่
                $scope.selectProduct = function(data){
                    
                    if($scope.checkOpen == data.id){
                         $scope.subOpen = false ;
                         $scope.checkOpen  = null;
                    }
                    else{
                         $scope.subOpen = true ;
                         $scope.checkOpen  = data.id;
                         $rootScope.checkOpen = data.id;
                         $scope.subMenu = data.sub
 
                    }
                    
                }


                $scope.selectProductSub = function(data){
                     console.log("in");
                    
                     //$scope.reload.product = true ;
                     
                     $scope.productList = [] ;
                     // $scope.tileGuleList = [] ;
                     $scope.recommendedWallList = [] ;

                     var id = angular.copy($scope.checkOpen) ;
                     var id_sub = data.id_sub ;
                     $scope.setParamsSplitMenu = id ;
                     
                     //console.log($scope.setParamsSplitMenu);
                     $scope.id_sub = id_sub ;
                     $scope.nameProduct = data.name ;                   
                    

                     if(id == 1)
                     {
                        $scope.loadingModeWall = true ;
                        $scope.headerModeWallpaper = $translate.instant('recommended') ;   
                        getModeWall(id_sub);
                       
                     }
                     else if(id == 3 || id == 11){
                         // $scope.loadingModeWall = true ;
                         // if(id_sub == '0'){
                         //     $serve.get('api/product/'+id+'/3-3')
                         //        .then(function(response) {

                         //             $scope.tileGuleList  = response.data; 
                         //             getProduct(id,id_sub);
                         //      },
                         //         function(error,status) {
                         //            // $scope.data.error = { message: error, status: status};
                         //             console.log(error); 
                         //         }
                         //      ); 
                              
                         // }
                         // else{
                         //   
                         // }
                        getProduct(id,id_sub);
                        
                     }
                     else{
                         $scope.productList = [] ;
                       
                    }
                    console.log($scope.setParamsSplitMenu);
                    console.log($scope.id_sub);
                   
                   
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
                          console.log(response.data); 
                          $scope.productList = response.data ;
                          $scope.loadingModeWall = false ;

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