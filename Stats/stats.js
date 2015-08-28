angular.module('dnd')
.controller('StatsController', ['$scope', '$location', 'userService', 'socket',
function ($scope, $location, userService, socket) {

    var players = [];
    var chartsInitialized = false;

    socket.on('updatePlayers', function(data) {
        players = data.players;
        userService.updatePlayers(data);
        console.log('Players updated: ');
        console.log(data);
        //if (!chartsInitialized) {
            drawCharts();
          //  chartsInitialized = true;
        //}
    });


    var init = function() {
        socket.emit('getPlayers');
        console.log(players);
    };
    init();

    var drawCharts = function() {
        $scope.dmgDealtChart = {};
        $scope.dmgTakenChart = {};
        $scope.healingDoneChart = {};
        $scope.hitMissPie0 = {};
        $scope.hitMissPie1 = {};
        $scope.hitMissPie2 = {};
        $scope.hitMissPie3 = {};
        $scope.hitMissPie4 = {};
        //Damage dealt chart -------------------------------------------------------
        $scope.dmgDealtChart.data = {"cols": [
            {id: "t", label: "Player", type: "string"},
            {id: "s", label: "Damage dealt", type: "number"}
        ], "rows": [
            {c: [
                {v: players[0].name},
                {v: players[0].dmgDealt},
            ]},
            {c: [
                {v: players[1].name},
                {v: players[1].dmgDealt},
            ]},
            {c: [
                {v: players[2].name},
                {v: players[2].dmgDealt},
            ]},
            {c: [
                {v: players[3].name},
                {v: players[3].dmgDealt},
            ]},
            {c: [
                {v: players[4].name},
                {v: players[4].dmgDealt},
            ]},
        ]};

        // $routeParams.chartType == BarChart or PieChart or ColumnChart...
        $scope.dmgDealtChart.type = "BarChart";
        $scope.dmgDealtChart.options = {
            'title': 'Damage Dealt',
            'legend': {position: 'none'},
            'animation': {duration: 1, easing: 'out'}
        };

        // -------------------------------------------------------------------------
        //Damage Taken chart -------------------------------------------------------
        $scope.dmgTakenChart.data = {"cols": [
            {id: "t", label: "Player", type: "string"},
            {id: "s", label: "Damage Taken", type: "number"}
        ], "rows": [
            {c: [
                {v: players[0].name},
                {v: players[0].dmgTaken},
            ]},
            {c: [
                {v: players[1].name},
                {v: players[1].dmgTaken},
            ]},
            {c: [
                {v: players[2].name},
                {v: players[2].dmgTaken},
            ]},
            {c: [
                {v: players[3].name},
                {v: players[3].dmgTaken},
            ]},
            {c: [
                {v: players[4].name},
                {v: players[4].dmgTaken},
            ]},
        ]};


        // $routeParams.chartType == BarChart or PieChart or ColumnChart...
        $scope.dmgTakenChart.type = "BarChart";
        $scope.dmgTakenChart.options = {
            'title': 'Damage Taken',
            'legend': {position: 'none'}
        };
        // -------------------------------------------------------------------------
        //Healing done chart -------------------------------------------------------
        $scope.healingDoneChart.data = {"cols": [
            {id: "t", label: "Player", type: "string"},
            {id: "s", label: "Healing done", type: "number"}
        ], "rows": [
            {c: [
                {v: players[0].name},
                {v: players[0].healingDone},
            ]},
            {c: [
                {v: players[1].name},
                {v: players[1].healingDone},
            ]},
            {c: [
                {v: players[2].name},
                {v: players[2].healingDone},
            ]},
            {c: [
                {v: players[3].name},
                {v: players[3].healingDone},
            ]},
            {c: [
                {v: players[4].name},
                {v: players[4].healingDone},
            ]},
        ]};


        // $routeParams.chartType == BarChart or PieChart or ColumnChart...
        $scope.healingDoneChart.type = "BarChart";
        $scope.healingDoneChart.options = {
            'title': 'Healing done',
            'legend': {position: 'none'}
        };
        // -------------------------------------------------------------------------
            //Hit miss chart 0-------------------------------------------------------
            $scope.hitMissPie0.data = {"cols": [
                {id: "t", label: "Player", type: "string"},
                {id: "s", label: "Hits and Misses", type: "number"}
            ], "rows": [
                {c: [
                    {v: players[0].name},
                    {v: players[0].hit},
                ]},
                {c: [
                    {v: players[0].name},
                    {v: players[0].miss},
                ]}
            ]};


            // $routeParams.chartType == BarChart or PieChart or ColumnChart...
            $scope.hitMissPie0.type = "PieChart";
            $scope.hitMissPie0.options = {
                'legend': {position: 'none'},
                'pieSliceText': 'percentage',
                'width': 200,
                'height': 200
            };
        // -------------------------------------------------------------------------
         //Hit miss chart 1-------------------------------------------------------
            $scope.hitMissPie1.data = {"cols": [
                {id: "t", label: "Player", type: "string"},
                {id: "s", label: "Hits and Misses", type: "number"}
            ], "rows": [
                {c: [
                    {v: players[1].name},
                    {v: players[1].hit},
                ]},
                {c: [
                    {v: players[1].name},
                    {v: players[1].miss},
                ]}
            ]};


            // $routeParams.chartType == BarChart or PieChart or ColumnChart...
            $scope.hitMissPie1.type = "PieChart";
            $scope.hitMissPie1.options = {
                'legend': {position: 'none'},
                'pieSliceText': 'percentage',
                'width': 200,
                'height': 200
            };
        // -------------------------------------------------------------------------
         //Hit miss chart 2-------------------------------------------------------
            $scope.hitMissPie2.data = {"cols": [
                {id: "t", label: "Player", type: "string"},
                {id: "s", label: "Hits and Misses", type: "number"}
            ], "rows": [
                {c: [
                    {v: players[2].name},
                    {v: players[2].hit},
                ]},
                {c: [
                    {v: players[2].name},
                    {v: players[2].miss},
                ]}
            ]};


            // $routeParams.chartType == BarChart or PieChart or ColumnChart...
            $scope.hitMissPie2.type = "PieChart";
            $scope.hitMissPie2.options = {
                'legend': {position: 'none'},
                'pieSliceText': 'percentage',
                'width': 200,
                'height': 200
            };
        // -------------------------------------------------------------------------
         //Hit miss chart 3-------------------------------------------------------
            $scope.hitMissPie3.data = {"cols": [
                {id: "t", label: "Player", type: "string"},
                {id: "s", label: "Hits and Misses", type: "number"}
            ], "rows": [
                {c: [
                    {v: players[3].name},
                    {v: players[3].hit},
                ]},
                {c: [
                    {v: players[3].name},
                    {v: players[3].miss},
                ]}
            ]};


            // $routeParams.chartType == BarChart or PieChart or ColumnChart...
            $scope.hitMissPie3.type = "PieChart";
            $scope.hitMissPie3.options = {
                'legend': {position: 'none'},
                'pieSliceText': 'percentage',
                'width': 200,
                'height': 200
            };
        // -------------------------------------------------------------------------
         //Hit miss chart 4-------------------------------------------------------
            $scope.hitMissPie4.data = {"cols": [
                {id: "t", label: "Player", type: "string"},
                {id: "s", label: "Hits and Misses", type: "number"}
            ], "rows": [
                {c: [
                    {v: players[4].name},
                    {v: players[4].hit},
                ]},
                {c: [
                    {v: players[4].name},
                    {v: players[4].miss},
                ]}
            ]};


            // $routeParams.chartType == BarChart or PieChart or ColumnChart...
            $scope.hitMissPie4.type = "PieChart";
            $scope.hitMissPie4.options = {
                'legend': {position: 'none'},
                'pieSliceText': 'percentage',
                'width': 200,
                'height': 200
            };
        // -------------------------------------------------------------------------
        };


    //initializeCharts();
}]);
