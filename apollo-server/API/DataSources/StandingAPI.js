const { RESTDataSource } = require('apollo-datasource-rest');
const _ = require('lodash');

class StandingAPI extends RESTDataSource {
  constructor () {
    super();
    this.baseURL = 'https://statsapi.web.nhl.com/api/v1/standings';
  }

  async returnStandings (id, season) {
    const standings = await this.get(`?season=${season}`);
    // const thisStanding = standings.records[2].teamRecords.filter((item) => item.team.id == id);
    let arr = [];
    standings.records.forEach((item) => {
      const mergedArr = item.teamRecords.filter((it) => it.team.id === id);
      arr = _.unionBy(arr, mergedArr, 'id');
    });
    return arr[0];
  }
}

module.exports = StandingAPI;
