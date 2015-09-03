angular.module('dnd')
.controller('ProfileController', ['$scope', '$location', 'userService', 'socket',
function ($scope, $location, userService, socket) {

    $scope.user = [];



    socket.on('updatePlayers', function(data) {
        $scope.players = data.players;
    });

    var writePlayer = function(name) {
        socket.emit('writePlayer', {name: name});
    };
    var updateUser = function() {
        // send socket emit to server to update users
        socket.emit('updatePlayerStat', {players: $scope.pcs});
    };
    var init = function() {
        $scope.user = userService.getUserObj();
    };
    init();


}]);
