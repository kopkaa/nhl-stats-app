const { RESTDataSource } = require('apollo-datasource-rest');

class StandingAPI extends RESTDataSource {
  constructor () {
    super();
    this.baseURL = 'https://statsapi.web.nhl.com/api/v1/standings';
  }

  async returnStandings (season) {
    console.log('SEASON', season);
     const standings = await this.get(`?season=${season}`);
     console.log('STANDINGS', standings.records[0]);
     return standings[0];
  }
}

module.exports = StandingAPI;
