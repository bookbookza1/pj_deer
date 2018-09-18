angular
  .module('app')
  .controller('homeCtrl', [
        '$timeout',
        '$scope',
        '$window',
        '$rootScope',
        '$state',
        '$http',
        '$serve',
        '$translate',
        '$http',
        function ($timeout,$scope, $window, $rootScope, $state,$http,$serve,$translate,$http) {

               // $http.get('http://demo1.funsoffice.com/demo1_api/product')
               //  .then(function(response) {
               //     console.log(response.data);
                   

               //  },
               //     function(error,status) {
               //        // $scope.data.error = { message: error, status: status};
               //         console.log(error); 
               //     }
               //  ); 
               $scope.productList ;
               $scope.articleData = [] ;
               $scope.imgPort = [] ;
               $scope.article = null;
               // $scope.change = false ;
               $scope.device = null ;
                $scope.onload = function(){
                    getArticle();
                    getHomeImgPort();
                    getProduct();
                    checkWith()  
                };
               $scope.collectionsShow ={
                  imgSelect : [
                    {
                      img1:'app/img/product/asphalt/stone/2.jpg',
                      img2:'app/img/product/asphalt/stone/2sub.jpg',
                      img3 :'app/img/product/asphalt/stone/2-1.jpg',
                      img4 :'app/img/product/asphalt/stone/2-2.jpg',
                      img5 :'app/img/product/asphalt/stone/2-3.jpg',
                      name: 'CALA MARBLE',
                      number : 'NO.WST0002'
                    },
                    {
                      img1:'app/img/product/asphalt/stone/3.jpg',
                      img2:'app/img/product/asphalt/stone/3sub.jpg',
                      img3:'app/img/product/asphalt/stone/3-1.jpg',
                      img4 :'app/img/product/asphalt/stone/3-2.jpg',
                      img5 :'app/img/product/asphalt/stone/3-3.jpg',
                      name: 'GRAND CASA',
                      number : 'NO.WST5003'
                    },
                    {
                      img1:'app/img/product/asphalt/wood/5.jpg',
                      img2:'app/img/product/asphalt/wood/5sub.jpg',
                      img3:'app/img/product/asphalt/wood/5-1.jpg',
                      img4:'app/img/product/asphalt/wood/5-2.jpg',
                      img5:'app/img/product/asphalt/wood/5-3.jpg',
                      name: "CLASSIC OAK",
                      number:"NO.YOT2009"
                    }
                  ]
               }
               
                var getProduct = function(){
                    $serve.get('api/product/recommended/10')
                        .then(function(response) {
                            //console.log(response.data);
                            //setProduct(response.data);
                             $scope.productList = response.data;
                            //setProduct(response.data);

                        },
                           function(error,status) {
                              // $scope.data.error = { message: error, status: status};
                               console.log(error); 
                           }
                        ); 
                }

                
                var checkWith = function(){
                      if (window.innerWidth > 1024) {
                        $scope.device = 'web' ;

                      }
                      else{
                          $scope.device = 'device' ;
                      }
                }
                var getHomeImgPort = function(){
                    $http.get('app/data/homeImgPort.json')
                      .then(function(response) {
                         //console.log(response.data);
                          $scope.imgPort = response.data ;

                      },
                         function(error,status) {
                            // $scope.data.error = { message: error, status: status};
                             console.log(error); 
                         }
                      ); 
                }


                var getArticle = function(){

                       $http.get('app/data/data_home_article.json')
                        .then(function(response) {
                           //console.log(response.data);
                           $scope.articleData = response.data
                           $scope.article = response.data[0] ;
                           //console.log($scope.article);
                        },
                       function(error,status) {
                          // $scope.data.error = { message: error, status: status};
                           console.log(error); 
                       }
                    ); 
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
                $scope.$on('onLastRepeat', function (scope, element, attrs) {
                       $(window).trigger("resize");
                       //console.log("resize");
                      
                });

                
                   
           
                $scope.length = []
                for(var i=0;i<10;i++){
                   $scope.length[i] = i ;
                }
                $scope.dataProduct = [{"img":""},{"img":""},{"img":""},{"img":""},{"img":""},{"img":""}]

                $scope.selectArticle = function(data){
                      //console.log(data);
                        // $scope.article  = null ;
                        // $scope.change = true ;
                       $scope.article  = data ;
                      // $timeout(function(){
                      //     $scope.article  = data ;
                      //     $scope.change = false ;
                      // },1000)
                      
                }

                //ตัวแปร ส่ง ค่า เมนูและเมนูย่อยของกระเบื้ยง
                $scope.dataClickProduct3 = {
                  id_sub : 0 
                }
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

                $scope.dataSmartmatt ={
                    id: 3,
                    name: "กระเบื้องยาง Smartmatt",
                    sub: [
                          {id_sub: "0", name: "ทั้งหมด"},
                          {id_sub: "3-1", name: "Wood Texture"},
                          {id_sub: "3-2", name: "Stone Texture"}
                        ]
                }




           
        }
    ]);