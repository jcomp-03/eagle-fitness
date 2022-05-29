import React from "react";
import ApexCharts from "apexcharts";

function WorkoutStatistics() {
  var options = {
    chart: {
      type: "line",
    },
    series: [
      {
        name: "sales",
        data: [30, 40, 35, 50, 49, 60, 70, 91, 125],
      },
    ],
    xaxis: {
      categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999],
    },
  };

  var chart = new ApexCharts(document.querySelector("#chart"), options);

    return <h1>This is h1 text</h1>;
  
}

export default WorkoutStatistics;
