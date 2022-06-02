import { useQuery } from "@apollo/client";
import React from "react";
import { Link } from "react-router-dom";
import auth from "../../utils/auth";
import { QUERY_ME } from "../../utils/graphQL/queries";

function Header({currentPage}) {
// console.log(profileInfo)
if(!auth.loggedIn()) {
  window.location.replace("/")
}
const { loading, data } = useQuery(QUERY_ME);
  if (loading) {
    return(<div><strong>Please Wait...</strong></div>)
  }
  const me = data?.me;
  function logout() {
    auth.logout()
  }

  return (
    <div className="header top">
      <div className="header-content">
        <nav className="navbar navbar-expand">
          <div className="collapse navbar-collapse justify-content-between">
            <div className="header-left">
              <div className="dashboard_bar">{currentPage}</div>
            </div>
            <ul className="navbar-nav header-right">
              <li className="nav-item dropdown header-profile">
                <a
                  className="nav-link"
                  href="#"
                  role="button"
                  data-toggle="dropdown"
                >
                  <img src="images/profile/17.jpg" width="20" alt="" />
                  <div className="header-info">
                    <span className="text-black">
                      <strong>{me.username}</strong>
                    </span>
                    <p className="fs-12 mb-0">{`${me.firstName} ${me.lastName}`}</p>
                  </div>
                </a>
                <div className="dropdown-menu dropdown-menu-right shadow">
                  <Link className="dropdown-item ai-icon" to='/profile'>
                    <span className="ml-2">Profile</span>
                  </Link>
                  <Link className="dropdown-item ai-icon d-xl-none" to='/workoutplan'>
                    <span className="ml-2">Workout Plan</span>
                  </Link>
                  <Link className="dropdown-item ai-icon d-xl-none" to='/workoutstatistics'>
                    <span className="ml-2">Workout Statistics</span>
                  </Link>
                  <Link className="dropdown-item ai-icon d-xl-none" to='/calendar'>
                    <span className="ml-2">Calendar</span>
                  </Link>
                  <Link className="dropdown-item ai-icon d-xl-none" to='/mealplan'>
                    <span className="ml-2">Meal Plan</span>
                  </Link>
                  <a onClick={logout} href="#" className="dropdown-item ai-icon">
                    <svg
                      id="icon-logout"
                      xmlns="http://www.w3.org/2000/svg"
                      className="text-danger"
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path>
                      <polyline points="16 17 21 12 16 7"></polyline>
                      <line x1="21" y1="12" x2="9" y2="12"></line>
                    </svg>
                    <span className="ml-2">Logout </span>
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </div>
  );
}

export default Header;
