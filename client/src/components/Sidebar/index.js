import React from "react";
import { Link } from "react-router-dom";

function Sidebar({currentPage}) {
  console.log(currentPage)
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
            <Link to="/workoutplan">
              <i className="flaticon-381-television"></i>
              <span className="nav-text">Workout Plan</span>
            </Link>
          </li>
          <li>
            <Link to="/workoutstatistics">
            <i className="flaticon-381-controls-3"></i>
              <span className="nav-text">Workout Statistics</span>
            </Link>
          </li>
          <li>
          <Link to="/calendar">
              <i className="flaticon-381-networking"></i>
              <span className="nav-text">Calendar</span>
          </Link>
          </li>
          <li>
            <Link to="/mealplan">
              <i className="flaticon-381-television"></i>
              <span className="nav-text">Meal Plan</span>
            </Link>
          </li>
        </ul>
        <Link to="/calendar">
        <div className="add-menu-sidebar">
          <img src="images/calendar.png" alt="" className="mr-3" />
          <p className="font-w500 mb-0">Create Workout Plan Now</p>
        </div>
        </Link>
        <div className="copyright">
          <p>
            <strong>Eagle Fitness</strong> © 2022 All Rights
            Reserved
          </p>
          <p>
            Made with <span className="heart"></span> by Alex, Abraham, Megan, and James
          </p>
          <form action="https://www.paypal.com/donate" method="post" target="_top">
            <input type="hidden" name="business" value="P9TV4GMNPPV84" />
            <input type="hidden" name="no_recurring" value="0" />
            <input type="hidden" name="item_name" value="For the site development" />
            <input type="hidden" name="currency_code" value="USD" />
            <input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_donate_LG.gif" border="0" name="submit" title="PayPal - The safer, easier way to pay online!" alt="Donate with PayPal button" />
            <img alt="" border="0" src="https://www.paypal.com/en_US/i/scr/pixel.gif" width="1" height="1" />
          </form>

        </div>
      </div>
    </div>
  );
}

export default Sidebar;
