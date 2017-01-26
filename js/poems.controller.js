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

    //test
    $scope.test = function(){
      console.log($scope.poem)
      console.log($scope.poem.title)}
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
