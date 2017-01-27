(function(){
    angular
        .module('sixteenBars')
        .controller('PoemsCtrl', ['$http', '$scope', '$state', PoemsCtrl]);
    function PoemsCtrl($http, $scope, $state) {
      var rootURL = 'https://sixteen-bars.herokuapp.com/api/poems/';

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
      $http.delete(rootURL + poem._id)
        .then(function(res){
          $scope.poem = undefined;
                $scope.getPoems();
          $state.go('index')
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
      });
  };

}
})();
