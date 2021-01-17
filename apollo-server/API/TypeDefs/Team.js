const Team = `
  type Team {
    id: Int 
    name: String
    abbreviation: String
    teamName: String
    locationName: String
    firstYearOfPlay: String
    division: Division
    standing: Standing
    conference: Conference
    franchiseId: Int
    venue: Venue
	officialSiteUrl: String
    players:[Player]
    stats: TeamStats
    statPositions: TeamStatsPositions
    season: Int
    logoUrl: String
  }
`;

module.exports = Team;
