1. Schema is 50% of Graphql and other 50% is writing queries.
2. 
Query Example : 
{
    user(id: "23){ // if id is not found it will return null. // if empty through syntax error like this  "user()"
        id,
        firstName, // if we dont mention this in query it will not return, this positive thing compare to rest api is it will not return it.
        age
    }
}
This is not a Javascript code. Here we asked Graphql to look through user t look at id 23, to find id, firstName and age.

This is output

{
  "data": {
    "user": {
      "id": "47",
      "firstName": "Samanatha",
      "age": 21
    }
  }
}

Query we sent will got to RootQuery find the user key and we have given the "args" the input required and return it as response
we need to return raw json or javascript objects from these resolve functions and graphql will take care of everything.

3. In Large Comapnies, like they can i have mutliple database. But Graphql can serve as proxy of sorts to go and fetcg
data from all of these different sources, pull all the data together and ship a response back to our users.

4. We can make a request to database through our server or we can make a request to other server to fetch the data.
5. In package.json script section you can write a command that can be used to execute the program like starting a server, building it execute
6. we can make a request, ask for user 23 is a asynchronous request, we can have a promise that wait for response and send the response to back to the requester
7. NodeMon - Starting a server every time when code change is a irrating work, so we can use nodemon to automatically start the server
whenever the code changes.
8. to add nodemon we need to add it to dependencies using npm install --save nodemon
9. In package.json we need to add a script "dev": "nodemon server.js" and now run "npm run dev"
10. the restful connection all will be taken care by graphql
11. order of defining the --- is important
12. We will always use the resolve function to solve the difference between incoming data and our model and give back the response correctly
13. Circular reference will be a issue in GraphQL, It can be resolved by making fields as arrow function. so it will execute at the end of the file
14. circular relation can be asked as deep as we want in graphql