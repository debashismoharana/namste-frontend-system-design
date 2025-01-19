export const typeDefs = `#graphQL

    type Author {
        id: ID!
        name: String!
    }

    type Book {
        id: ID!
        title: String!
        publishedYear: Int
    }

    type Query {
        authors: [Author]
        books: [Book]
    }

    type Mutation {

    }
`;
