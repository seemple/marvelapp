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
      description: 'The character unique id.',
	  resolve: character => character.id
    },
    name: {
      type: GraphQLString,
      description: 'The character name.',
	  resolve: character => character.name
    },
    description: {
      type: GraphQLString,
      description: 'The character description.',
	  resolve: character => character.description
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
