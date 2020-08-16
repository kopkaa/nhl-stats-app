const { RESTDataSource } = require('apollo-datasource-rest')

class PlayerAPI extends RESTDataSource {
  constructor() {
    super()
    this.baseURL = 'https://statsapi.web.nhl.com/api/v1/people/'
  }

  async returnPlayer(id, season) {
    const playerData = await this.get(`/${id}`)
    const player = playerData.people[0]
    player.position = player.primaryPosition.name 
    player.positionCode = player.primaryPosition.code 
    player.season = season
    return player
  }
}

module.exports = PlayerAPI
