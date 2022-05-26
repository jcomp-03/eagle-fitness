import React from "react";
import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <div className="deznav">
      <div className="deznav-scroll">
        <ul className="metismenu" id="menu">
          <li>
            <Link to="/dashboard">
              <i className="flaticon-381-networking"></i>
              <span className="nav-text">Dashboard</span>
            </Link>
          </li>
          <li>
            <a href="#" aria-expanded="false">
              <i className="flaticon-381-television"></i>
              <span className="nav-text">Workout Plan</span>
            </a>
          </li>
          <li>
            <a href="#" aria-expanded="false">
              <i className="flaticon-381-controls-3"></i>
              <span className="nav-text">Workout Statistics</span>
            </a>
          </li>
          <li>
          <Link to="/calendar">
              <i className="flaticon-381-networking"></i>
              <span className="nav-text">Calendar</span>
          </Link>
          </li>
          <li>
            <a href="#" aria-expanded="false">
              <i className="flaticon-381-television"></i>
              <span className="nav-text">Meal Plan</span>
            </a>
          </li>
        </ul>
        <div className="add-menu-sidebar">
          <img src="images/calendar.png" alt="" className="mr-3" />
          <p className="font-w500 mb-0">Create Workout Plan Now</p>
        </div>
        <div className="copyright">
          <p>
            <strong>Gymove Fitness Admin Dashboard</strong> © 2022 All Rights
            Reserved
          </p>
          <p>
            Made with <span className="heart"></span> by DexignZone
          </p>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
