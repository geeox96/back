require("dotenv").config();
const { ApolloServer, gql } = require("apollo-server");
const { importSchema } = require("graphql-import");
const mongoose = require("mongoose");
const resolvers = require("./graphql/resolvers");
const context = require("./middleware/ctx");
// const bodyParser = require('body-parser')
// const cors = require('cors')

// AWS CONFIG
// Access Key ID: AKIAJZ3F7ME6SAPZKANA
// Secret Access Key: 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

const options = {
  reconnectTries: Number.MAX_VALUE,
  reconnectInterval: 500,
  poolSize: 5,
  useNewUrlParser: true,
  useFindAndModify: false
};

mongoose.connect(
  "mongodb+srv://vapor-center:chrome00audi@geoaep-gimoh.mongodb.net/vaporcenter?retryWrites=true",
  options
);
mongoose.set("useCreateIndex", true);
mongoose.connection.on("error", err => {
  console.log("Erro no banco " + err);
});
mongoose.connection.on("connected", () => {
  console.log("DB connectada !");
});

const schemaPath = "./schema/index.graphql";

const server = new ApolloServer({
  typeDefs: importSchema(schemaPath),
  resolvers,
  context
});

server.listen().then(({ url }) => {
  console.log(`Executando API em ${url}`);
});
