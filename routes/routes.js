'use strict';

var express = require('express'),
    controller = require('../controllers/controllers');

var routes = function(){
    
    // Our router
    var soccerRouter = express.Router();
    
    // Get verbs
    soccerRouter.get('/competitions', controller.getAllCompetitions);
    soccerRouter.get('/competitions/:id', controller.getCompetition);
    soccerRouter.get('/competitions/:id/teams', controller.getCompetitionTeams);
    soccerRouter.get('/competitions/:id/fixtures', controller.getCompetitionFixtures);
    soccerRouter.get('/teams/:id', controller.getTeam);
    soccerRouter.get('/teams/:id/fixtures', controller.getTeamFixtures);
    soccerRouter.get('/fixtures/:id', controller.getFixture);
    soccerRouter.get('/competitions/:id/leaguetable', controller.getLeagueTable);

    /* to do:

    competition table:
    

    season filter:
    soccerRouter.get('/competitions/:id/teams?season=$1', controller.getCompetitionTeams);
    soccerRouter.get('/competitions/:id/fixtures?season=$1', controller.getCompetitionFixtures);
    soccerRouter.get('/teams/:id/fixtures?season=$1', controller.getTeamFixtures);
    soccerRouter.get('/competitions/:id/leaguetable?season=$1', controller.getCompetitionTable);

    */

    return soccerRouter;
};

module.exports = routes;

