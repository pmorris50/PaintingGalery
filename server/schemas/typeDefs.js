const { gql } = require ('apollo-server-express');

const typeDefs = gql `
type User {
    _id: ID!
    email: String!
}
type Painting {
    _id: ID!
    name: String!
    image: String!
}
type Prices {
    card: Int!
    sticker: Int!
    package: Int!
}

type Query {
    Paintings: [Painting]
    Users: [User]
    
}
`;

module.exports = typeDefs;