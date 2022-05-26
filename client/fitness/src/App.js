import "./App.css";
import React from "react";
import { ReactDOM } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Dashboard from "./components/Dashboard";
import Logo from "./components/Logo";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import FitnessCalendar from "./components/FitnessCalendar";

function App() {
  return (
    <BrowserRouter>
      <div>
        <Logo />
        <Header />
        <Sidebar />
        <div className="content-body">
        <Routes>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/calendar" element={<FitnessCalendar />} /> 
          <Route index element={<Dashboard />} />
        </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
