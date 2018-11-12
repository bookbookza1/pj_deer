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
        '$location',
        function ($timeout,$scope, $window, $rootScope, $state,$http,$serve,$translate,$http,$location) {

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
               //$scope.articleData = [] ;
               //$scope.imgPort = [] ;
               $scope.article = null;
               // $scope.change = false ;
               $scope.device = null ;
                $scope.onload = function(){
                    // getArticle();
                    // getHomeImgPort();
                    //getProduct();
                    checkWith()  
                };
               $scope.collectionsShow ={
                  imgSelect : [
                    {
                      id:36,
                      img1:'app/img/product/asphalt/stone/2.jpg',
                      img2:'app/img/product/asphalt/stone/2sub.jpg',
                      img3 :'app/img/product/asphalt/stone/2-1.jpg',
                      img4 :'app/img/product/asphalt/stone/2-2.jpg',
                      img5 :'app/img/product/asphalt/stone/2-3.jpg',
                      name: 'CALA MARBLE',
                      number : 'NO.WST0002'
                    },
                    {
                      id:37,
                      img1:'app/img/product/asphalt/stone/3.jpg',
                      img2:'app/img/product/asphalt/stone/3sub.jpg',
                      img3:'app/img/product/asphalt/stone/3-1.jpg',
                      img4 :'app/img/product/asphalt/stone/3-2.jpg',
                      img5 :'app/img/product/asphalt/stone/3-3.jpg',
                      name: 'GRAND CASA',
                      number : 'NO.WST5003'
                    },
                    {
                      id:22,
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
               
                // var getProduct = function(){
                //     $serve.get('api/product/wallpaper/1-1/20')
                //         .then(function(response) {
                //             //console.log(response.data);
                //             //setProduct(response.data);
                //              $scope.productListWallpaper = response.data;
                //             //setProduct(response.data);

                //         },
                //            function(error,status) {
                //               // $scope.data.error = { message: error, status: status};
                //                console.log(error); 
                //            }
                //         ); 
                // }

                
                var checkWith = function(){
                      if (window.innerWidth > 1024) {
                        $scope.device = 'web' ;

                      }
                      else{
                          $scope.device = 'device' ;
                      }
                }
                // var getHomeImgPort = function(){
                //     $http.get('app/data/homeImgPort.json')
                //       .then(function(response) {
                //          //console.log(response.data);
                //           $scope.imgPort = response.data ;

                //       },
                //          function(error,status) {
                //             // $scope.data.error = { message: error, status: status};
                //              console.log(error); 
                //          }
                //       ); 
                // }


                // var getArticle = function(){

                //        $http.get('app/data/data_home_article.json')
                //         .then(function(response) {
                //            //console.log(response.data);
                //            $scope.articleData = response.data
                //            $scope.article = response.data[0] ;
                //            //console.log($scope.article);
                //         },
                //        function(error,status) {
                //           // $scope.data.error = { message: error, status: status};
                //            console.log(error); 
                //        }
                //     ); 
                // }

                $scope.productListWallpaper = [
                  {img : 'app/img/product/wallpaper/normal/cartoon/5201.jpg',product_key: "5201"},
                  {img : 'app/img/product/wallpaper/normal/cartoon/05309.jpg',product_key: "05309"},
                  {img : 'app/img/product/wallpaper/normal/cartoon/5504.jpg',product_key: "5504"},
                  {img : 'app/img/product/wallpaper/normal/cartoon/50362.jpg',product_key: "50362"},
                  {img : 'app/img/product/wallpaper/normal/cartoon/5901.jpg',product_key: "5901"},
                  {img : 'app/img/product/wallpaper/normal/cartoon/F3203.jpg',product_key: "F3203"},
                  {img : 'app/img/product/wallpaper/normal/loft/777-2-LF2.jpg',product_key: "777-2"},
                  {img : 'app/img/product/wallpaper/normal/loft/31121.jpg',product_key: "31121"},
                  {img : 'app/img/product/wallpaper/normal/loft/33002-LF.jpg',product_key: "33002"},
                  {img : 'app/img/product/wallpaper/normal/loft/55301-LF2.jpg',product_key: "55301"},
                  {img : 'app/img/product/wallpaper/normal/loft/55502-LF.jpg',product_key: "55502"},
                  {img : 'app/img/product/wallpaper/normal/loft/55503-LF.jpg',product_key: "55503"},
                  {img : 'app/img/product/wallpaper/normal/loft/56002-LF1.jpg',product_key: "56002"},
                  {img : 'app/img/product/wallpaper/normal/loft/56201-LF2.jpg',product_key: "56201"},
                  {img : 'app/img/product/wallpaper/normal/loft/56403-LF1.jpg',product_key: "56403"},
                  {img : 'app/img/product/wallpaper/normal/loft/58402-LF2.jpg',product_key: "58402"},
                  {img : 'app/img/product/wallpaper/normal/room_baby/JCHE-1.jpg',product_key: "JPS JCHE-1"},
                  {img : 'app/img/product/wallpaper/normal/room_baby/JCHE-2.jpg',product_key: "JPS JCHE-2"},
                  {img : 'app/img/product/wallpaper/normal/animal/JANM-12.jpg',product_key: "JPS JANM-12"},
                  {img : 'app/img/product/wallpaper/normal/animal/JANM-13.jpg',product_key: "JPS JANM-13"},
                ]

                 $scope.productListWallpaperPrint = [
                  {img : 'app/img/product/wallpaper/print/coffee_restaurant/18.jpg'},
                  {img : 'app/img/product/wallpaper/print/coffee_restaurant/17.jpg'},
                  {img : 'app/img/product/wallpaper/print/coffee_restaurant/21.jpg'},
                  {img : 'app/img/product/wallpaper/print/coffee_restaurant/28.jpg'},
                  {img : 'app/img/product/wallpaper/print/other/C028.jpg'},
                  {img : 'app/img/product/wallpaper/print/other/FA013.jpg'},
                  {img : 'app/img/product/wallpaper/print/other/I009.jpg'},
                  {img : 'app/img/product/wallpaper/print/other/V041.jpg'},
                ]

                $scope.article = {
                    img : "app/img/article/home/id1.jpg",
                    header : "กระเบื้องของ Smartmatt" ,
                    date : "28 ส.ค. 2561",
                    meta : "http://www.smartmattasia.com",
                    metaImg : "",
                } ;

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

                
                   
           
                // $scope.length = []
                // for(var i=0;i<10;i++){
                //    $scope.length[i] = i ;
                // }

                // $scope.dataProduct = [{"img":""},{"img":""},{"img":""},{"img":""},{"img":""},{"img":""}]

                // $scope.selectArticle = function(data){
                      
                //        $scope.article  = data ;
                     
                      
                // }

                //ตัวแปร ส่ง ค่า เมนูและเมนูย่อยของกระเบื้ยง
                // $scope.dataClickProduct3 = {
                //   id_sub : 0 
                // }

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
                

                // $scope.dataSmartmatt ={
                //     id: 3,
                //     name: "กระเบื้องยาง Smartmatt",
                //     sub: [
                //           {id_sub: "0", name: "ทั้งหมด"},
                //           {id_sub: "3-1", name: "Wood Texture"},
                //           {id_sub: "3-2", name: "Stone Texture"}
                //         ]
                // }

                $scope.goUrlProduct = function(id){

                  if(id == '1'){
                    $location.path('product/1/1-1/0');
                  }
                  else if(id == '1-2'){
                    $location.path('product/1/1-2/0');
                  }
                  else if(id == '3'){
                    $location.path('product/3/3-1/0');
                  }
                  
                }




           
        }
    ]);