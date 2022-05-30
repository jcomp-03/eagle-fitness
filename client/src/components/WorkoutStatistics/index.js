import React from "react";
// import ApexCharts from "apexcharts";
// import Chart from 'react-apexcharts';
import WorkoutStatisticsRunning from "../WorkoutStatisticsRunning";
import WorkoutStatisticsCycling from "../WorkoutStatisticsCycling";
function WorkoutStatistics() {

  return (
    <div className="content-body container">
      <div className="row">
        <WorkoutStatisticsRunning />
        <WorkoutStatisticsCycling />
      </div>
    </div>
  );
}

export default WorkoutStatistics;
