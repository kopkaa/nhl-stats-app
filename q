[1mdiff --git a/apollo-server/API/Resolvers/Resolvers.js b/apollo-server/API/Resolvers/Resolvers.js[m
[1mindex 4e4f124..ec576e7 100644[m
[1m--- a/apollo-server/API/Resolvers/Resolvers.js[m
[1m+++ b/apollo-server/API/Resolvers/Resolvers.js[m
[36m@@ -4,23 +4,36 @@[m
 /* eslint-disable no-empty-pattern */[m
 /* eslint-disable max-len */[m
 /* eslint-disable-next-line no-return-await */[m
[31m-const validateSeasons = require('../../utils/season.js');[m
[31m-const validateDates = require('../../utils/dates.js');[m
[32m+[m[32mconst validateSeasons = require("../../utils/season.js");[m
[32m+[m[32mconst validateDates = require("../../utils/dates.js");[m
 [m
 const Resolvers = {[m
   Player: {[m
     team: (parent, {}, { dataSources }) => {[m
       if (parent.active === false) return;[m
[31m-      return dataSources.teamAPI.returnTeam(parent.currentTeam.id, parent.season);[m
[32m+[m[32m      return dataSources.teamAPI.returnTeam([m
[32m+[m[32m        parent.currentTeam.id,[m
[32m+[m[32m        parent.season[m
[32m+[m[32m      );[m
     },[m
[31m-    stats: (parent, {}, { dataSources }) => dataSources.playerAPI.returnStats(parent.id, parent.season),[m
[32m+[m[32m    stats: (parent, {}, { dataSources }) =>[m
[32m+[m[32m      dataSources.playerAPI.returnStats(parent.id, parent.season),[m
   },[m
   Schedule: {[m
     games: (parent, {}, { dataSources }) => {[m
[31m-      const games = dataSources.scheduleAPI.returnGames(parent.teamId, parent.date);[m
[32m+[m[32m      const games = dataSources.scheduleAPI.returnGames([m
[32m+[m[32m        parent.teamId,[m
[32m+[m[32m        parent.date[m
[32m+[m[32m      );[m
       const gamesWithTeams = games.map((game) => {[m
[31m-        const awayTeam = dataSources.teamAPI.returnTeam(game.awayTeamId, game.season);[m
[31m-        const homeTeam = dataSources.teamAPI.returnTeam(game.homeTeamId, game.season);[m
[32m+[m[32m        const awayTeam = dataSources.teamAPI.returnTeam([m
[32m+[m[32m          game.awayTeamId,[m
[32m+[m[32m          game.season[m
[32m+[m[32m        );[m
[32m+[m[32m        const homeTeam = dataSources.teamAPI.returnTeam([m
[32m+[m[32m          game.homeTeamId,[m
[32m+[m[32m          game.season[m
[32m+[m[32m        );[m
         game.awayTeam = awayTeam;[m
         game.homeTeam = homeTeam;[m
         return game;[m
[36m@@ -29,20 +42,35 @@[m [mconst Resolvers = {[m
     },[m
   },[m
   Team: {[m
[32m+[m[32m    //TODO prepsat (pomale to je)[m
     players: (parent, {}, { dataSources }) => {[m
[31m-      const players = dataSources.teamAPI.returnRoster(parent.id, parent.season);[m
[32m+[m[32m      const players = dataSources.teamAPI.returnRoster([m
[32m+[m[32m        parent.id,[m
[32m+[m[32m        parent.season[m
[32m+[m[32m      );[m
       return new Promise((resolve, reject) => {[m
         players.then((data) => {[m
[31m-          const promises = data.map(async (player) => await dataSources.playerAPI.returnPlayer(player.person.id, parent.season));[m
[32m+[m[32m          const promises = data.map([m
[32m+[m[32m            async (player) =>[m
[32m+[m[32m              await dataSources.playerAPI.returnPlayer([m
[32m+[m[32m                player.person.id,[m
[32m+[m[32m                parent.season[m
[32m+[m[32m              )[m
[32m+[m[32m          );[m
           resolve(Promise.all(promises));[m
         });[m
       });[m
     },[m
[31m-    standing: (parent, {}, { dataSources }) => dataSources.standingAPI.returnStandings(parent.id, parent.season),[m
[31m-    division: (parent, {}, { dataSources }) => dataSources.divisionAPI.returnDivision(parent.division.id),[m
[31m-    conference: (parent, {}, { dataSources }) => dataSources.conferenceAPI.returnConference(parent.conference.id),[m
[31m-    stats: (parent, {}, { dataSources }) => dataSources.teamAPI.returnStats(parent.id, parent.season),[m
[31m-    statPositions: (parent, {}, { dataSources }) => dataSources.teamAPI.returnStatPositions(parent.id, parent.season),[m
[32m+[m[32m    standing: (parent, {}, { dataSources }) =>[m
[32m+[m[32m      dataSources.standingAPI.returnStandings(parent.id, parent.season),[m
[32m+[m[32m    division: (parent, {}, { dataSources }) =>[m
[32m+[m[32m      dataSources.divisionAPI.returnDivision(parent.division.id),[m
[32m+[m[32m    conference: (parent, {}, { dataSources }) =>[m
[32m+[m[32m      dataSources.conferenceAPI.returnConference(parent.conference.id),[m
[32m+[m[32m    stats: (parent, {}, { dataSources }) =>[m
[32m+[m[32m      dataSources.teamAPI.returnStats(parent.id, parent.season),[m
[32m+[m[32m    statPositions: (parent, {}, { dataSources }) =>[m
[32m+[m[32m      dataSources.teamAPI.returnStatPositions(parent.id, parent.season),[m
   },[m
   Query: {[m
     getPlayer: (_, { id, season }, { dataSources }) => {[m
[36m@@ -57,26 +85,39 @@[m [mconst Resolvers = {[m
     getPlayersByName: (_, { name, season }, { dataSources }) => {[m
       validateSeasons(season);[m
       const teams = dataSources.teamAPI.returnTeams(season);[m
[31m-      const promises = teams.map((team) => dataSources.teamAPI.returnRoster(team.id, season));[m
[32m+[m[32m      const promises = teams.map((team) =>[m
[32m+[m[32m        dataSources.teamAPI.returnRoster(team.id, season)[m
[32m+[m[32m      );[m
       const allPlayers = Promise.all(promises);[m
 [m
[31m-      const playerList = allPlayers.reduce((accumulater, team) => [[m
[31m-        ...accumulater,[m
[31m-        ...team,[m
[31m-      ], []);[m
[32m+[m[32m      const playerList = allPlayers.reduce([m
[32m+[m[32m        (accumulater, team) => [...accumulater, ...team],[m
[32m+[m[32m        [][m
[32m+[m[32m      );[m
 [m
[31m-      const shortRoster = playerList.filter((player) => player.person.fullName.toLowerCase().includes(name.toLowerCase()));[m
[32m+[m[32m      const shortRoster = playerList.filter((player) =>[m
[32m+[m[32m        player.person.fullName.toLowerCase().includes(name.toLowerCase())[m
[32m+[m[32m      );[m
 [m
[31m-      const listPromsies = shortRoster.map((player) => dataSources.playerAPI.returnPlayer(player.person.id, season));[m
[32m+[m[32m      const listPromsies = shortRoster.map((player) =>[m
[32m+[m[32m        dataSources.playerAPI.returnPlayer(player.person.id, season)[m
[32m+[m[32m      );[m
       return Promise.all(listPromsies);[m
     },[m
     getSchedule: (_, { startDate, endDate }, { dataSources }) => {[m
       const scheduleDate = validateDates(startDate, endDate);[m
[31m-      return dataSources.scheduleAPI.returnSchedule(scheduleDate.startDate, scheduleDate.endDate);[m
[32m+[m[32m      return dataSources.scheduleAPI.returnSchedule([m
[32m+[m[32m        scheduleDate.startDate,[m
[32m+[m[32m        scheduleDate.endDate[m
[32m+[m[32m      );[m
     },[m
     getScheduleByTeam: (_, { teamId, startDate, endDate }, { dataSources }) => {[m
       const scheduleDate = validateDates(startDate, endDate);[m
[31m-      return dataSources.scheduleAPI.returnScheduleByTeam(teamId, scheduleDate.startDate, scheduleDate.endDate);[m
[32m+[m[32m      return dataSources.scheduleAPI.returnScheduleByTeam([m
[32m+[m[32m        teamId,[m
[32m+[m[32m        scheduleDate.startDate,[m
[32m+[m[32m        scheduleDate.endDate[m
[32m+[m[32m      );[m
     },[m
     getTeams: (_, { season }, { dataSources }) => {[m
       validateSeasons(season);[m
[36m@@ -90,10 +131,14 @@[m [mconst Resolvers = {[m
       validateSeasons(season);[m
       return dataSources.teamAPI.returnTeamByName(name, season);[m
     },[m
[31m-    getDivisions: (_, {}, { dataSources }) => dataSources.divisionAPI.returnDivisions(),[m
[31m-    getDivision: (_, { id }, { dataSources }) => dataSources.divisionAPI.returnDivision(id),[m
[31m-    getConferences: (_, {}, { dataSources }) => dataSources.conferenceAPI.returnConferences(),[m
[31m-    getConference: (_, { id }, { dataSources }) => dataSources.conferenceAPI.returnConferen