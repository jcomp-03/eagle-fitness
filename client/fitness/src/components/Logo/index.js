import React from "react";
import Chart from "react-apexcharts";
import bootstrap from "bootstrap";

function Logo() {
  return (
    <div className="nav-header">
      <a href="index.html" className="brand-logo">
        <img className="logo-abbr" src="./images/logo.png" alt="" />
        <img className="logo-compact" src="./images/logo-text.png" alt="" />
        <img className="brand-title" src="./images/logo-text.png" alt="" />
      </a>
    </div>
  );
}

export default Logo;
