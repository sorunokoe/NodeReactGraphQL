
const { GraphQLServer } = require('graphql-yoga')



// 1
let links = [{
  id: 'link-0',
  url: 'www.howtographql.com',
  description: 'Fullstack tutorial for GraphQL'
}]
let idCount = links.length
const resolvers = {
  Query: {
    info: () => `This is the API of a Hackernews Clone`,
    // 2
    feed: () => links,
  },
  // 3
  // Link: {
  //   id: (root) => root.id,
  //   description: (root) => root.description,
  //   url: (root) => root.url,
  // },
  Mutation: {
    // 2
    post: (root, args) => {
       const link = {
        id: `link-${idCount++}`,
        description: args.description,
        url: args.url,
      }
      links.push(link)
      return link
    }
  },
}


const server = new GraphQLServer({
	typeDefs: './src/schema.graphql',
	resolvers
})

server.start()

























// The First Step
// const { GraphQLServer } = require('graphql-yoga')

// // 1
// const typeDefs = `
// type Query {
//   info: String!
// }
// `

// // 2
// const resolvers = {
//   Query: {
//     info: () => null
//   }
// }

// // 3
// const server = new GraphQLServer({
//   typeDefs,
//   resolvers,
// })
// server.start(() => console.log(`Server is running on http://localhost:4000`))