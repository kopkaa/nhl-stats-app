const { ApolloServer } = require('apollo-server');
const ConferenceAPI = require('./API/DataSources/ConferenceAPI');
const TeamAPI = require('./API/DataSources/TeamAPI');
const DivisionAPI = require('./API/DataSources/DivisionAPI');
const PlayerAPI = require('./API/DataSources/PlayerAPI');
const ScheduleAPI = require('./API/DataSources/ScheduleAPI');
const schema = require('./API/Schema');

const server = new ApolloServer({
  schema,
  introspection: true,
  dataSources: () => ({
		playerAPI: new PlayerAPI(),
		conferenceAPI: new ConferenceAPI(),
		divisionAPI: new DivisionAPI(),
		teamAPI: new TeamAPI(),
		scheduleAPI: new ScheduleAPI()

  }),
});

server.listen({ port: process.env.PORT || 4000 }).then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
});
