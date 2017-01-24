(function(){
  angular
    .module('sixteenBars')
    .controller('sixteenBarsCtrl', sixteenBarsCtrl);

  sixteenBarsCtrl.$inject = ['$http', '$scope', 'SixteenBarsFactory'];

  function sixteenBarsCtrl($http, $scope, SixteenBarsFactory) {
    // var self = this;
    var rootURL = 'http://localhost:3000';

    $scope.getSixteenBars = function(){
      // $http.get(`${rootURL}/sixteenBars`)
      SixteenBarsFactory.get()
        .then(function(res){
          SixteenBarsFactory.sixteenBars = res.data;
          console.log($scope.sixteenBars);
          $scope.sixteenBars = SixteenBarsFactory.sixteenBars;
          $scope.sixteenBars = undefined;
        })
        .catch(function(err){
          if(err)console.log(err);
        });
    };

    $scope.showSixteenBars = function(id){
      $http.get(`${rootURL}/sixteenBars/${id}`)
        .then(function(res){
          $scope.sixteenBars = res.data;
          console.log($scope.sixteenBars);
        })
        .catch(function(err){
          if(err)console.log(err);
        });
    };

    //delete
    $scope.destroySixteenBars = function(id){
      $http.delete(`${rootURL}/sixteenBars/${id}`)
        .then(function(res){
          $scope.sixteenBars = undefined;
          $scope.getSixteenBarss();
          console.log($scope.sixteenBars);
        })
        .catch(function(err){
          if(err)console.log(err);
        });
    };
    //create
    $scope.createSixteenBars = function(sixteenBars){
    $http.post(`${rootURL}/sixteenBars`, sixteenBars)
      .then(function(res){
        $scope.sixteenBars = res.data;
        console.log($scope.sixteenBars);
      })
      .catch(function(err){
        if(err)console.log(err);
        });
    };
    //edit
    $scope.editSixteenBars = function(sixteenBars){
    $http.put(`${rootURL}/sixteenBars/${$scope.sixteenBars.id}`, sixteenBars)
      .then(function(res){
        //$scope.getSixteenBarss(); //redirect to index
        $scope.sixteenBars = res.data;
              console.log($scope.
              );
      })
      .catch(function(err){
        if(err)console.log(err);
        });
    };

  }
})();
