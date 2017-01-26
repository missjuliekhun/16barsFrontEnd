(function() {
    angular
        .module('sixteenBars')
        .controller('PoemsCtrl', ['$http', '$scope', PoemsCtrl]);

    PoemsCtrl.$inject = ['$http', '$scope'];

    function PoemsCtrl($http, $scope) {

    $scope.getPoems = function(){
      $http.get('http://localhost:3000/api/poems')
      .then(function(allPoems){
        $scope.Poems = allPoems.data;
            })
          }
          $scope.showPoem = function(id){
      $http.get(`http://localhost:3000/api/poems/${_id}`)
        .then(function(allPoems){
          $scope.Poem = allPoems.data.find({poem});
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
    // //create
    // $scope.createGrumble = function(grumble){
    // $http.post(`${rootURL}/grumbles`, grumble)
    //   .then(function(res){
    //     $scope.grumbles = res.data;
    //     console.log($scope.grumbles);
    //   })
    //   .catch(function(err){
    //     if(err)console.log(err);
    //     });
    // };
    // //edit
    // $scope.editGrumble = function(grumble){
    // $http.put(`${rootURL}/grumbles/${$scope.grumble.id}`, grumble)
    //   .then(function(res){
    //     //$scope.getGrumbles(); //redirect to index
    //     $scope.grumble = res.data;
    //           console.log($scope.grumbles);
    //   })
    //   .catch(function(err){
    //     if(err)console.log(err);
    //     });
    };
})();
