const TeamStatsPositions = `
  type TeamStatsPositions {
    wins: String,
    losses: String,
    ot: String,
    pts: String,
    ptPctg: String,
    goalsPerGame: String,
    goalsAgainstPerGame: String,
    evGGARatio: String,
    powerPlayPercentage: String,
    powerPlayGoals: String,
    powerPlayGoalsAgainst: String,
    powerPlayOpportunities: String,
    penaltyKillPercentage: String,
    shotsPerGame: String,
    shotsAllowed: String,
    winScoreFirst: String,
    winOppScoreFirst: String,
    winLeadFirstPer: String,
    winLeadSecondPer: String,
    winOutshootOpp: String,
    winOutshotByOpp: String,
    faceOffsTaken: String,
    faceOffsWon: String,
    faceOffsLost: String,
    faceOffWinPercentage: String,
    shootingPctRank: String,
    savePctRank: String
  }
`;

module.exports = TeamStatsPositions;
