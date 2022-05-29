import "./App.css";
import React, { useState } from "react";
import { ReactDOM } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import Logo from "./components/Logo";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import FitnessCalendar from "./components/FitnessCalendar";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import ProfilePage from "./pages/profile";

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
  const [currentPage, setCurrentPage] = useState("")
  return (
    <BrowserRouter>
      <div>
        <ApolloProvider client={client}>
          <div>
            <Logo />
            <Header currentPage={currentPage}/>
            <Sidebar />
            <div className="content-body">
              <Routes>
                <Route path="/dashboard" element={<Dashboard setCurrentPage={setCurrentPage}/>} />
                <Route path="/calendar" element={<FitnessCalendar />} />
                <Route path="/profile" element={<ProfilePage setCurrentPage={setCurrentPage}/>} />
              </Routes>
            </div>
          </div>
        </ApolloProvider>
      </div>
    </BrowserRouter>
  );
}

export default App;
