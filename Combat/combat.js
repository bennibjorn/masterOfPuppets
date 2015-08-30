angular.module('dnd')
.controller('CombatController', ['$scope', '$location', 'userService', 'socket',
function ($scope, $location, userService, socket) {

    $scope.combatants = [];
    
    
    
    socket.on('updatePlayers', function(data) {
        $scope.players = data.players;
    });

    var getPlayerByName = function(n) {
        var i = 0;
        for (i = 0; i < $scope.pcs.length; i++) {
            if ($scope.pcs[i].name == n) {
                return $scope.pcs[i];
            }
        }
    };
    var getEnemyIndexByName = function(n) {
        var i = 0;
        for (i = 0; i < $scope.enemies.length; i++) {
            if ($scope.enemies[i].name == n) {
                return i;
            }
        }
    };
    var writePlayer = function(name) {
        socket.emit('writePlayer', {name: name});
    };
    var updateUser = function() {
        // send socket emit to server to update users
        socket.emit('updatePlayerStat', {players: $scope.pcs});
    };
    var init = function() {
        //socket.emit('getPlayers');
        //get nickname
        //userService.addPlayers();
        //$scope.pcs = userService.getPcs();
    };
    init();


}]);
