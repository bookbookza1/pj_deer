﻿angular
  .module('app')
  .controller('product_detailCtrl', [
        '$timeout',
        '$scope',
        '$window',
        '$rootScope',
        '$state',
        '$http',
        '$serve',
        '$translate',
        function ($timeout,$scope, $window, $rootScope, $state,$http,$serve,$translate) {

                console.log("product-detail");
               //console.log($state.params);
                $scope.productDetail = $state.params.data ;
                console.log($scope.productDetail);
                if($scope.productDetail == null){
                  $state.go('layout.product');

                }
                $scope.subOpen = false ;
                $scope.subMenu = [];
                $scope.checkOpen = $rootScope.checkOpen;
                $scope.menu = []
                $scope.device;
             
                $scope.$on('window_resize', function () {
                      if (window.innerWidth >= 768) {
                          $scope.device = 'web' ;

                      }
                      else{
                          $scope.device = 'device' ;
                      }
                      console.log($scope.device);
                      
                });

                 $scope.onload = function(){
                    getMenu();
                    checkWith();
                    getRelatedProducts();
                    
                }
                var getRelatedProducts = function(){
                      $serve.get('api/product/recommended/10')
                        .then(function(response) {
                            //console.log(response.data);
  
                             $scope.relatedProducts = response.data;
                            //setProduct(response.data);

                        },
                           function(error,status) {
                              // $scope.data.error = { message: error, status: status};
                               console.log(error); 
                           }
                        ); 
                }
               
               

                 var checkWith = function(){
                      if (window.innerWidth >= 768) {
                        $scope.device = 'web' ;

                      }
                      else{
                          $scope.device = 'device' ;
                      }
                }
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


                $scope.openSub = function(data){
                    console.log(data.id);
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
                    
                    //console.log(sub)
                }

                $scope.selectProduct = function(data){
                    $state.go('layout.product',{id: $scope.checkOpen , id_sub : data }) 
                }
                
                $scope.length = []
                for(var i=0;i<8;i++){
                   $scope.length[i] = i ;
                }

               $scope.$on('onLastRepeat', function (scope, element, attrs) {
                  $(window).trigger("resize");  
               });
               
                $scope.imgIconDetail = [
                  {img : 'app/img/product/asphalt/icon1.jpg',name: "แข็งแรง",delay:0},
                  {img : 'app/img/product/asphalt/icon2.jpg',name: "รับประกัน15ปี",delay:400},
                  {img : 'app/img/product/asphalt/icon3.jpg',name: "กันการลามไฟ",delay:800},
                  {img : 'app/img/product/asphalt/icon4.jpg',name: "กันน้ำ100%",delay:1200},
                  {img : 'app/img/product/asphalt/icon5.jpg',name: "กันปลวก",delay:1600},
                  {img : 'app/img/product/asphalt/icon6.jpg',name: "กันรอยขีดข่วน",delay:2000},
                  {img : 'app/img/product/asphalt/icon7.jpg',name: "กันแบคทีเรีย",delay:2400},
                  {img : 'app/img/product/asphalt/icon12.jpg',name: "ติดตั้งด้วยระบบคลิ๊กล็อค",delay:2800},
                  {img : 'app/img/product/asphalt/icon8.jpg',name: "ไม่ต้องใช้กาวในการติดตั้ง",delay:3200},
                  {img : 'app/img/product/asphalt/icon9.jpg',name: "กันสารเคมี",delay:3600},
                  {img : 'app/img/product/asphalt/icon10.jpg',name: "เสริมแผ่นรองเพื่อลดเสียง",delay:4000},
                  {img : 'app/img/product/asphalt/icon11.jpg',name: "นำมารีไซเคิ้ลได้100%",delay:4400}
                 
                ] ;

               //console.log($scope.imgIconDetail);
  
        }
    ]);