const { ApolloServer } = require('apollo-server');
const ConferenceAPI = require('./API/DataSources/ConferenceAPI');
const TeamAPI = require('./API/DataSources/TeamAPI');
const schema = require('./API/Schema');

const server = new ApolloServer({
  schema,
  introspection: true,
  dataSources: () => ({
    conferenceAPI: new ConferenceAPI(),
    teamAPI: new TeamAPI(),

  }),
});

server.listen({ port: process.env.PORT || 4000 }).then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
});
