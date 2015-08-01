angular.module('shortly.shorten', [])

.controller('ShortenController', function ($scope, $location, Links) {
  $scope.link = {};
  var url = "http://www.google.com"
  $scope.addLink = function(){
    Links.addLink(url ,function(data){
      console.log("we got the data!!!", data);
    });
    $scope.link.url = '';
  };
  //create new link with addLink()





});
