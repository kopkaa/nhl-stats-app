const { RESTDataSource } = require('apollo-datasource-rest')

class ConferenceAPI extends RESTDataSource {
  constructor() {
    super()
    this.baseURL = 'https://statsapi.web.nhl.com/api/v1/conferences'
  }

  async returnConference(id) {
    const conference = await this.get(`/${id}`)
    return conference.conferences[0]
  }

  async returnConferences() {
    const conference = await this.get(`/`)
    return conference.conferences
  }
}

module.exports = ConferenceAPI
