const { makeExecutableSchema } = require('graphql-tools');
const Conference = require('./TypeDefs/Conference');
const Division = require('./TypeDefs/Division');
const Game = require('./TypeDefs/Game');
const Player = require('./TypeDefs/Player');
const PlayerLog = require('./TypeDefs/PlayerLog');
const PlayerStats = require('./TypeDefs/PlayerStats');
const Schedule = require('./TypeDefs/Schedule');
const Status = require('./TypeDefs/Status');
const Team = require('./TypeDefs/Team');
const Standing = require('./TypeDefs/Standing');
const TeamStats = require('./TypeDefs/TeamStats');
const TeamStatsPositions = require('./TypeDefs/TeamStatsPositions');
const TimeZone = require('./TypeDefs/TimeZone');
const Venue = require('./TypeDefs/Venue');
const Query = require('./TypeDefs/Query');
const Resolvers = require('./Resolvers/Resolvers');

const schema = makeExecutableSchema({
  typeDefs: [
    Conference,
    Division,
    Game,
    Player,
    PlayerLog,
    PlayerStats,
    Query,
    Schedule,
    Status,
    Team,
    Standing,
    TeamStats,
    TeamStatsPositions,
    TimeZone,
    Venue,
  ],
  resolvers: Resolvers,
});

module.exports = schema;
