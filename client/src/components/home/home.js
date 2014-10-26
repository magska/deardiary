'use strict';

angular.module('dearDiary.home', [])

.controller('HomeController', ['$scope', 'homeService', function($scope, homeService) {
  var users = homeService.getUsers();
  users.success(function(data){
    $scope.users = data;
  });
}]);
