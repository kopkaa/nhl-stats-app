const Schedule = `
  type Schedule {
    teamId: Int
    date: String
    totalItems: Int
    totalEvents: Int
    totalGames: Int
    totalMatches: Int
    games: [Game]
  }
`;

module.exports = Schedule;
