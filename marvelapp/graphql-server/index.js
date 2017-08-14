const express = require('express');
const graphqlHTTP = require('express-graphql');
const model = require('./model');
const schema = require('./schema');
const cors = require('cors');
const app = express();
//const { connectionFromPromisedArray } = require('graphql-relay');

const connectionFromMongoCursor = require('relay-mongodb-connection');

const queryResolver = {
  category: ({ id }) => model.category.getById(id),
  categories: () => model.category.getAll(),
  characters: args =>
    args.categoryId
      ? model.character.getByCategoryId(args.categoryId).then(c => connectionFromMongoCursor(c, args))
      : model.character.getAll(),
  character: ({ id }) => model.character.getById(id)
};

app.use(cors());

app.use(
  '/graphql',
  graphqlHTTP({
    schema: schema,
    rootValue: queryResolver,
    graphiql: true
  })
);

app.listen(4000, function() {
  console.log('Running a GraphQL API server at localhost:4000/graphql');
});
