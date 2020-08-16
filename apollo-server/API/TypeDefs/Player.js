const Player = `
  type Player {
		id: Int
    fullName: String
    firstName: String
    lastName: String
    primaryNumber: Int
    birthDate: String
    currentAge: Int
    birthCity: String
    birthStateProvince: String
    birthCountry: String
    nationality: String
    height: String
    weight: Int
    active: Boolean
    alternateCaptain: Boolean
    captain: Boolean
    rookie: Boolean
    shootsCatches: String
    rosterStatus: String
    team: Team
    position: String
    positionCode: String
  }
`
module.exports = Player
