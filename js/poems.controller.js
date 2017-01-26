(function(){
    angular
        .module('sixteenBars')
        .controller('PoemsCtrl', ['$http', '$scope', PoemsCtrl]);
    function PoemsCtrl($http, $scope) {

    $scope.getPoems = function(){
      $http.get('http://localhost:3000/api/poems')
      .then(function(res){
        $scope.poems = res.data;
        console.log($scope.poems)
      });
          };
          $scope.showPoems = function(id){
      $http.get(`http://localhost:3000/api/poems/${_id}`)
        .then(function(res){
          $scope.poem = res.data.find({poem});
        });
    };

    //delete
    $scope.destroyPoems = function(id){
      $http.delete(`http://localhost:3000/api/poems/${_id}`)
        .then(function(res){
          $scope.poems = undefined;
          $scope.getPoems();

        });
    };
    //create
    $scope.createPoems = function(poem){
    $http.post(`http://localhost:3000/api/poems/`, poem)
      .then(function(res){
        $scope.poems = res.data;
        console.log($scope.poems);
      });
    };
    //edit
    $scope.editPoems = function(poem){
    $http.put(`http://localhost:3000/api/poems/${$scope.poem.id}`, poem)
      .then(function(res){
        $scope.poem = res.data;
              console.log($scope.poems);
      });
    };
  };
})();
