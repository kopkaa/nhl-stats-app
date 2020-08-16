
const Conference = require('./TypeDefs/Conference')
const Resolvers = require('./Resolvers/Resolvers')
const { makeExecutableSchema } = require('graphql-tools')

const Query = `
  type Query {
		getConference(id: Int!): Conference!,
		getConferences: [Conference!]!,

  }
`

const schema = makeExecutableSchema({
  typeDefs: [
		Conference, 
		Query, 
	],
  resolvers: Resolvers,
})

module.exports = schema