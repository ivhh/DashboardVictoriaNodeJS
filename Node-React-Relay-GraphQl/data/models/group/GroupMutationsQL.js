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
  addGroup:{
    type:GroupType,
    args: {
      title:{
        name:'title',
        type:new GraphQLNonNull(GraphQLString)
      },
      description:{
        name:'description',
        type: new GraphQLNonNull(GraphQLString)
      }
    },
    resolve: (root, {title, description}) => {
      var newGroup = new Group({title:title, description:description});

      return new Promise((resolve, reject) => {
        newGroup.save((err, res) => {
          err ? reject(err): resolve(res);
        });
      });
    }
  }
};
