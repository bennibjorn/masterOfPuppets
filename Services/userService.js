angular.module('dnd')
  .factory('userService', function() {
    var players = [];
    var enemies = [];
    var user = [];

    return {
        // nickname functions
        getPcs : function() {
            return players;
        },
        updatePlayers : function(data) {
            players = data;
        },
        getEnemies : function() {
            return enemies;
        },
        setEnemies : function(e) {
            enemies = e;
        },
        getUserObj : function() {
            return user;
        },
        setUserObj : function(u) {
            user = u;
        }
    };
});
