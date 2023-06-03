import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  makeVar,
  gql,
} from "@apollo/client";

type SampleVar = {
  id: number;
  name: string;
  email: string;
  isActive: boolean;
  createdAt: Date;
};

const sampleVar = makeVar<SampleVar>({
  id: 0,
  name: "",
  email: "",
  isActive: false,
  createdAt: new Date(),
});

const cache: InMemoryCache = new InMemoryCache({
  typePolicies: {
    Query: {
      fields: {
        sample: {
          read: () => sampleVar(),
        },
      },
    },
  },
});

const typeDefs = gql`
  type Sample {
    id: Int!
    name: String!
    email: String!
    isActive: Boolean!
    createdAt: String!
  }

  extend type Query {
    sample: Sample
  }
`;

const client = new ApolloClient({
  cache,
  typeDefs,
});

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </React.StrictMode>
);
