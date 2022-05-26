import './App.css';
import React from 'react';
import { ReactDOM } from 'react';
import { BrowserRouter } from 'react-router-dom';
import Dashboard from './components/Dashboard.js';
import Logo from './components/Logo';
import Header from './components/Header';
import Sidebar from './components/Sidebar';


function App() {
  return (
    <div>
        <Logo />
        <Header />
        <Sidebar />
        <div className="content-body">
          <Dashboard />
        </div>
    </div>
  );
}

export default App;
