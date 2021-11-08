// eslint-disable-next-line import/prefer-default-export
// TODO add more stat info
const headers = [
  {
    text: 'Name', align: 'start', value: 'name', hideable: false,
  },
  {
    text: 'GP', align: 'start', value: 'stats.gamesPlayed', tooltip: 'Games played', hideable: false,
  },
  {
    text: 'W', align: 'start', value: 'stats.wins', tooltip: 'Wins', hideable: false,
  },
  {
    text: 'L', align: 'start', value: 'stats.losses', tooltip: 'Losses', hideable: false,
  },
  {
    text: 'PTS', align: 'start', value: 'stats.pts', tooltip: 'Points', hideable: false,
  },
  {
    text: 'SC', align: 'start', value: 'score', tooltip: 'Score', sortable: false, hideable: false,
  },
  {
    text: 'DIFF', align: 'start', value: 'standing.goalDiff', tooltip: 'Goal difference', hideable: true, default: true,
  },
  {
    text: 'GS/G', align: 'start', value: 'stats.goalsPerGame', tooltip: 'Goals scored per game', hideable: true,
  },
  {
    text: 'GA/G', align: 'start', value: 'stats.goalsAgainstPerGame', tooltip: 'Goals against per game', hideable: true,
  },
  {
    text: 'SF/G', align: 'start', value: 'stats.shotsPerGame', tooltip: 'Shots per game', hideable: true,
  },
];

export default headers;
