import {
  GraphQLObjectType,
  GraphQLSchema,
  GraphQLString,
  GraphQLInt,
  GraphQLNonNull,
  GraphQLList,
  GraphQLID
  } from 'graphql';

import GroupType from './GroupTypeQL.js';
import Group from './GroupSchema.js';

export default {
  groups: {
    type: new GraphQLList(GroupType),
    resolve: Group.getListOfGroup
  },
  group: {
    type: GroupType,
    args: {
      id: {
        type: GraphQLID
      }
    },
    resolve: Group.getGroupByPosition
  }
};
