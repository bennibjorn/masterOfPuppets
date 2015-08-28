angular.module('dnd', ['ngRoute', 'googlechart', 'ui.bootstrap']);

angular.module('dnd').config(
    function ($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'Stats/stats.html',
                controller: 'StatsController'
            })
            .when('/stats', {
                templateUrl: 'Stats/stats.html',
                controller: 'StatsController'
            })
            .when('/control', {
                templateUrl: 'ControlPanel/control.html',
                controller: 'ControlController'
            })
        // Combat
            .when('/combat', {
                templateUrl: 'Combat/combat.html',
                controller: 'CombatController'
            })
            .otherwise({
                redirectTo: '/'
            });
    }
).value('googleChartApiConfig', {
            version: '1',
            optionalSettings: {
                packages: ['corechart', 'gauge'],
                language: 'en'
            }});
