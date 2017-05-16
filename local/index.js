import express from 'express';
import graphQLHTTP from 'express-graphql'
import Schema from '../src/schema'

const app = express();

app.use(graphQLHTTP({
    schema: Schema,
    graphiql: true
}));
app.listen(5000);
console.log("app running on port: 5000");