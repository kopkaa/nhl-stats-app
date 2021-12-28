const validateSeasons = require("../../utils/season.js");
const validateDates = require("../../utils/dates.js");
const moment = require('moment');

const Resolvers = {
  Player: {
    team: (parent, {}, { dataSources }) => {
      if (parent.active === false) return;
      return dataSources.teamAPI.returnTeam(
        parent.currentTeam.id,
        parent.season
      );
    },
    stats: (parent, {}, { dataSources }) =>
      dataSources.playerAPI.returnStats(parent.id, parent.season),
  },
  Schedule: {
    games: async (parent, {}, { dataSources }) => {
      const games = await dataSources.scheduleAPI.returnGames(
        parent.teamId,
        parent.date
      );
      const gamesWithTeams = games.map((game) => {
        const awayTeam = dataSources.teamAPI.returnTeam(
          game.awayTeamId,
          game.season
        );
        const homeTeam = dataSources.teamAPI.returnTeam(
          game.homeTeamId,
          game.season
        );
        game.awayTeam = awayTeam;
        game.homeTeam = homeTeam;
        return game;
      });
      return gamesWithTeams;
    },
  },
  Team: {
    players: async (parent, {}, { dataSources }) => {
      let players = await dataSources.teamAPI.returnRoster(
        parent.id,
        parent.season
      );

      return players.map(async (player) => {
        const p = await dataSources.playerAPI.returnPlayer(
          player.person.id,
          parent.season
        );
        p.playerPhotoUrl = `https://assets.nhle.com/mugs/nhl/${parent.season}/${parent.abbreviation}/${player.person.id}.png`;
        return p;
      });
    },
    standing: (parent, {}, { dataSources }) =>
      dataSources.standingAPI.returnStandings(parent.id, parent.season),
    division: (parent, {}, { dataSources }) =>
      dataSources.divisionAPI.returnDivision(parent.division.id),
    conference: (parent, {}, { dataSources }) =>
      dataSources.conferenceAPI.returnConference(parent.conference.id),
    stats: (parent, {}, { dataSources }) =>
      dataSources.teamAPI.returnStats(parent.id, parent.season),
    statPositions: (parent, {}, { dataSources }) =>
      dataSources.teamAPI.returnStatPositions(parent.id, parent.season),
  },
  Query: {
    getPlayer: (_, { id, season }, { dataSources }) => {
      validateSeasons(season);
      const player = dataSources.playerAPI.returnPlayer(id, season);
      return player;
    },
    getPlayerLog: (_, { playerId, season }, { dataSources }) => {
      validateSeasons(season);
      return dataSources.playerAPI.returnPlayerLog(playerId, season);
    },

    getSchedule: (_, { startDate, endDate }, { dataSources }) => {
      const scheduleDate = validateDates(startDate, endDate);
      return dataSources.scheduleAPI.returnSchedule(
        scheduleDate.startDate,
        scheduleDate.endDate
      );
    },
    getScheduleByTeam: (_, { teamId, startDate, endDate }, { dataSources }) => {
      const scheduleDate = validateDates(startDate, endDate);
      return dataSources.scheduleAPI.returnScheduleByTeam(
        teamId,
        scheduleDate.startDate,
        scheduleDate.endDate
      );
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
    getDivisions: (_, {}, { dataSources }) =>
      dataSources.divisionAPI.returnDivisions(),
    getDivision: (_, { id }, { dataSources }) =>
      dataSources.divisionAPI.returnDivision(id),
    getConferences: (_, {}, { dataSources }) =>
      dataSources.conferenceAPI.returnConferences(),
    getConference: (_, { id }, { dataSources }) =>
      dataSources.conferenceAPI.returnConference(id),
  },
};

module.exports = Resolvers;
