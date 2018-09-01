app
    // .service('$serve', function() {
    //       return {
    //           url : 'http://www.demo1.funsoffice.com/'
    //       };
    //  })
    .service('$serve',['$http','$q','$httpParamSerializer','$state','$rootScope', function($http,$q,$httpParamSerializer,$state,$rootScope) {
          return {
             call : function(medthod,url,data) {
                    
                    var deferred = $q.defer();
                    var self = this ;
                    var req = {
                        method: medthod,
                        url: 'http://www.funsoffice.com/'+url,
                        headers: {
                        	"Content-type" : "application/json;charset=utf-8" },
                        data : data
                    }
                    $http(req).then(function(response) {
                             //console.log(response.data);
                                deferred.resolve(response) ; 
                            
                          },function(error) {
                              //console.log(error);
                              deferred.reject(error);
                              
                          }      
                    ); 
                    return deferred.promise;
             },
              get : function(url){
                   return this.call('GET',url);
              },
              post : function(url,data){

                   return this.call('POST',url,data);
              } ,
              delete : function(url){
                   return this.call('DELETE',url);
              },
              put : function(url,data){
                   return this.call('PUT',url,data);
              }
            
             
          };
     }])
    

;