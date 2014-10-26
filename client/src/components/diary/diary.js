'use strict';

angular.module('dearDiary.diary', [
  'dearDiary.diaryService'
])

.controller('DiaryController', ['$scope', 'diaryService', function($scope, diaryService) {
  var projects = diaryService.getAllProjects();
  
  projects.success(function(data){
    $scope.projects = data;
  });
}]);
