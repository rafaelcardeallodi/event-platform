import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
  uri: "https://api-sa-east-1.graphcms.com/v2/cl4pci6bk1obz01yw6nsb3etf/master",
  cache: new InMemoryCache(),
});
