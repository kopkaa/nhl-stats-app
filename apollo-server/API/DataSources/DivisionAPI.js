const { RESTDataSource } = require('apollo-datasource-rest')

class DivisionAPI extends RESTDataSource {
  constructor() {
    super()
    this.baseURL = 'https://statsapi.web.nhl.com/api/v1/divisions'
  }

  async returnDivision(id) {
    const division = await this.get(`/${id}`)
    return division.divisions[0]
  }

  async returnDivisions() {
    const division = await this.get(`/`)
    return division.divisions
  }
}

module.exports = DivisionAPI
