const express = require('express');
const expressGraphQL = require('express-graphql').graphqlHTTP;
const schema = require ('./schema/schema')
const app = express(); 

// middle ware are that interfere a request and modify the request
// here in express we use app.use to interefere the graphql request
app.use('/graphql', expressGraphQL({
    schema,
    graphiql:true
}));

// what is a a schema? type of data we are working with and all the relations between them
app.listen(4000,()=> {
console.log('listening')
});
