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
    BrowserRouter as Router, // renamed as Router to follow the module's style
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
import WorkoutPlan from "./components/workoutPlan";
library.add(
  fas,
  faDownload,
  faArrowRight,
)

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
  const [profileInfo, setProfileInfo] = useState({firstName: "", lastName: "", username: ""})
  return (
    <ApolloProvider client={client}>
        <Router>
          <div>
            <Routes>
              <Route path="/landing" element={<Landing />} />
              <Route path="/login" element={<LoginPage />} />
              <Route path="/signup" element={<SignUp />} />
              <Route index element={<Landing />} />
              <Route
                path="*"
                element={[
                  <Logo />,
                  <Header currentPage={currentPage} profileInfo={profileInfo} />,
                  <Sidebar currentPage={currentPage} />,
                ]}
              ></Route>
            </Routes>
            <Routes>
              <Route
                path="/dashboard"
                element={<Dashboard setCurrentPage={setCurrentPage} />}
              />
              <Route path="/calendar" element={<FitnessCalendar setCurrentPage={setCurrentPage} />} />
              <Route
                path="/profile"
                element={<ProfilePage setCurrentPage={setCurrentPage} setProfileInfo={setProfileInfo} />}
              />
              <Route
                path="/workoutstatistics"
                element={<WorkoutStatistics setCurrentPage={setCurrentPage} />}
              />
              <Route path="/workoutplan" element={<WorkoutPlan setCurrentPage={setCurrentPage}></WorkoutPlan>}></Route>
            </Routes>
          </div>
        </Router>
    </ApolloProvider>
  );
}

export default App;