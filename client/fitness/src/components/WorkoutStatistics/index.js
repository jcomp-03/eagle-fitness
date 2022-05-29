import React from "react";
// import ApexCharts from "apexcharts";
// import Chart from 'react-apexcharts';
import WorkoutStatisticsRunning from "../WorkoutStatisticsRunning";
import WorkoutStatisticsCycling from "../WorkoutStatisticsCycling";
function WorkoutStatistics() {


  return (
    <div>
      <h1>This is h1 text</h1>
      <WorkoutStatisticsRunning />
      <WorkoutStatisticsCycling />
    </div>
  );
}

export default WorkoutStatistics;
