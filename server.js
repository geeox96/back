const { ApolloServer, gql } = require('apollo-server')
const { importSchema } = require('graphql-import')
const schemaPath = './schema/index.graphql'
const mongoose = require('mongoose')
const resolvers = require('./graphql/resolvers')
// const bodyParser = require('body-parser')
// const cors = require('cors')





const options = { reconnectTries: Number.MAX_VALUE, reconnectInterval: 500, poolSize: 5, useNewUrlParser: true, useFindAndModify: false }
mongoose.connect("mongodb+srv://vapor-center:chrome00audi@geoaep-gimoh.mongodb.net/VaporCenter?retryWrites=true", options)
mongoose.set('useCreateIndex', true)
mongoose.connection.on('error', (err) => {
    console.log('Erro no banco ' + err)
})
mongoose.connection.on('connected', () => {
    console.log('DB connect !')
})

const server = new ApolloServer({
    typeDefs: importSchema(schemaPath),
    resolvers
})

server.listen().then(({ url })  => {
  console.log(`Executando API em ${url}`)
})
