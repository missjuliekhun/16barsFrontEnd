(function(){
  angular
  .module("sixteenBars")
  .controller("SixteenCtrl", SixteenCtrl);

SixteenCtrl.$inject = ('$http', $scope){
  var rootURL = 'http://localhost:3000';
  $scope.poems = poems;
}

})();
