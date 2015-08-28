angular.module('dnd')
.controller('ControlController', ['$scope', '$location', 'userService', 'socket',
function ($scope, $location, userService, socket) {

    $scope.pcs = [];
    $scope.enemies = [];
    $scope.pHeal = 0;
    $scope.pDmgDealt = 0;
    $scope.pDmgTaken = 0;
    $scope.name = '';
    $scope.init = 0;
    $scope.xp = 0;
    $scope.ac = 0;
    $scope.hp = 0;
    $scope.eDmg = 0;
    $scope.numEnemies = 0;
    $scope.sessionXP = 0;

    $scope.playerHit = function(name, op) {
        // test
        // enable vibration support
        //navigator.vibrate(200);

        if (op === 'dec') {
            // totalScore - 1
            getPlayerByName(name).hit--;
        } else {
            // totalScore + 1
            getPlayerByName(name).hit++;
        }
        updateUser();
        writePlayer(name);
    };
    $scope.playerMiss = function(name, op) {
        if (op === 'dec') {
            // totalScore - 1
            getPlayerByName(name).miss--;
        } else {
            // totalScore + 1
            getPlayerByName(name).miss++;
        }
        updateUser();
        writePlayer(name);
    };
    $scope.playerDmgDealt = function(name, op, num) {
        var p = getPlayerByName(name);
        if (op === 'dec') {
            // totalScore - num
            p.dmgDealt = p.dmgDealt - num;
        } else {
            // totalScore + num
            p.dmgDealt = p.dmgDealt + num;
        }
        updateUser();
        writePlayer(name);
    };
    $scope.playerDmgTaken = function(name, op, num) {
        var p = getPlayerByName(name);
        if (op === 'dec') {
            // totalScore - num
            p.dmgTaken = p.dmgTaken - num;
        } else {
            // totalScore + num
            p.dmgTaken = p.dmgTaken + num;
        }
        updateUser();
        writePlayer(name);
    };
    $scope.playerHeal = function(name, op, num) {
        var p = getPlayerByName(name);
        if (op === 'dec') {
            // totalScore - num
            p.healingDone = p.healingDone - num;
        } else {
            // totalScore + num
            p.healingDone = p.healingDone + num;
        }
        updateUser();
        writePlayer(name);
    };

    $scope.addEnemy = function(name, init, ac, hp, xp) {
        var enemy = {};

        if (name === '' || init === 0) {
            return;
        } else {
            enemy = {
                name: name,
                AC: ac,
                HP: hp,
                XP: xp,
                initiative: init,
            };
            $scope.enemies.push(enemy);
        }
        $scope.numEnemies++;
        console.log($scope.enemies);
    };

    $scope.enemyDamage = function(name, dmg) {
        var i = getEnemyIndexByName(name);
        $scope.enemies[i].HP = $scope.enemies[i].HP - dmg;
        if ($scope.enemies[i].HP <= 0) {
            // increase session xp
            $scope.sessionXP = $scope.sessionXP + $scope.enemies[i].XP;
            // enemy dead, remove
            $scope.enemies.splice(i, 1);
        }
        if ($scope.enemies.length === 0) {
            $scope.numEnemies = 0;
        }
        $scope.eDmg = 0;
    };
    socket.on('updatePlayers', function(data) {
        $scope.pcs = data.players;
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
        socket.emit('getPlayers');
        //get nickname
        //userService.addPlayers();
        //$scope.pcs = userService.getPcs();
    };
    init();


}]);
