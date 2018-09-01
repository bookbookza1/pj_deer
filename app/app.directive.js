app
  // .directive("fileread", [
  //   function() {
  //     return {
  //       scope: {
  //         fileread: "="
  //       },
  //       link: function(scope, element, attributes) {
  //         element.bind("change", function(changeEvent) {
  //           var reader = new FileReader();
  //           reader.onload = function(loadEvent) {
  //             scope.$apply(function() {
  //               scope.fileread = loadEvent.target.result;
  //               console.log(scope.fileread);
  //             });
  //           }
  //           reader.readAsDataURL(changeEvent.target.files[0]);
  //         });
  //       }
  //     }
  //   }
  // ])
  .directive("fileread", [function () {
      return {
          restrict: 'A',
          scope: {
              ngModel: "="
          },
          link: function (scope, element, attributes) {
              element.bind("change", function (changeEvent) {
              //     scope.$apply(function () {
              //         scope.ngModel = changeEvent.target.files[0];
              //         // or all selected files:
              //         // scope.fileread = changeEvent.target.files;
              //         console.log(scope.ngModel );
              //     });


              // });
                var reader = new FileReader();
                reader.onload = function(loadEvent) {
                  scope.$apply(function() {
                    scope.ngModel = loadEvent.target.result;
                    //console.log(scope.fileread);
                  });
                }
                reader.readAsDataURL(changeEvent.target.files[0]);
              });
          }
      }
  }])
  .directive('onLastRepeat', function ($timeout) {
        return function (scope, element, attrs) {
            if (scope.$last) {
                $timeout(function () {
                    scope.$emit('onLastRepeat', element, attrs);
                })
            }
        };
    })
  .directive('loadingModel', [
          function ($timeout, $rootScope, $translate) {
              return {
                  restrict: 'E',
                  template: '<div class="sk-cube-grid-backgrond"><div class="sk-cube-grid"><div class="sk-cube sk-cube1"></div><div class="sk-cube sk-cube2"></div><div class="sk-cube sk-cube3"></div><div class="sk-cube sk-cube4"></div><div class="sk-cube sk-cube5"></div><div class="sk-cube sk-cube6"></div><div class="sk-cube sk-cube7"></div><div class="sk-cube sk-cube8"></div><div class="sk-cube sk-cube9"></div></div></div>',     
                  }
              }
  ])


;

