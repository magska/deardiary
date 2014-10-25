'use strict';

angular.module('mmApp.home', [])

.controller('HomeController', ['$scope', 'userService', function($scope, userService) {
  var users = userService.getUsers();
  console.log(users);
  users.success(function(data){
    $scope.users = data;
  });
}]);
