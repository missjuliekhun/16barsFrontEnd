(function(){
    angular
        .module('sixteenBars')
        .controller('PoemsCtrl', ['$http', '$scope', '$state', '$window', PoemsCtrl]);
    function PoemsCtrl($http, $scope, $state, $window) {
      var rootURL = 'https://sixteen-bars.herokuapp.com/api/poems/';
//redirect
      $scope.redirect = function(){
        window.location = "#/poems";
      }
//index
    $scope.getPoems = function(){
      $http.get(rootURL)
      .then(function(res){
        $scope.poems = res.data;
      });
    };
//show
    $scope.showPoem = function(id){
      $http.get(rootURL + id)
        .then(function(res){
          $scope.poem = res.data;
          $state.go('show')
      });
    };
//delete
    $scope.destroyPoem = function(poem){
      $http.delete(rootURL + poem._id, poem)
        .then(function(res){
          $scope.poem = undefined;
            $state.go('indexDelete', {}, {reload: true})
//delete works but doesnt refresh

      });
    };

//create
    $scope.createPoem = function(poem){
    $http.post(rootURL , poem)
      .then(function(res){
        $scope.poems = res.data;
          $state.go('index')

        console.log($scope.poems);
      });
    };
//edit - only works the first time, not sure why?
    $scope.editPoem = function(poem){
     $http.put(rootURL + poem._id, poem)
      .then(function(res){
        $scope.poem = res.data;
        $state.go('edit')
      });
    };

}
})();
