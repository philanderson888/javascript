# graph-ql


# Apollo Server

```csharp
yarn add graphql apollo-server

// index.js

const { ApolloServer } = require("apollo-server")
const typeDefs = `

    type Query{
        totalDays:Int,
        philCount:Int
    }
`
const resolvers = {
    Query:{
        totalDays: ()=> 100,
        philCount: () => 200
    }

}
const server = new ApolloServer({
    typeDefs,
    resolvers
})

server.listen()
    .then(({ url }) => `GraphQL server listening on ${url}`)
    .then(console.log)
    .catch(console.error)

```

# Client

```js
npm install graphql-request

// index.js

const {request} = require('graphql-request')

const endpoint = "http://localhost:4000"

const query = `
    query {
        totalDays
    }    
`

console.log('Sending the query')

request(endpoint,query)
    .then(({totalDays}) => `totalDays:${totalDays}`)
    .then(console.log)
    .catch(console.error)

/* 
run this with node .  (I think)

const options = {
    method:"POST",
    headers:{ "Content-Type":"application/json"},
    body:JSON.stringify({query})
}

fetch(endpoint,options)
    .then(response=>response.json())
    .then(({data})=> `totalDays:${data.totalDays}`)
    .then(console.log)
    .catch(console.error)

    */

// run this with npm start

const {
    request
} = require('graphql-request')

const endpoint = "http://localhost:4000"

const query = `
    query {
        totalDays
    }    
`

console.log('Sending the query with fetch')

const options = {
    method: "POST",
    headers: {
        "Content-Type": "application/json"
    },
    body: JSON.stringify({
        query
    })
}

const delay = setTimeout(getData, 500);

var counter = 0;

var repeat = setInterval(() => {
    console.log('getting data - index ' + counter)
    counter++
    if (counter >= 5) {
        console.log("querying has finished")
        clearInterval(repeat)
    }
    fetch(endpoint, options)
        .then(response => response.json())
        .then(({
            data
        }) => `totalDays:${data.totalDays}`)
        .then(console.log)
        .catch(console.error)
}, 1000);

function getData() {
    console.log('getting data')
    fetch(endpoint, options)
        .then(response => response.json())
        .then(({
            data
        }) => `totalDays:${data.totalDays}`)
        .then(console.log)
        .catch(console.error)
}

fetch(endpoint, options)
    .then(response => response.json())
    .then(({
        data
    }) => `totalDays:${data.totalDays}`)
    .then(console.log)
    .catch(console.error)

```



```jsx
sudo npm install -g create-react-app
create-react-app learn-graph-ql-client
yarn start
```