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

    return soccerRouter;
};

module.exports = routes;

