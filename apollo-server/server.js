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
/*
app.use('/graphql', (req,res,next) => {
	res.sendStatus(200);
})

app.listen(3000);*/
// export default app => {
//   app.use('/files', express.static(path.resolve(__dirname, '../live/uploads')))
// }
