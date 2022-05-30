import React from "react";
import { Link } from "react-router-dom";

function Logo() {
  return (
    <div className="nav-header">
      <Link className="brand-logo" to="/dashboard">
        <img className="logo-abbr" src="./images/logo.png" alt="" />
        <img className="logo-compact" src="./images/logo-text.png" alt="" />
        <img className="brand-title" src="./images/logo-text.png" alt="" />
      </Link>
    </div>
  );
}

export default Logo;
