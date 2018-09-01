angular
  .module('app')
  .controller('headerCtrl', [
        '$timeout',
        '$scope',
        '$window',
        '$rootScope',
        '$state',
        '$http',
        function ($timeout,$scope, $window, $rootScope, $state,$http) {

                //console.log("TEST");

            $scope.onload = function(){
                checkWidth();
              
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


            var product_submenu = [ 
                { 
                    title: 'wallpaper' , 
                    link : 'layout.product'
                } 
            ]
            
            var menu_main = [
                {
                    title: 'home',
                    link: 'layout.home',
                    sub : false ,
                },
                 {
                    title: 'product',
                    sub : true ,
                    item : product_submenu ,
                    link: 'layout.product'
                },
                {
                    title : 'about_us ',
                    sub : false ,
                    link: 'layout.article'
                },
                 {
                    title: 'portfolio',
                    sub : false ,
                    link: 'layout.portfolio'
                },
                {
                    title: 'contact',
                    sub : false ,
                    link: 'layout.contact'
                },
            ];

            

           
           
           var menu = angular.copy(menu_main);
           $scope.sections = menu;
            //console.log( $scope.sections );
        
           
        }
    ]);