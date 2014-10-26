'use strict';

// Declare app level module which depends on views, and components
angular.module('dearDiary', [
    'ngRoute',
    'dearDiary.home',
    'dearDiary.about',
    'dearDiary.login',
    'dearDiary.diary',
    'dearDiary.homeService'
])
.config(['$routeProvider', function($routeProvider) {
    $routeProvider
    .when('/home', {
        templateUrl: 'components/home/home.html',
        controller: 'HomeController'
    })
    .when('/about', {
        templateUrl: 'components/about/about.html',
        controller: 'AboutController'
    })
    .when('/login', {
        templateUrl: 'components/login/login.html',
        controller: 'LoginController'
    })
    .when('/diary', {
        templateUrl: 'components/diary/diary.html',
        controller: 'DiaryController'
    })
    .otherwise({redirectTo: '/home'});
}]);
