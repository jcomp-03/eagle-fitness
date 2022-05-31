import React from "react";
// import ApexCharts from "apexcharts";
// import Chart from 'react-apexcharts';
import WorkoutStatisticsRunning from "../WorkoutStatisticsRunning";
import WorkoutStatisticsCycling from "../WorkoutStatisticsCycling";
import { Link } from "react-router-dom";
function WorkoutStatistics({ setCurrentPage }) {
  setCurrentPage("Workout Statistics");

  return (
    <div className="content-body">
      <div className="container-fluid pt-0">
        <div className="page-titles">
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <Link to="/dashboard">Dashboard</Link>
            </li>
            <li className="breadcrumb-item active">
              <a href="#">Workout Statistics</a>
            </li>
          </ol>
        </div>
        <h1>This is h1 text</h1>
        <WorkoutStatisticsRunning />
        <WorkoutStatisticsCycling />
      </div>
    </div>
  );
}

export default WorkoutStatistics;
