import { ApolloClient, HttpLink, InMemoryCache } from "@apollo/client";
import { ApolloProvider } from "@apollo/client/react";
import { StrictMode } from 'react';
import { createRoot } from "react-dom/client";
import  ApolloApp from "./ApolloApp.tsx";

const client = new ApolloClient({
  link: new HttpLink({
    uri: "https://api.github.com/graphql",
    headers: {
      Authorization: `Bearer ${import.meta.env.VITE_GITHUB_TOKEN}`, // Put your GitHub personal access token here
    },
  }),
  cache: new InMemoryCache(),
});

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ApolloProvider client={client}>
      <ApolloApp />
    </ApolloProvider>
  </StrictMode>
);