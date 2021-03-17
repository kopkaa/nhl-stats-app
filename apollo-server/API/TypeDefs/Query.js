const Query = `
  type Query {
		getConference(id: Int!): Conference!,
		getConferences: [Conference!]!,
		getDivision(id: Int!): Division!,
		getDivisions: [Division!]!,
		getPlayer(id: Int!, season: Int!): Player!,
		getPlayersByName(name: String!, season: Int!): [Player!]!,
		getPlayerLog(playerId: Int!, season: Int!): [PlayerLog],
		getSchedule(startDate: String!, endDate: String!): [Schedule],
		getScheduleByTeam(teamId: Int!, startDate: String!, endDate: String!): [Schedule],
		getTeams(season: Int!): [Team!]!,
		getTeam(id: Int!, season: Int!): Team!,
		getTeamByName(name: String!, season: Int!): Team!,
  }
`;

module.exports = Query;
