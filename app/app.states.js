app
  .config([
    '$stateProvider',
    '$urlRouterProvider',
    function($stateProvider, $urlRouterProvider) {
      //$locationProvider.html5Mode(true);
      // Use $urlRouterProvider to configure any redirects (when) and invalid urls (otherwise).

      $urlRouterProvider
        .when('', '/home')
        .otherwise('/home');

      $stateProvider
      // -- ERROR PAGES --
        .state("error", {
          url: "/error",
          templateUrl: 'app/views/error/error.html',
          controller: ["$scope", "$error", function($scope, $error) {
            var error = $error.get();
            $scope.error = error;
          }]
        })

        // -- LOGIN PAGE --
        .state("signin", {
          url: "/signin",
          templateUrl: 'app/views/signin/signin.html',
          controller: 'signinCtrl',
          resolve: {
              deps: ['$ocLazyLoad', function($ocLazyLoad) {
                  return $ocLazyLoad.load([
                    'app/views/signin/signin.js',
                    'app/css/signin/signin.css',
                    'lazy_masked_inputs'
                  ]);
              }]
          },
        })

         // -- SIGN UP PAGE --
        .state("signUp", {
          url: "/signUp",
          templateUrl: 'app/views/signUp/signUp.html',
          controller: 'signUpCtrl',
          resolve: {
              deps: ['$ocLazyLoad', function($ocLazyLoad) {
                  return $ocLazyLoad.load([
                    'app/views/signUp/signUp.js',
                    'lazy_masked_inputs'
                  ]);
              }]
          },
        })



        // -- LAYOUT PAGE --
        .state('layout', {
            abstract: true,
            url: "",
            views: {
                'header': {
                    templateUrl: 'app/shared/header/header.html',
                    controller: 'headerCtrl'
                },
                 '': {
                    templateUrl: 'app/views/restricted.html'
                },
                'footer': {
                    templateUrl: 'app/shared/footer/footer.html',
                    controller: 'footerCtrl'
                }
            },
            resolve: {
                deps: ['$ocLazyLoad', function($ocLazyLoad) {
                    return $ocLazyLoad.load([
                        'app/shared/header/header.js',
                        'app/shared/footer/footer.js'
                    ],{ serie: true });
                }]
            }
        })

        //home
        .state('layout.home', {
            url: "/home",
            controller: 'homeCtrl',
            templateUrl: 'app/views/home/home.html',
             resolve: {
              deps: ['$ocLazyLoad', function($ocLazyLoad) {
                  return $ocLazyLoad.load([
                    'app/views/home/home.js'
                   
                  ],{ serie: true });
              }]
             },
             data: {
                pageTitle: 'home'
             }
        })

        // contact
        .state('layout.contact', {
            url: "/contact",
            controller: 'contactCtrl',
            templateUrl: 'app/views/contact/contact.html',
             resolve: {
              deps: ['$ocLazyLoad', function($ocLazyLoad) {
                  return $ocLazyLoad.load([
                    'app/views/contact/contact.js'
                   
                  ],{ serie: true });
              }]
             },
             data: {
                pageTitle: 'contact'
             }
        })
        //product
         .state('layout.product', {
            url: "/product",
            controller: 'productCtrl',
            params : {  id:null , id_sub : null} ,
            templateUrl: 'app/views/product/product.html',
             resolve: {
              deps: ['$ocLazyLoad', function($ocLazyLoad) {
                  return $ocLazyLoad.load([
                    'app/views/product/product.js'
                  ],{ serie: true });
              }]
             },
             data: {
                pageTitle: 'product'
             }
        })

          //product detail
         .state('layout.product_detail', {
            url: "/product_detail",
            params : { data : null} ,
            controller: 'product_detailCtrl',
            templateUrl: 'app/views/product/product_detail.html',
             resolve: {
              deps: ['$ocLazyLoad', function($ocLazyLoad) {
                  return $ocLazyLoad.load([
                    'app/views/product/product_detail.js'
                   
                  ],{ serie: true });
              }]
             },
             data: {
                pageTitle: 'product_detail'
             }
        })

             //portfolio
         .state('layout.portfolio', {
            url: "/portfolio",
            controller: 'portfolioCtrl',
            templateUrl: 'app/views/portfolio/portfolio.html',
             resolve: {
              deps: ['$ocLazyLoad', function($ocLazyLoad) {
                  return $ocLazyLoad.load([
                    'app/views/portfolio/portfolio.js'
                   
                  ],{ serie: true });
              }]
             },
             data: {
                pageTitle: 'portfolio'
             }
        })

                //article
         .state('layout.article', {
            url: "/article",
            controller: 'articleCtrl',
            templateUrl: 'app/views/article/article.html',
             resolve: {
              deps: ['$ocLazyLoad', function($ocLazyLoad) {
                  return $ocLazyLoad.load([
                    'app/views/article/article.js'
                   
                  ],{ serie: true });
              }]
             },
             data: {
                pageTitle: 'article'
             }
        })


        .state('layout.admin', {
            url: "/admin",
            controller: 'adminCtrl',
            templateUrl: 'app/views/admin/admin.html',
             resolve: {
              deps: ['$ocLazyLoad', function($ocLazyLoad) {
                  return $ocLazyLoad.load([
                    'app/views/admin/admin.js',
                    'app/views/admin/addProduct.js',
                    'app/views/admin/productList.js',
                    'app/views/admin/convertDataURL.js'
                  ],{ serie: true });
              }]
             },
             data: {
                pageTitle: 'admin'
             }
        })

       
    
         
    }
  ]);
