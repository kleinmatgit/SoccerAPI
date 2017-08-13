var helper = function(){

    var injectLinksInCompetition = function injectLinksInCompetition(element, req) {
        var apiPath = 'http://' + req.headers.host + '/api/competitions/';
        element.links = {};
        element.links.self = apiPath + element.id;
        element.links.teams = apiPath + element.id + '/teams';
        element.links.fixtures = apiPath + element.id + '/fixtures';
        element.links.table = apiPath + element.id + '/table';
        return element;
    }

    var injectLinksInTeam = function injectLinksInTeam(element, req) {
        var apiPath = 'http://' + req.headers.host + '/api';
        element.links = {};
        element.links.self = apiPath + '/teams/' + element.id;
        element.links.fixtures = apiPath + '/teams/' + element.id + '/fixtures';
        element.links.players = apiPath + '/teams/' + element.id + '/players';
        return element;
    }

    var createLinksInCompetitionTeams = function createLinksInCompetitionTeams(req, competitionid) {
        var apiPath = 'http://' + req.headers.host + '/api';
        var linksObj = {};
        linksObj.self = apiPath + '/competitions/' + competitionid + '/teams';
        linksObj.competition = apiPath + '/competitions/' + competitionid;
        return linksObj;
    }

    var injectLinksInFixture = function injectLinksInFixture(element, req, competitionid, hometeamid, awayteamid) {
        var apiPath = 'http://' + req.headers.host + '/api';
        element.links = {};
        element.links.self = apiPath + '/fixtures/' + element.id;
        element.links.competition = apiPath + '/competitions/' + competitionid;
        element.links.hometeam = apiPath + '/teams/' + hometeamid;
        element.links.awayteam = apiPath + '/teams/' + awayteamid;
        return element;
    }

    var createLinksInCompetitionFixtures = function createLinksInCompetitionFixtures(req, competitionid) {
        var apiPath = 'http://' + req.headers.host + '/api';
        var linksObj = {};
        linksObj.self = apiPath + '/competitions/' + competitionid + '/fixtures';
        linksObj.competition = apiPath + '/competitions/' + competitionid;
        return linksObj;
    }

    var createLinksInTeamFixtures = function createLinksInTeamFixtures(req, teamid) {
        var apiPath = 'http://' + req.headers.host + '/api';
        var linksObj = {};
        linksObj.self = apiPath + '/teams/' + teamid + '/fixtures';
        linksObj.team = apiPath + '/teams/' + teamid;
        return linksObj;
    }

    return {
        injectLinksInCompetition: injectLinksInCompetition,
        injectLinksInTeam: injectLinksInTeam,
        createLinksInCompetitionTeams: createLinksInCompetitionTeams,
        injectLinksInFixture: injectLinksInFixture,
        createLinksInCompetitionFixtures: createLinksInCompetitionFixtures,
        createLinksInTeamFixtures: createLinksInTeamFixtures
    }
};

module.exports = helper;