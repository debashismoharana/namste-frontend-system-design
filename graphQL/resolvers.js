export const resolvers = {
  Query: {
    authors: () => {
      return [{ id: 1, name: "John" }];
    },
    books: () => {
      return [{ id: 1, title: "John Book", publishedYear: "2015" }];
    },
  },
};
