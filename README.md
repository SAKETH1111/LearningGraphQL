**Learning notes of GraphQL**
#
1. Schema is 50% of Graphql and other 50% is writing queries.
2. 
Query Example : 
```
{
    user(id: "23){  // if here id is not found it will return null. // if empty through syntax error like this  "user()"
        id,
        firstName, // if we dont mention this in query it will not return, this positive thing compare to rest api is it will not return it.
        age
    }
}
```
This is not a Javascript code. Here we asked Graphql to look through user to look at id 23, to find id, firstName and age.

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

    
15. you can use `query` has key word before the query so we can we know it is a query.
16. Also we can name our quiery so that we can use it in future reference
17. Openeing set of curly braces is asking the RootQueryType and nested curly bases go to their nested data.
    ```
    query nameofthequery {
    company(id: "1") {
        id,
    users{
      firstName,
      company{
        id
      }
    }
    } }
    ```
18. you can also ask graphql the same query twice but you need to define the name of the quiery different
    ```
    {
    1name: company(id: "1") {
        id,
    users{
      firstName,
      company{
        id
      }
    }
    }
    2name: company(id: "1") {
        id,
    users{
      firstName,
      company{
        id
      }
    }
    }
    }
    ```
19. Fragment can be used so that we need not to define the field names every time which we want to retrive.

```
    {
    1name: company(id: "1") {
        ...companydetials
    }
    2name: company(id: "1") {
        ...companydetials
    }
    fragment companydetials on Company { // all company above will have these details when used
    id,
    name,
    description
    }
    }
```

**Mutations**
#
1. Mutations are used to change our data in some fashion.
Mutations can be used to delete records, update them, or even create new records.
2. `new GraphQLNonNull(GraphQLString)` it will be used to so that args must accept some string without being passed empty
3. ! on graphql fields on web page states that it is a required field to pass
4. Below is the query to add user through mutation
```
 mutation {
      addUser(firstName:"saketh", age: 10, companyId: "2") {
        id,
      firstName,
        age,
        company {
          id
        }
    }
    }

```
```

    mutation {
      deleteUser(id:"zYcDMtf") {
    	id // it returns null after deletion
    }
    }
```
```
  mutation {
      editUser(id:"23", age: 27) {
        id,
        age,
        firstName
    }
    }
```
5. Put request will completely replace the exisiting data, over writing the passed data and not passed data will be null
6. where as patch replaces the only passed data and other data remains as it is.
#

**Section 5 : GraphQL EcoSystem**

1. In this we will learn how can we use front end technolgies with graphql like react.
2. The bad news is that this is also where GraphQL starts to get a little bit hairy.
GraphQL is the bleeding edge of the Internet and web design technology, and there's a lot of very rapid changes that are coming out in the GraphQL ecosystem, especially on the front end side of things. So in this section, we're going to look at some of the different evolving technologies that are used on the front end of GraphQL applications.
3. In GraphIQl web page when you run a query that is passed as a request in the network.
4. react application will be tightly coupled with graphql client and graphql client is basically the graphiql which sends the request through the server to get information and get back.
5. 3 types of clients we use mostly, these are javascript clients used in the browser that interact with grapgql server on backend and react on frontend
   1. Looka - Essentially it works very similar to what our graph graphical client is doing right now, but it also
has some little bit of extra features for handling something called caching.
    2. Apollo Client - It is overall project has called has Apollo Stack, The Apollo stack has both a back end GraphQL server, which we would be using in place of the Express. Apollo client is really great in terms of having a ambitious feature set while balancing that with not
making it very difficult to work with.
    3. Relat - Complicated, used by Facebook team, So in the relay world, handling mutations is probably like a factor of ten more challenging than the
mutations we've put together already. Best performance on Mobile devices. Awful internet connection we can use relay for customers it is better to use.

6. Apollo server - They require you to define a schema file that uses kind of a fancy markup language to describe what
each type of data looks like and the relationship between each of them. Then in a separate file, the Apollo server would define a resolver file or a resolver set of resolver functions

7. So the big difference between the Apollo Server and GraphQL Express is that GraphQL Express co-locates
all of the type information with the resolve logic, whereas the Apollo server says, Give me just one
location to define all my types and then a location, separate location to define how to relate all
the types together.



**Section 6 Clientside GraphQL** 
#

1. npm install - it will install all the dependecies of our projects.
2. .gitignore - add names of the files or folders that will be not be commited in your github.
3. Client folder has Javascript code and UI code which is React
4. Server folder has lot of functionality which has code related to setting up the graphql server
5. 7LMrfzJ97PjRZl3M
6. mongodb+srv://saketh1111:7LMrfzJ97PjRZl3M@cluster0.4d84wyl.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0
7. In GraphIql, You have documentation explorer, where you can look at graphQL Schema which provides root type for each kind of peration
8. Apollo store and React are connected using Apollo Provider, The provider will take data from the store and inject it into our React application.
9. 




