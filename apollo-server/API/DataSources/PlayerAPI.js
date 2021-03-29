const { RESTDataSource } = require('apollo-datasource-rest');

class PlayerAPI extends RESTDataSource {
  constructor () {
    super();
    this.baseURL = 'https://statsapi.web.nhl.com/api/v1/people/';
  }

  async returnPlayer (id, season) {
    const playerData = await this.get(`/${id}`);
    const player = playerData.people[0];

    player.position = player.primaryPosition.name;
    player.positionCode = player.primaryPosition.code;
    player.season = season;

    return player;
  }

  async returnStats (id, season) {
    const playerStats = await this.get(`${id}/stats?stats=statsSingleSeason&season=${season}&site=en_nhl`);
    const { stat } = playerStats.stats[0].splits[0] || {};
    return stat;
  }

  // TODO dodelat player logs zapasy
  async returnPlayerLog (id, season) {
    const playerLog = await this.get(`${id}/stats?stats=gameLog&season=${season}&site=en_nhl`);
    // vratit pole jako v games
    console.log('PLAYER LOG', playerLog);
    return playerLog.stats[0].splits[0];
  }
}

module.exports = PlayerAPI;
