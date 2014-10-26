angular.module('dearDiary.diaryService', []).service('diaryService', ['$http', function($http){

  this.getAllProjects = function(){
    return $http.get('http://localhost:3000/api/projects');
  };

  this.getTest = function(){
    return "Test";
  };

}]);
