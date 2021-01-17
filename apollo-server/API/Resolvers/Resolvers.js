/* eslint-disable no-empty-pattern */
/* eslint-disable no-return-await */
/* eslint-disable max-len */
const validateSeasons = require('../../utils/season.js');
const validateDates = require('../../utils/dates.js');

const Resolvers = {
  Player: {
    team: async (parent, {}, { dataSources }) => {
      if (parent.active === false) return;
      return await dataSources.teamAPI.returnTeam(parent.currentTeam.id, parent.season);
    },
  },
  Schedule: {
    games: async (parent, {}, { dataSources }) => {
      const games = await dataSources.scheduleAPI.returnGames(parent.teamId, parent.date);
      const gamesWithTeams = games.map(async (game) => {
        const awayTeam = await dataSources.teamAPI.returnTeam(game.awayTeamId, game.season);
        const homeTeam = await dataSources.teamAPI.returnTeam(game.homeTeamId, game.season);
        game.awayTeam = awayTeam;
        game.homeTeam = homeTeam;
        return game;
      });
      return gamesWithTeams;
    },
  },
  Team: {
    players: async (parent, {}, { dataSources }) => {
      const players = await dataSources.teamAPI.returnRoster(parent.id, parent.season);
      const promises = players.map(async (player) => await dataSources.playerAPI.returnPlayer(player.person.id));
      return Promise.all(promises);
    },
    standing: async (parent, {}, { dataSources }) => await dataSources.standingAPI.returnStandings(parent.season),
    division: async (parent, {}, { dataSources }) => await dataSources.divisionAPI.returnDivision(parent.division.id),
    conference: async (parent, {}, { dataSources }) => await dataSources.conferenceAPI.returnConference(parent.conference.id),
    stats: async (parent, {}, { dataSources }) => await dataSources.teamAPI.returnStats(parent.id, parent.season),
    statPositions: async (parent, {}, { dataSources }) => await dataSources.teamAPI.returnStatPositions(parent.id, parent.season),
  },
  Query: {
    getPlayer: async (_, { id, season }, { dataSources }) => {
      validateSeasons(season);
      return await dataSources.playerAPI.returnPlayer(id, season);
    },
    getPlayersByName: async (_, { name, season }, { dataSources }) => {
      validateSeasons(season);
      const teams = await dataSources.teamAPI.returnTeams(season);
      const promises = teams.map(async (team) => await dataSources.teamAPI.returnRoster(team.id, season));
      const allPlayers = await Promise.all(promises);

      const playerList = allPlayers.reduce((accumulater, team) => [
        ...accumulater,
        ...team,
      ], []);

      const shortRoster = playerList.filter((player) => player.person.fullName.toLowerCase().includes(name.toLowerCase()));

      const listPromsies = shortRoster.map(async (player) => await dataSources.playerAPI.returnPlayer(player.person.id, season));
      return await Promise.all(listPromsies);
    },
    getSchedule: async (_, { startDate, endDate }, { dataSources }) => {
      const scheduleDate = validateDates(startDate, endDate);
      return await dataSources.scheduleAPI.returnSchedule(scheduleDate.startDate, scheduleDate.endDate);
    },
    getScheduleByTeam: async (_, { teamId, startDate, endDate }, { dataSources }) => {
      const scheduleDate = validateDates(startDate, endDate);
      return await dataSources.scheduleAPI.returnScheduleByTeam(teamId, scheduleDate.startDate, scheduleDate.endDate);
    },
    getTeams: async (_, { season }, { dataSources }) => {
      validateSeasons(season);
      return await dataSources.teamAPI.returnTeams(season);
    },
    getTeam: async (_, { id, season }, { dataSources }) => {
      validateSeasons(season);
      return await dataSources.teamAPI.returnTeam(id, season);
    },
    getTeamByName: async (_, { name, season }, { dataSources }) => {
      validateSeasons(season);
      return await dataSources.teamAPI.returnTeamByName(name, season);
    },
    getDivisions: async (_, {}, { dataSources }) => await dataSources.divisionAPI.returnDivisions(),
    getDivision: async (_, { id }, { dataSources }) => await dataSources.divisionAPI.returnDivision(id),
    getConferences: async (_, {}, { dataSources }) => await dataSources.conferenceAPI.returnConferences(),
    getConference: async (_, { id }, { dataSources }) => await dataSources.conferenceAPI.returnConference(id),
  },
};

module.exports = Resolvers;
