(function(){
  angular
    .module('sixteenBars')
    .factory('SixteenBarsFactory', SixteenBarsFactory);

  SixteenBarsFactory.$inject = ['$http'];


    function SixteenBarsFactory($http){
      return {
        get: function(){
          return(`http://localhost:3000/poems`);
        }
       };
    };
  })();
