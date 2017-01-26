'use strict';

(function(){
  angular
  .module('sixteenBars', ["ui.router"])
  .config(["$stateProvider", Router])

function Router($stateProvider){
  console.log("working")
}

})();

  .controller("sixteenCtrl", [sixteenCtrl]);
function SixteenCtrlFunction(){
  console.log("I'm in the controller!");
}


function Router($stateProvider){
  $stateProvider
  .state("sixteenIndex", {
    url: "/sixteen",
    controller: "sixteenCtrl",
    controllerAs: "vm"
  });
}


// .state('index', {
//     url: '/api/index',
//     templateUrl: 'index.html'
// })
//
//
// .state('poem.find({})', {
//     url: '/api/:id',
//     templateUrl: '', //show.directive.js?
//     controller: function($scope) {
//         $scope.poems = ;
//     }
// })

// var poemState = {
//   name: 'poems.title',
//   url: '/{poemId}',
//   component: 'poem',
//   resolve: {
//     person: function(poem, $stateParams) {
//       return poem.find(function(poem) {
//         return poem.id === $stateParams.poemId;
//       });
//     }
//   }
// }
