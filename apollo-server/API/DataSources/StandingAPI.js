const { RESTDataSource } = require('apollo-datasource-rest');
const _ = require('lodash');

class StandingAPI extends RESTDataSource {
  constructor () {
    super();
    this.baseURL = 'https://statsapi.web.nhl.com/api/v1/standings';
  }

  // TODO: Win-lose streak
  async returnStandings (id, season) {
    const standings = await this.get(`?season=${season}`);
    let arr = [];
    standings.records.forEach((item) => {
      const mergedArr = item.teamRecords.filter((it) => {
        const diff = it.goalsScored - it.goalsAgainst;
        Object.assign(it, { goalDiff: _.parseInt(diff, 10) });

        return	it.team.id === id;
      });
      arr = _.unionBy(arr, mergedArr, 'id');
    });
    return arr[0];
  }
}

module.exports = StandingAPI;
