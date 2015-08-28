angular.module('dnd')
  .factory('chartService', function() {
    var players = [];
    var healingDoneChart;
    var dmgDealtChart;
    var dmgTakenChart;

    //Damage dealt chart -------------------------------------------------------
    dmgDealtChart.data = {"cols": [
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
    dmgDealtChart.type = BarChart;
    dmgDealtChart.options = {
        'title': 'Damage Dealt'
    };
    // -------------------------------------------------------------------------
    //Damage Taken chart -------------------------------------------------------
    dmgTakenChart.data = {"cols": [
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
    dmgTakenChart.type = BarChart;
    dmgTakenChart.options = {
        'title': 'Damage Taken'
    };
    // -------------------------------------------------------------------------
    //Healing done chart -------------------------------------------------------
    healingDoneChart.data = {"cols": [
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
    healingDoneChart.type = BarChart;
    healingDoneChart.options = {
        'title': 'Healing done'
    };
    // -------------------------------------------------------------------------

    return {
        // nickname functions
        getPcs : function() {
            return players;
        },
        updateData : function(data) {
            players = data;
        }
    };
});
