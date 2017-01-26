(function(){
angular
 .module('sixteenBars', ["ui.router", ])
 .config(["$stateProvider", Router])

 function Router($stateProvider){
   console.log("working");
   $stateProvider
   .state('index', {
       url: '/poems',
       templateUrl: '/templates/poemsIndex.html',
       controller: "PoemsCtrl"
   })
   .state('show', {
       url: '/poems/:id',
       templateUrl: '/templates/poemShow.html',
       controller: "PoemsCtrl",
   })
   
 }
})();
