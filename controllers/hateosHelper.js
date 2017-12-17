'use strict';

var helper = function(){

    var injectLinksInCompetition = function injectLinksInCompetition(element, req, season) {
        var apiPath = 'http://' + req.headers.host + '/api/competitions/';
        var seasonFilter = '';
        if(season){
            seasonFilter = '?season=' + season
        }
        element.links = {};
        element.links.self = apiPath + element.id + seasonFilter;
        element.links.teams = apiPath + element.id + '/teams' + seasonFilter;
        element.links.fixtures = apiPath + element.id + '/fixtures' + seasonFilter;
        element.links.table = apiPath + element.id + '/leaguetable' + seasonFilter;
        return element;
    }

    var injectLinksInTeam = function injectLinksInTeam(element, req, season) {
        var apiPath = 'http://' + req.headers.host + '/api';
        var seasonFilter = '';
        if(season){
            seasonFilter = '?season=' + season
        }
        element.links = {};
        element.links.self = apiPath + '/teams/' + element.id;
        element.links.fixtures = apiPath + '/teams/' + element.id + '/fixtures' + seasonFilter;
        /* element.links.players = apiPath + '/teams/' + element.id + '/players'; */
        return element;
    }

    var createLinksInCompetitionTeams = function createLinksInCompetitionTeams(req, competitionid, season) {
        var apiPath = 'http://' + req.headers.host + '/api';
        var linksObj = {};
        var seasonFilter = '';
        if(season){
            seasonFilter = '?season=' + season
        }
        linksObj.self = apiPath + '/competitions/' + competitionid + '/teams' + seasonFilter;
        linksObj.competition = apiPath + '/competitions/' + competitionid + seasonFilter;
        return linksObj;
    }

    var injectLinksInFixture = function injectLinksInFixture(element, req, competitionid, hometeamid, awayteamid, season) {
        var apiPath = 'http://' + req.headers.host + '/api';
        var seasonFilter = '';
        if(season){
            seasonFilter = '?season=' + season
        }
        element.links = {};
        element.links.self = apiPath + '/fixtures/' + element.id;
        element.links.competition = apiPath + '/competitions/' + competitionid + seasonFilter;
        element.links.hometeam = apiPath + '/teams/' + hometeamid;
        element.links.awayteam = apiPath + '/teams/' + awayteamid;
        return element;
    }

    var createLinksInCompetitionFixtures = function createLinksInCompetitionFixtures(req, competitionid, season) {
        var apiPath = 'http://' + req.headers.host + '/api';
        var linksObj = {};
        var seasonFilter = '';
        if(season){
            seasonFilter = '?season=' + season
        }
        linksObj.self = apiPath + '/competitions/' + competitionid + '/fixtures' + seasonFilter;
        linksObj.competition = apiPath + '/competitions/' + competitionid + seasonFilter;
        return linksObj;
    }

    var createLinksInTeamFixtures = function createLinksInTeamFixtures(req, teamid, season) {
        var apiPath = 'http://' + req.headers.host + '/api';
        var linksObj = {};
        var seasonFilter = '';
        if(season){
            seasonFilter = '?season=' + season
        }
        linksObj.self = apiPath + '/teams/' + teamid + '/fixtures' + seasonFilter;
        linksObj.team = apiPath + '/teams/' + teamid;
        return linksObj;
    }

    var createLinksInLeagueTable = function createLinksInLeagueTable(req, competitionid, season) {
        var apiPath = 'http://' + req.headers.host + '/api';
        var linksObj = {};
        var seasonFilter = '';
        if(season){
            seasonFilter = '?season=' + season
        }
        linksObj.self = apiPath + '/competitions/' + competitionid + '/leaguetable' + seasonFilter;
        linksObj.competition = apiPath + '/competitions/' + competitionid + seasonFilter;
        return linksObj;
    }

    var injectLinksInLeagueTableRow = function injectLinksInLeagueTableRow(element, req, teamid) {
        var apiPath = 'http://' + req.headers.host + '/api';
        element.links = {};
        element.links.team = apiPath + '/teams/' + teamid;
        return element;
    }

    return {
        injectLinksInCompetition: injectLinksInCompetition,
        injectLinksInTeam: injectLinksInTeam,
        createLinksInCompetitionTeams: createLinksInCompetitionTeams,
        injectLinksInFixture: injectLinksInFixture,
        createLinksInCompetitionFixtures: createLinksInCompetitionFixtures,
        createLinksInTeamFixtures: createLinksInTeamFixtures,
        createLinksInLeagueTable: createLinksInLeagueTable,
        injectLinksInLeagueTableRow: injectLinksInLeagueTableRow
    }
};

module.exports = helper;