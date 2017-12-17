'use strict';

var model = require('../models/models')();
var helper = require('./hateosHelper')();

// add query functions

function getAllCompetitions(req, res, next) {
    model.getAllCompetitions()
        .then(function (data) {
            
            var returnElements = [];
            data.forEach(function(element, index, array){
                returnElements.push(helper.injectLinksInCompetition(element, req));
            });
            
            res.status(200)
            .json(returnElements);
        })
        .catch(function (err) {
            return next(err);
        });
}

function getCompetition(req, res, next) {
    var competitionid = parseInt(req.params.id);
    var season = req.query.season;
    model.getCompetition(competitionid)
        .then(function (data) {
            
            res.status(200)
            .json(helper.injectLinksInCompetition(data, req, season));
        })
        .catch(function (err) {
            return next(err);
        });
}

/* example with filter */
function getCompetitionTeams(req, res, next) {
    var competitionid = parseInt(req.params.id);
    var season = req.query.season;
    model.getCompetitionTeams(competitionid, season)
        .then(function (data) {
            
            var returnElements = {};
            returnElements._links = helper.createLinksInCompetitionTeams(req, competitionid, season);
            
            var teams = [];
            data.forEach(function(element, index, array){
                teams.push(helper.injectLinksInTeam(element, req, season));
            });
            
            returnElements.count = teams.length;
            returnElements.teams = teams;

            res.status(200)
            .json(returnElements);
        })
        .catch(function (err) {
            return next(err);
        });
}

function getCompetitionFixtures(req, res, next) {
    var competitionid = parseInt(req.params.id);
    var season = req.query.season;
    model.getCompetitionFixtures(competitionid, season)
        .then(function (data) {
            
            var returnElements = {};
            returnElements.links = helper.createLinksInCompetitionFixtures(req, competitionid, season);
            
            var fixtures = [];
            data.forEach(function(element, index, array){
                fixtures.push(helper.injectLinksInFixture(element, req, competitionid, element.hometeamid, element.awayteamid, season));
            });
            
            returnElements.count = fixtures.length;
            returnElements.fixtures = fixtures;

            res.status(200)
            .json(returnElements);
        })
        .catch(function (err) {
            return next(err);
        });
}

function getTeam(req, res, next) {
    var teamid = parseInt(req.params.id);
    model.getTeam(teamid)
        .then(function (data) {
            
            res.status(200)
            .json(helper.injectLinksInTeam(data, req));
        })
        .catch(function (err) {
            return next(err);
        });
}

function getTeamFixtures(req, res, next) {
    var teamid = parseInt(req.params.id);
    var season = req.query.season;
    model.getTeamFixtures(teamid, season)
        .then(function (data) {
            
            var returnElements = {};
            returnElements.links = helper.createLinksInTeamFixtures(req, teamid, season);
            
            var fixtures = [];
            data.forEach(function(element, index, array){
                fixtures.push(helper.injectLinksInFixture(element, req, element.competitionid, element.hometeamid, element.awayteamid, season));
            });
            
            returnElements.count = fixtures.length;
            returnElements.fixtures = fixtures;

            res.status(200)
            .json(returnElements);
        })
        .catch(function (err) {
            return next(err);
        });
}

function getFixture(req, res, next) {
    var fixtureid = parseInt(req.params.id);
    model.getFixture(fixtureid)
        .then(function (data) {
            
            res.status(200)
            .json(helper.injectLinksInFixture(data, req, data.competitionid, data.hometeamid, data.awayteamid));
        })
        .catch(function (err) {
            return next(err);
        });
}

function getLeagueTable(req, res, next) {
    var competitionid = parseInt(req.params.id);
    var season = req.query.season;
    model.getLeagueTable(competitionid, season)
        .then(function (data) {
            
            var returnElements = {};
            returnElements.links = helper.createLinksInLeagueTable(req, competitionid, season);
            
            var rows = [];
            data.forEach(function(element, index, array){
                rows.push(helper.injectLinksInLeagueTableRow(element, req, element.teamid));
            });
            
            returnElements.count = rows.length;
            returnElements.standing = rows;

            res.status(200)
            .json(returnElements);
        })
        .catch(function (err) {
            return next(err);
        });
}

module.exports = {
  getAllCompetitions: getAllCompetitions,
  getCompetition: getCompetition,
  getCompetitionTeams: getCompetitionTeams,
  getCompetitionFixtures: getCompetitionFixtures,
  getTeam: getTeam,
  getTeamFixtures: getTeamFixtures,
  getFixture: getFixture,
  getLeagueTable: getLeagueTable
};