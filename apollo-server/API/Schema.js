
const Conference = require('./TypeDefs/Conference')
const Division = require('./TypeDefs/Division')
const Game = require('./TypeDefs/Game')
const Player = require('./TypeDefs/Player')
const Schedule = require('./TypeDefs/Schedule')
const Status = require('./TypeDefs/Status')
const Team = require('./TypeDefs/Team')
const TeamStats = require('./TypeDefs/TeamStats')
const TeamStatsPositions = require('./TypeDefs/TeamStatsPositions')
const TimeZone = require('./TypeDefs/TimeZone')
const Venue = require('./TypeDefs/Venue')
const Resolvers = require('./Resolvers/Resolvers')
const { makeExecutableSchema } = require('graphql-tools')

const Query = `
  type Query {
		getConference(id: Int!): Conference!,
		getConferences: [Conference!]!,
		getDivision(id: Int!): Division!,
		getDivisions: [Division!]!,
		getPlayer(id: Int!, season: Int!): Player!,
		getPlayersByName(name: String!, season: Int!): [Player!]!,
		getSchedule(startDate: String!, endDate: String!): [Schedule],
		getScheduleByTeam(teamId: Int!, startDate: String!, endDate: String!): [Schedule],
		getTeams(season: Int!): [Team!]!,
		getTeam(id: Int!, season: Int!): Team!,
		getTeamByName(name: String!, season: Int!): Team!,
  }
`

const schema = makeExecutableSchema({
  typeDefs: [
		Conference, 
		Division,
		Game,
		Player, 
		Query, 
		Schedule,
		Status,
		Team,
		TeamStats,
		TeamStatsPositions,
		TimeZone,
		Venue, 
	],
  resolvers: Resolvers,
})

module.exports = schema