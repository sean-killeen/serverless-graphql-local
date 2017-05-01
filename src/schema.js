import {
    GraphQLObjectType,
    GraphQLSchema,
    GraphQLList,
    GraphQLString,
    GraphQLNonNull            
} from 'graphql';
import { GraphQLLimitedString } from 'graphql-custom-types';
import { getPosts, getPost } from './dynamo'

const Post = new GraphQLObjectType({
    name: "Post",
    description: "A blog post.",
    fields: () => ({
        id: { type: GraphQLString },
        title: { type: GraphQLString},
        author: { type: GraphQLString},
        bodyContent: { type: GraphQLString}
    })
});

const Query = new GraphQLObjectType({
    name: "BlogSchema",
    description: "Root of the blog schema",
    fields: () => ({
        posts: {
            type: new GraphQLList(Post),
            description: "The list of posts in the database",
            resolve: function(){
                return getPosts()
            }
        }
    })

});

const schema = new GraphQLSchema({
    query: Query
});

export default schema;