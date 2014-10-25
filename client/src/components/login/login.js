'use strict';

angular.module('mmApp.login', [])

.controller('LoginController', ['$scope', function($scope) {

}])

.controller('AuthController', ['$scope', '$rootScope', function($scope, $rootScope, AUTH_EVENTS, AuthService){
    $scope.login = function (user) {
        
    }
}]);
