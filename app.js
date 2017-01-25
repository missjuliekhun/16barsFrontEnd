(function(){
  'use strict';
  angular
    .module('sixteenBars', []);
})();


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
