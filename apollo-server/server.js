const { ApolloServer } = require('apollo-server')
const  Conference =  require('./API/TypeDefs/Conference')

//const typeDefs = Conference;
const typeDefs = `
type Query {
  _empty: String  
}

type Mutation {
  _empty: String
}

schema {
    query: Query
    mutation: Mutation
}`

const server = new ApolloServer({
	typeDefs,
	introspection: true
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
