// import logo from "./logo.svg";
import "./App.css";
import React from 'react';
import { ReactDOM } from 'react';
import { BrowserRouter } from 'react-router-dom';
import Dashboard from "./components/Dashboard.js";
import Logo from "./components/Logo";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";

const httpLink = createHttpLink({
  uri: "/graphql",
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem("id_token");
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});


function App() {
  return (
    <ApolloProvider client={client}>
      <div>
        <Logo />
        <Header />
        <Sidebar />
        <div className="content-body">
          <Dashboard />
        </div>
      </div>
    </ApolloProvider>
  );
}

export default App;
