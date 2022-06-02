import React, { useState } from "react";
import auth from "../../utils/auth";
// import ApexCharts from "apexcharts";
// import Chart from 'react-apexcharts';
import WorkoutStatisticsRunning from "../WorkoutStatisticsRunning";
import WorkoutStatisticsCycling from "../WorkoutStatisticsCycling";
import { Link } from "react-router-dom";
import { useMutation, useQuery } from "@apollo/client";
import { ADD_MILES_TO_WORKOUT_STATS } from "../../utils/graphQL/mutations";
import { QUERY_ME } from "../../utils/graphQL/queries";

function WorkoutStatistics({ setCurrentPage }) {
  if (!auth.loggedIn()) {
    window.location.replace("/login");
  }

  // setCurrentPage("Workout Statistics");

  // use useState hook to set initial formState to empty object
  const [formState, setFormState] = useState({
    milesRun: "",
    milesCycled: "",
  });
  // console.log("*****formState*****", formState);

  // use useQuery hook to make a query request
  const { loading, data } = useQuery(QUERY_ME);
  const me = data?.me;
  // console.log(data);
  // console.log(me);

  // set the data for the charts here
  const [chartData, setChartData] = useState({
    runningData: me.milesRun,
    cyclingData: me.milesCycled,
  });
  // console.log("*****chartData*****", chartData)

  // create JavaScript function updateMiles that wraps around
  // the mutation updatMilesRunOrCycled
  const [updateMiles, { error }] = useMutation(ADD_MILES_TO_WORKOUT_STATS);

  // if there's any changes to the form fields, handle them here
  const handleChange = (event) => {
    setFormState({
      ...formState,
      [event.target.name]: parseInt(event.target.value),
    });
  };
  // console.log("******formState after setFormState*****", formState);

  // function to run when form is submitted
  const handleFormSubmit = async (event) => {
    event.preventDefault();
    console.log("*****Inside handleFormSubmit*****", formState);

    try {
      const { data } = await updateMiles({
        variables: { ...formState },
      });
      console.log("*****handleFormSubmit:data*****", data);
      setChartData({
        runningData: data.updateMilesRunOrCycled.milesRun,
        cyclingData: data.updateMilesRunOrCycled.milesCycled,
      });
    } catch (event) {
      console.error(event);
      setFormState({
        milesRun: "",
        milesCycled: "",
      });
    }
  };

  if (loading) {
    return (
      <div className="content-body">
        <h1>Loading. Just a moment...</h1>
      </div>
    );
  }

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
        <h3 className="mb-1 text-center">
          Welcome back, {me.firstName}, have any recent cardio workouts you wish
          to add to your stats? Enter them below.
        </h3>
        <form onSubmit={handleFormSubmit} className="d-flex flex-column">
          <div className="form-group col-12 col-md-8 col-lg-6">
            {/* move the asteric to the beginning of each word */}
            <label className="mb-1 text-purple">
              <strong>Miles ran/jogged in last workout?</strong>
            </label>
            <input
              onChange={handleChange}
              name="milesRun"
              type="number"
              className="form-control"
              placeholder="i.e. 6"
              value={formState.milesRun}
            ></input>
          </div>
          <div className="form-group col-12 col-md-8 col-lg-6">
            <label className="mb-1 text-purple">
              <strong>Miles cycled in last workout?</strong>
            </label>
            <input
              onChange={handleChange}
              name="milesCycled"
              type="number"
              className="form-control"
              placeholder="i.e. 15"
              value={formState.milesCycled}
            ></input>
          </div>
          <div className="text-center mt-4">
            <button type="submit" className="btn bg-primary text-success">
              Submit miles
            </button>
          </div>
          {error && (
            <p className="text-danger">There was a problem with your data</p>
          )}
        </form>
        <div className="d-flex row border border-2 border-warning mt-3 justify-content-sm-around">
          <WorkoutStatisticsRunning chartData={chartData} />
          <WorkoutStatisticsCycling chartData={chartData} />
        </div>
      </div>
    </div>
  );
}

export default WorkoutStatistics;
