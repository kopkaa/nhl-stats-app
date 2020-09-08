const { ApolloServer } = require('apollo-server')
const ConferenceAPI = require('./API/DataSources/ConferenceAPI')
const schema = require('./API/Schema')



const server = new ApolloServer({
  schema,
  introspection: true,
  dataSources: () => {
    return {
      conferenceAPI: new ConferenceAPI(),
    }
  },
})


server.listen({ port: process.env.PORT || 4000 }).then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
});

