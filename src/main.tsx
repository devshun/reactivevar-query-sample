import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  makeVar,
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

const client = new ApolloClient({
  cache,
});

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </React.StrictMode>
);
