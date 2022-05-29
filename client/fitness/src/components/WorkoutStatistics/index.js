import React from "react";
// import ApexCharts from "apexcharts";
import Chart from 'react-apexcharts';

function WorkoutStatistics() {
  // data values to plot and name
  const series = [
    {
      name: "sales",
      data: [30, 40, 35, 50, 49, 60, 70, 91, 125],
    },
  ];

  // chart options you want to specify
  const options = {
    chart: {
      background: '#f4f4f4',
      foreColor: '#333'
    },
    xaxis: {
      categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999],
    },
  };

  // var chart = new ApexCharts(document.querySelector("#chart"), options);

  return (
    <div>
      <h1>This is h1 text</h1>
      <Chart 
        options={options}
        series={series}
        type="line"
        height="350"
        width="100%"
        />
    </div>
  );
}

export default WorkoutStatistics;
