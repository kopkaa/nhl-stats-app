const PlayerStats = `
  type PlayerStats {
    hits: Int,
    shots: Int,
		assists: Int,
		timeOnIce: String,
		goals: Int,
		games: Int,
		powerPlayGoals: Int,
		powerPlayPoints: Int,
		powerPlayTimeOnIce: String,
		shotPct: Float,
		shifts: Int,
		points: Int,
		timeOnIcePerGame: String,
		plusMinus: Int
  }
`;

module.exports = PlayerStats;
