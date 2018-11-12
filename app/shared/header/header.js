angular
  .module('app')
  .controller('headerCtrl', [
        '$timeout',
        '$scope',
        '$window',
        '$rootScope',
        '$state',
        '$http',
        '$location',
        function ($timeout,$scope, $window, $rootScope, $state,$http,$location) {

                //console.log("TEST");
            $scope.dropdownOpen = false ;
            $scope.onload = function(){
                checkWidth();
                getTypeProduct();
              
            }
            var getTypeProduct = function(){
                $http.get('app/data/menu_product.json')
                      .then(function(response) {
                          //console.log(response.data);
                        
                      $scope.menu = response.data ;
                      setMenu(response.data);
                  },
                     function(error,status) {
                     
                         console.log(error); 
                     }
                  ); 
            }
            var checkWidth = function(){
                if (window.innerWidth >= 1024) {
                    $scope.device = 'web' ;
                }
                else{
                    $scope.device = 'device' ;
                }
                //console.log($scope.device);
            }
            

             $scope.$on('window_resize', function () {
                if (window.innerWidth >= 1024) {
                    $scope.device = 'web' ;
                }
                else{
                    $scope.device = 'device' ;
                }
               
                
            });

            var modal = UIkit.modal("#popup-promotion");
            modal.show();  

            $scope.sections = [];


           
            var setMenu = function(menu){
                var menu_main = [
                    {
                        title: 'home',
                        link: 'layout.home',
                        icon : 'home',
                        sub : false ,
                    },
                     {
                        title: 'product',
                        sub : true ,
                        item : menu ,
                        icon:'list',
                        link: 'layout.product'
                    },
                    {
                        title : 'about_us ',
                        sub : false ,
                        icon:'person',
                        link: 'layout.article'
                    },
                     {
                        title: 'portfolio',
                        sub : false ,
                        icon : 'collections',
                        link: 'layout.portfolio'
                    },
                    {
                        title: 'contact',
                        sub : false ,
                        icon : 'perm_phone_msg',
                        link: 'layout.contact'
                    },
                ];
                 var menu = angular.copy(menu_main);
                 $scope.sections = menu;
            }
          
            $scope.$on('onLastRepeat', function (scope, element, attrs) {
                   $(window).trigger("resize");
                   
            });
            

           // $scope.setDropdown = function(){
           //      if($scope.dropdownOpen == false){
           //         $scope.dropdownOpen = true; 
           //         $("body").addClass("dropdownOpenOverflow");
           //      }
           //      else{
           //         $scope.dropdownOpen  = false ;
           //         $("body").removeClass("dropdownOpenOverflow");
           //      }
           // }

           $scope.urlGo = function(data){
                console.log(data);
                var sub_id = '0' ;

                if(data.id == '1'){
                  sub_id = '1-1'
                }
                else if(data.id == '3'){
                   sub_id = '3-1'
                }
                $location.path('product/'+data.id+'/'+sub_id+'/0');
           }
           
           
        }
    ]);