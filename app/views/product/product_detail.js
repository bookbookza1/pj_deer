angular
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
        '$stateParams',
        '$location',
        function ($timeout,$scope, $window, $rootScope, $state,$http,$serve,$translate,$stateParams,$location) {

                //console.log("product-detail");
                //console.log($stateParams);
                var id = null ;
                id = $stateParams.id_product ;
                $scope.showMsgNull = false ;
                $serve.get('api/product/tile/'+id)
                      .then(function(response) {
                          //console.log(response.data);

                          if(response.data.length == 0){
                            $scope.productDetail = "NO DATA";
                            $scope.showMsgNull = true
                          }
                          else{
                             $scope.productDetail = response.data[0] ;
                          }
                         
                          //console.log($scope.productDetail);
                      },
                         function(error,status) {
                            // $scope.data.error = { message: error, status: status};
                             console.log(error); 
                         }
                      ); 
                
                //console.log($scope.productDetail);
                // if($scope.productDetail == null){
                //   $state.go('layout.product',{id:3 ,sub_id: 0 ,mode:0});
                // }
  
                $scope.device;
             
                $scope.$on('window_resize', function () {
                      if (window.innerWidth >= 768) {
                          $scope.device = 'web' ;

                      }
                      else{
                          $scope.device = 'device' ;
                      }
                      //console.log($scope.device);
                      
                });

                 $scope.onload = function(){
            
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
                  {img : 'app/img/product/asphalt/icon11.jpg',name: "นำมารีไซเคิลได้100%",delay:4400}
                 
                ] ;

             

             
  
        }
    ]);