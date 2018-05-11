// Exercise
// type Query {
//   # Fetch a single link by its `id`
//   link(id: ID!): Link
// }

// type Mutation {
//   # Update a link
//   updateLink(id: ID!, url: String, description: String): Link

//   # Delete a link
//   deleteLink(id: ID!): Link
// }






// const { GraphQLServer } = require('graphql-yoga')

// const typeDefs = `
// 	type Query: {
// 		info: String!
// 	}
// `

// const resolvers = {
// 	Query: {
// 		info: () => `This is my own API`
// 	}
// }

// const server = new GraphQLServer({ 
// 	typeDefs, 
// 	resolvers, 
// })

// server.start(() => console.log(`Server's started`))