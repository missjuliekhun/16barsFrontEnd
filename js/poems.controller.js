(function(){
    angular
        .module('sixteenBars')
        .controller('PoemsCtrl', ['$http', '$scope', '$state', PoemsCtrl]);
    function PoemsCtrl($http, $scope, $state) {
//index
    $scope.getPoems = function(){
      $http.get('http://localhost:3000/api/poems')
      .then(function(res){
        $scope.poems = res.data;
        console.log($scope.poems)
      });
          };
//show
    $scope.showPoem = function(id){
      $http.get(`http://localhost:3000/api/poems/${id}`)
        .then(function(res){
          $scope.poem = res.data;
          console.log($scope.poem);
          $state.go('show')
        });
    };
//delete
    $scope.destroyPoem = function(id){
      $http.delete(`http://localhost:3000/api/poems/${_id}`)
        .then(function(res){
          $scope.poems = undefined;
          $scope.getPoems();
        });
    };
//create
    $scope.createPoem = function(poem){
      console.log(poem);
    $http.post(`http://localhost:3000/api/poems/`, poem)
      .then(function(res){
        $scope.poems = res.data;
        console.log($scope.poems);
      });
    };
//edit
    $scope.editPoem = function(poem){
    $http.put(`http://localhost:3000/api/poems/${$scope.poem.id}`, poem)
      .then(function(res){
        $scope.poem = res.data;
              console.log($scope.poems);
      });
    };
  };
})();
