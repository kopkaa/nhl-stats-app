const TeamStats = `
  type TeamStats {
    gamesPlayed: Int,
    wins: Int,
    losses: Int,
    ot: Int,
    pts: Int,
    ptPctg: Float,
    goalsPerGame: Float,
    goalsAgainstPerGame: Float,
    evGGARatio: Float,
    powerPlayPercentage: Float,
    powerPlayGoals: Float,
    powerPlayGoalsAgainst: Float,
    powerPlayOpportunities: Float,
    penaltyKillPercentage: Float,
    shotsPerGame: Float,
    shotsAllowed: Float,
    winScoreFirst: Float,
    winOppScoreFirst: Float,
    winLeadFirstPer: Float,
    winLeadSecondPer: Float,
    winOutshootOpp: Float,
    winOutshotByOpp: Float,
    faceOffsTaken: Float,
    faceOffsWon: Float,
    faceOffsLost: Float,
    faceOffWinPercentage: Float,
    shootingPctg: Float,
    savePctg: Float
  }
`;

module.exports = TeamStats;
