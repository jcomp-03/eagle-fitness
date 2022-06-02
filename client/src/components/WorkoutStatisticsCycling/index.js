import React from "react";
// import ApexCharts from "apexcharts";
import Chart from "react-apexcharts";

function WorkoutStatisticsCycling({ chartData }) {
  // data values to plot and name
  const series = [
    {
      type: "line", // render line chart for cumulative miles
      name: "Cumul. Miles",
      data: [1,2,3,4,5,6],
    }
  ];

  // chart options you want to specify
  const options = {
    chart: {
      toolbar: false,
      background: "white",
      foreColor: "black",
      stacked: true,
      //   fill: {
      //     colors: "#A02CFA",
      //   },
    },
    xaxis: {
      categories: [
        "Wk1",
        "Wk2",
        "Wk3",
        "Wk4",
        "Wk5",
        "Wk6",
        "Wk7",
        "Wk8",
        "Wk9",
      ],
    },
    yaxis: [
      // this object is for cumulative miles cycled
      {
        axisTicks: {
          show: true,
        },
        axisBorder: {
          show: true,
          //   color: "#FF1654",
        },
        labels: {
          style: {
            // colors: "#FF1654",
            fontSize: "16px",
          },
        },
        title: {
          text: series[0].name,
          style: {
            // color: "#FF1654",
            fontSize: "16px",
          },
        },
      },
      // this object is for weekly distance covered
      // {
      //   opposite: true,
      //   axisTicks: {
      //     show: true,
      //   },
      //   axisBorder: {
      //     show: true,
      //     //   color: "#247BA0",
      //   },
      //   labels: {
      //     style: {
      //       // colors: "#247BA0",
      //       fontSize: "16px",
      //     },
      //   },
      //   title: {
      //     text: series[1].name,
      //     style: {
      //       // color: "#247BA0",
      //       fontSize: "16px",
      //     },
      //   },
      // },
    ],
    legend: {
      show: false,
    },
    stroke: {
      curve: "smooth",
      colors: "#FF3282",
    },
    markers: {
      size: 3,
    },
    plotOptions: {
      bar: {
        // distributed: true,
      },
    },
  };

  return (
    <div className="mx-1 col-3 col-xl-4 col-lg-5 border border-info border-2">
    <div className="card">
        <div className="card-header pb-0 border-0">
          <span className="p-3 mr-3 rounded bg-secondary">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10.8586 5.22593L5.87121 10.5542C5.50758 11.0845 5.64394 11.8067 6.17172 12.1678L11.1945 15.6098V18.9557C11.1945 19.5921 11.6995 20.1249 12.3359 20.1376C12.9874 20.1476 13.5177 19.6249 13.5177 18.976V15.0012C13.5177 14.6173 13.3283 14.2588 13.0126 14.0441L9.79041 11.8345L12.5025 8.9583L13.8914 12.1224C14.0758 12.5441 14.4949 12.8169 14.9546 12.8169H19.1844C19.8207 12.8169 20.3536 12.3118 20.3662 11.6755C20.3763 11.0239 19.8536 10.4936 19.2046 10.4936H15.7172C15.2576 9.44818 14.7677 8.41282 14.3409 7.35222C14.1237 6.81686 14.0025 6.58454 13.6036 6.21585C13.5227 6.1401 12.9596 5.62495 12.4571 5.16535C11.995 4.74613 11.2828 4.77391 10.8586 5.22593Z"
                fill="white"
              />
              <path
                d="M15.6162 5.80675C17.0861 5.80675 18.2778 4.61511 18.2778 3.14514C18.2778 1.67517 17.0861 0.483521 15.6162 0.483521C14.1462 0.483521 12.9545 1.67517 12.9545 3.14514C12.9545 4.61511 14.1462 5.80675 15.6162 5.80675Z"
                fill="white"
              />
              <path
                d="M4.89899 23.5163C7.60463 23.5163 9.79798 21.323 9.79798 18.6174C9.79798 15.9117 7.60463 13.7184 4.89899 13.7184C2.19335 13.7184 0 15.9117 0 18.6174C0 21.323 2.19335 23.5163 4.89899 23.5163Z"
                fill="white"
              />
              <path
                d="M19.101 23.5163C21.8066 23.5163 24 21.323 24 18.6174C24 15.9117 21.8066 13.7184 19.101 13.7184C16.3954 13.7184 14.202 15.9117 14.202 18.6174C14.202 21.323 16.3954 23.5163 19.101 23.5163Z"
                fill="white"
              />
            </svg>
          </span>
          <div className="mr-auto pr-3">
            <h4 className="text-black fs-20">Cycling</h4>
            <p className="fs-13 mb-0 text-black">
              Lorem ipsum dolor sit amet, consectetur
            </p>
          </div>
        </div>
        <div className="card-body pb-0">
          <Chart options={options} series={series} type="line" />
        </div>
      </div>
    </div>
  );
}

export default WorkoutStatisticsCycling;
