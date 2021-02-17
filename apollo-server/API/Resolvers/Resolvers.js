/* eslint-disable no-empty-pattern */
/* eslint-disable no-return- */
/* eslint-disable max-len */
const validateSeasons = require('../../utils/season.js');
const validateDates = require('../../utils/dates.js');

const Resolvers = {
  Player: {
    team: (parent, {}, { dataSources }) => {
      if (parent.active === false) return;
      return dataSources.teamAPI.returnTeam(parent.currentTeam.id, parent.season);
    },
  },
  Schedule: {
    games: (parent, {}, { dataSources }) => {
      const games = dataSources.scheduleAPI.returnGames(parent.teamId, parent.date);
      const gamesWithTeams = games.map((game) => {
        const awayTeam = dataSources.teamAPI.returnTeam(game.awayTeamId, game.season);
        const homeTeam = dataSources.teamAPI.returnTeam(game.homeTeamId, game.season);
        game.awayTeam = awayTeam;
        game.homeTeam = homeTeam;
        return game;
      });
      return gamesWithTeams;
    },
  },
  Team: {
    players: (parent, {}, { dataSources }) => {
      const players = dataSources.teamAPI.returnRoster(parent.id, parent.season);
      const promises = players.map((player) => dataSources.playerAPI.returnPlayer(player.person.id));
      return Promise.all(promises);
    },
    standing: (parent, {}, { dataSources }) => dataSources.standingAPI.returnStandings(parent.id, parent.season),
    division: (parent, {}, { dataSources }) => dataSources.divisionAPI.returnDivision(parent.division.id),
    conference: (parent, {}, { dataSources }) => dataSources.conferenceAPI.returnConference(parent.conference.id),
    stats: (parent, {}, { dataSources }) => dataSources.teamAPI.returnStats(parent.id, parent.season),
    statPositions: (parent, {}, { dataSources }) => dataSources.teamAPI.returnStatPositions(parent.id, parent.season),
  },
  Query: {
    getPlayer: (_, { id, season }, { dataSources }) => {
      validateSeasons(season);
      return dataSources.playerAPI.returnPlayer(id, season);
    },
    getPlayersByName: (_, { name, season }, { dataSources }) => {
      validateSeasons(season);
      const teams = dataSources.teamAPI.returnTeams(season);
      const promises = teams.map((team) => dataSources.teamAPI.returnRoster(team.id, season));
      const allPlayers = Promise.all(promises);

      const playerList = allPlayers.reduce((accumulater, team) => [
        ...accumulater,
        ...team,
      ], []);

      const shortRoster = playerList.filter((player) => player.person.fullName.toLowerCase().includes(name.toLowerCase()));

      const listPromsies = shortRoster.map((player) => dataSources.playerAPI.returnPlayer(player.person.id, season));
      return Promise.all(listPromsies);
    },
    getSchedule: (_, { startDate, endDate }, { dataSources }) => {
      const scheduleDate = validateDates(startDate, endDate);
      return dataSources.scheduleAPI.returnSchedule(scheduleDate.startDate, scheduleDate.endDate);
    },
    getScheduleByTeam: (_, { teamId, startDate, endDate }, { dataSources }) => {
      const scheduleDate = validateDates(startDate, endDate);
      return dataSources.scheduleAPI.returnScheduleByTeam(teamId, scheduleDate.startDate, scheduleDate.endDate);
    },
    getTeams: (_, { season }, { dataSources }) => {
      validateSeasons(season);
      return dataSources.teamAPI.returnTeams(season);
    },
    getTeam: (_, { id, season }, { dataSources }) => {
      validateSeasons(season);
      return dataSources.teamAPI.returnTeam(id, season);
    },
    getTeamByName: (_, { name, season }, { dataSources }) => {
      validateSeasons(season);
      return dataSources.teamAPI.returnTeamByName(name, season);
    },
    getDivisions: (_, {}, { dataSources }) => dataSources.divisionAPI.returnDivisions(),
    getDivision: (_, { id }, { dataSources }) => dataSources.divisionAPI.returnDivision(id),
    getConferences: (_, {}, { dataSources }) => dataSources.conferenceAPI.returnConferences(),
    getConference: (_, { id }, { dataSources }) => dataSources.conferenceAPI.returnConference(id),
  },
};

module.exports = Resolvers;
