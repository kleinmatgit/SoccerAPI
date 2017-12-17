'use strict';

var promise = require('bluebird');

var options = {
    // Initialization Options
    promiseLib: promise
};

var pgp = require('pg-promise')(options);
var connectionString = 'postgres://postgres:postgres@localhost:5432/soccer-db';
var db = pgp(connectionString);

var model = function(){
    
    var getAllCompetitions = function getAllCompetitions(){
        return db.any('select * from getCompetitions');
    }

    var getCompetition = function getCompetition(competitionid){
        return db.one('select * from getCompetitions where id=$1', competitionid);
    }

    var getCompetitionTeams = function getCompetitionTeams(competitionid, season){
        if(season){
            return db.any('select * from getTeamsInCompetitionInSeason($1,$2)', [competitionid, season]);    
        }
        return db.any('select * from getTeamsInCompetition($1)', competitionid);
    }
    
    var getCompetitionFixtures = function getCompetitionFixtures(competitionid, season){
        if(season){
            return db.any('select * from getCompetitionFixturesInSeason($1,$2)', [competitionid, season]);    
        }
        return db.any('select * from getCompetitionFixtures($1)', competitionid);
    }

    var getTeam = function getTeam(teamid){
        return db.one('select * from getTeam($1)', teamid);
    }

    var getTeamFixtures = function getTeamFixtures(teamid, season){
        if(season){
            return db.any('select * from getTeamFixturesInSeason($1,$2)', [teamid, season]);    
        }
        return db.any('select * from getTeamFixtures($1)', teamid);
    }

    var getFixture = function getFixture(fixtureid){
        return db.one('select * from fixtures where id=$1', fixtureid);
    }

    var getLeagueTable = function getLeagueTable(competitionid, season){
        if(season){
            return db.any('select * from getLeagueTableInSeason($1,$2)', [competitionid, season]);    
        }
        return db.any('select * from getLeagueTable($1)', competitionid);
    }

    return {
        getAllCompetitions: getAllCompetitions,
        getCompetition: getCompetition,
        getCompetitionTeams: getCompetitionTeams,
        getCompetitionFixtures: getCompetitionFixtures,
        getTeam: getTeam,
        getTeamFixtures: getTeamFixtures,
        getFixture: getFixture,
        getLeagueTable: getLeagueTable
    }
};

module.exports = model;