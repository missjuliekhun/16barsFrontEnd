(function(){
  angular
    .module('sixteenBars')
    .controller('sixteenCtrl', sixteenCtrl);

  sixteenCtrl.$inject = ['$http', '$scope', 'SixteenFactory'];

  function sixteenCtrl($http, $scope, SixteenFactory) {
    // var self = this;
    var rootURL = 'http://localhost:3000';

    $scope.getSixteen = function(){
      // $http.get(`${rootURL}/sixteen`)
      SixteenFactory.get()
        .then(function(res){
          SixteenFactory.sixteen = res.data;
          console.log($scope.sixteen);
          $scope.sixteen = SixteenFactory.sixteen;
          $scope.sixteen = undefined;
        })
        .catch(function(err){
          if(err)console.log(err);
        });
    };

    //show
    $scope.showSixteen = function(id){
      $http.get(`${rootURL}/sixteen/${id}`)
        .then(function(res){
          $scope.sixteen = res.data;
          console.log($scope.sixteen);
        })
        .catch(function(err){
          if(err)console.log(err);
        });
    };

    //delete
    $scope.destroySixteen = function(id){
      $http.delete(`${rootURL}/sixteen/${id}`)
        .then(function(res){
          $scope.sixteen = undefined;
          $scope.getSixteen();
          console.log($scope.sixteen);
        })
        .catch(function(err){
          if(err)console.log(err);
        });
    };

    //create
    $scope.createSixteen = function(sixteen){
    $http.post(`${rootURL}/sixteen`, sixteen)
      .then(function(res){
        $scope.sixteen = res.data;
        console.log($scope.sixteen);
      })
      .catch(function(err){
        if(err)console.log(err);
        });
    };

    //edit
    $scope.editSixteen = function(sixteen){
    $http.put(`${rootURL}/sixteen/${$scope.sixteen.id}`, sixteen)
      .then(function(res){
        //$scope.getSixteen(); //redirect to index
        $scope.sixteen = res.data;
              console.log($scope.
              );
      })
      .catch(function(err){
        if(err)console.log(err);
        });
    };

  }
})();
