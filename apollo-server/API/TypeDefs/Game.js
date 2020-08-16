const Game = `
  type Game {
    gamePk: Int 
		gameType: String
		season: Int
    gameDate: String
    venue: Venue
    status: Status
    awayTeam: Team
    awayTeamScore: Int
    homeTeam: Team
    homeTeamScore: Int
  }
`

module.exports = Game
