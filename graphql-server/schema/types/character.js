const { GraphQLObjectType, GraphQLString, GraphQLNonNull, GraphQLID, GraphQLList } = require('graphql');

const { connectionDefinitions } = require('graphql-relay');

const { categoryType } = require('./category');
const { nodeInterface } = require('../node');
const model = require('../../model');

const characterType = new GraphQLObjectType({
  name: 'Character',
  description: 'Represents a character of the Marvel Universe.',
  fields: () => ({
    id: {
      type: new GraphQLNonNull(GraphQLID),
      description: 'The character unique id.'
    },
    name: {
      type: GraphQLString,
      description: 'The character name.'
    },
    description: {
      type: GraphQLString,
      description: 'The character description.'
    },
    image: {
      type: GraphQLString,
      description: 'The character image.',
	  resolve: character => character.thumbnail.path
    }
  })
});

const { connectionType } = connectionDefinitions({ nodeType: characterType });

exports.characterType = characterType;
exports.characterConnection = connectionType;
