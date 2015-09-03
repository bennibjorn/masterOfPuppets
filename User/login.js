angular.module('dnd')
.controller('LoginController', ['$scope', '$location', 'userService', 'socket',
function ($scope, $location, userService, socket) {

    $scope.username = "";
    $scope.password = "";

    $scope.login = function() {
        socket.emit('login', {user: $scope.username, pass: $scope.password});
    };

    $scope.createNewUser = function(username, password) {
        socket.emit('newUser', {user: username, pass:password});
    };

    var init = function() {

    };
    init();
}]);
