import ProfilePage from "./pages/profile";
import LoginPage from "./pages/login";
import SignUp from "./pages/signup";
import WorkoutStatistics from "./components/WorkoutStatistics";
import React, {useState} from 'react';
import './App.css';
import Dashboard from './components/Dashboard';
import Logo from './components/Logo';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Landing from './components/LandingPage';
import './assets/base.scss';
import "./App.css";

import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";
import FitnessCalendar from "./components/FitnessCalendar";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import { library } from '@fortawesome/fontawesome-svg-core';
import {
  fas,
  faDownload,
  faArrowRight,
} from '@fortawesome/free-solid-svg-icons';

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
  const [currentPage, setCurrentPage] = useState("");
  return (
    <ApolloProvider client={client}>
      <div>
        <BrowserRouter>
          <div>
            <Routes>
              <Route path="/landing" element={<Landing />} />
              <Route path="/login" element={<LoginPage />} />
              <Route path="/signup" element={<SignUp />}></Route>
              <Route
                path="*"
                element={[
                  <Logo />,
                  <Header currentPage={currentPage} />,
                  <Sidebar />,
                ]}
              ></Route>
            </Routes>
            <Routes>
              <Route
                path="/dashboard"
                element={<Dashboard setCurrentPage={setCurrentPage} />}
              />
              <Route path="/calendar" element={<FitnessCalendar />} />
              <Route
                path="/profile"
                element={<ProfilePage setCurrentPage={setCurrentPage} />}
              />
              <Route path="/calendar" element={<FitnessCalendar />} />
              <Route
                path="/workoutstatistics"
                element={<WorkoutStatistics />}
              />
            </Routes>
          </div>
        </BrowserRouter>
      </div>
    </ApolloProvider>
  );
}

export default App;