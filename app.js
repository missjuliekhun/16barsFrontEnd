(function(){
angular
  .module('sixteenBars', ["ui.router", ])
  .config(["$stateProvider", Router])

  function Router($stateProvider){
    console.log("working");
    $stateProvider
    // The state that shows all poems.
    .state('index', {
        url: '/poems',
        templateUrl: '/partials/poemsIndex.html',
    })
    // The state that shows one poem. / delete is buttton within this state.
    .state('show', {
        url: '/poem',
        templateUrl: '/partials/poemShow.html',
    })
    // Tbe state that shows new poem form.
    .state('create', {
        url: '/poemNew',
        templateUrl: '/partials/poemNew.html',
    })
    // The state that shows edit.
    .state('edit', {
        url: '/poemEdit',
        templateUrl: '/partials/poemEdit.html',
    })
  }
})();
