const { ApolloServer } = require('apollo-server-express');
const ConferenceAPI = require('./API/DataSources/ConferenceAPI');
const TeamAPI = require('./API/DataSources/TeamAPI');
const DivisionAPI = require('./API/DataSources/DivisionAPI');
const PlayerAPI = require('./API/DataSources/PlayerAPI');
const ScheduleAPI = require('./API/DataSources/ScheduleAPI');
const StandingAPI = require('./API/DataSources/StandingAPI');
const schema = require('./API/Schema');
const express = require('express');
const cors = require('cors')
const bodyParser = require('body-parser')

const app = express();
const PORT = process.env.PORT || 8000;
const graphqlPath = process.env.GRAPHQL || 'graphql';

app.use(cors())
app.use(bodyParser.text({ type: 'application/graphql' }))



const server = new ApolloServer({
  schema,
  introspection: true,
  dataSources: () => ({
		playerAPI: new PlayerAPI(),
		conferenceAPI: new ConferenceAPI(),
		divisionAPI: new DivisionAPI(),
		teamAPI: new TeamAPI(),
		scheduleAPI: new ScheduleAPI(),
		standingAPI: new StandingAPI()
  }),
});


server.applyMiddleware({ app, path: `/${graphqlPath}` });

app.listen(PORT, () => console.log(`graphql listening on port ${PORT}`))
