(function(){
    angular
        .module('sixteenBars')
        .controller('PoemsCtrl', ['$http', '$scope', '$state', '$window', '$stateParams', PoemsCtrl])
        // .config($ionicConfigProvider.views.maxCache(0));
    function PoemsCtrl($http, $scope, $state, $window, $stateParams) {
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
      console.log(`${JSON.stringify($scope.poems)}`)
      var index = $scope.poems.indexOf(poem);
        $scope.poems = $scope.poems.splice(poem, 1);
        console.log(`${JSON.stringify($scope.poems)}`)
      $http.delete(rootURL + poem._id)
        .then(function(res){
          console.log('next stuff')
            // $state.go('indexDelete', {}, {reload: true})
//             $state.transition('indexDelete', $stateParams,  {
//     reload: true,
//     inherit: false,
//     notify: true
// });
//delete works but doesnt refresh

      })
      .catch(function(res){
        console.log("catch stuff")
      })
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
