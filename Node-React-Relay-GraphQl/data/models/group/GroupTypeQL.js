import {
  GraphQLObjectType,
  GraphQLSchema,
  GraphQLString,
  GraphQLInt,
  GraphQLNonNull,
  GraphQLList,
  GraphQLID
  } from 'graphql';

import Group from './GroupSchema.js';

export default new GraphQLObjectType({
  name: 'Group',
  description: 'A group',
  fields: () => ({
    _id: {
      type: new GraphQLNonNull(GraphQLID)
    },
    title: {
      type: new GraphQLNonNull(GraphQLString)
    },
    description:{
      type: GraphQLString
    }
  })
});
