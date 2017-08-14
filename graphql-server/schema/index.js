const { GraphQLObjectType, GraphQLList, GraphQLSchema, GraphQLString, GraphQLNonNull } = require('graphql');
const { connectionArgs } = require('graphql-relay');
const { categoryType } = require('./types/category');
const { characterType, characterConnection } = require('./types/character');
const { nodeField } = require('./node');

const queryType = new GraphQLObjectType({
  name: 'Query',
  fields: () => ({
    category: {
      type: categoryType,
      args: {
        id: {
          type: new GraphQLNonNull(GraphQLString)
        }
      }
    },
    categories: {
      type: new GraphQLList(categoryType)
    },
    character: {
      type: characterType,
      args: {
        id: {
          type: new GraphQLNonNull(GraphQLString)
        }
      }
    },
    characters: {
      type: characterConnection
    },
    node: nodeField
  })
});

const schema = new GraphQLSchema({
  query: queryType
});

module.exports = schema;
