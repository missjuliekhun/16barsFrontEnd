(function(){
  angular
    .module('16barsApp')
    .controller('BarsCtrl', BarsCtrl);

    BarsCtrl.$inject = ['$http', '$scope'];
    function BarsCtrl($http, $scope){
    var rootURL = 'http://localhost:3000';
    var self = this;

  self.getBars = function(){
$http.get('localhost:3000/bars')
.then(function(res){

};
.catch(function(err){
if(err)console.log(err);
});
self.getBars();
};

})();
