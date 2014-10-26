angular.module('dearDiary.homeService', []).service('homeService', ['$http', function($http){
  this.getUsers = function(){
    return $http.get('http://localhost:3000/api/users');
  };

  this.getTest = function(){
    return "Test";
  };
}]);
