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

  setCurrentPage("Workout Statistics");

  // hardcoded data to pass to charts
  const chartOneData = [4, 3, 6, 4, 5, 7];
  const chartTwoData = [10, 13, 12, 12, 11, 14];

  // set formState to empty object
  const [formState, setFormState] = useState({});

  // use useQuery hook to make a query request
  const { loading, data } = useQuery(QUERY_ME);
  const me = data?.me;
  // console.log("*****me.milesRun is*****", me.milesRun);

  // do I need a state for my charts?????????????????????
  // hardcoded data to pass to charts
  const [chartState, setChartState] = useState(
    {
      runningData: [4, 3, 6, 4, 5, 7],
      cyclingData: [10, 13, 12, 12, 11, 14]
    }
  );

  // create JavaScript function updateChartData that wraps around
  // the mutation updatMilesRunOrCycled
  const [updateMiles, { error }] = useMutation(ADD_MILES_TO_WORKOUT_STATS);

  // if there's any changes to the form fields, handle them here
  const handleChange = (event) => {
    console.log("*****Inside handleChange*****");
    const { name, value } = event.target;

    console.log("******event is: *****", event, name, value);

    console.log("******formState before setFormState", formState);
    setFormState({
      ...formState,
      [name]: value,
    });
    console.log("******formState after setFormState", formState);
  };

  // function to run when form is submitted
  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      if (formState.value === "") {
        console.log("*****formState.value is: ", formState.value);
      }
      await updateMiles({
        variables: { ...formState },
      });

      window.location.reload();

      // console.log(formState)
    } catch (e) {
      setFormState({});
      console.error(e);
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
        <h3 className="mb-1">
          Welcome back, {me.firstName}, have any recent cardio workouts you wish
          to add to your stats? Enter them below.{" "}
        </h3>
        <form
          onSubmit={handleFormSubmit}
          className="d-flex flex-column border border-danger border-2"
        >
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
              placeholder="I.e. 6"
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
              placeholder="I.e. 15"
            ></input>
          </div>
          <div className="text-center mt-4">
            <button type="submit" className="btn bg-primary text-success">
              Enter miles to my stats
            </button>
          </div>
          {error && (
            <p className="text-danger">There was a problem with your data</p>
          )}
        </form>
        <div className="d-flex border border-2 border-warning mt-2 justify-content-sm-around">
          <WorkoutStatisticsRunning chartState={chartState} setChartState={setChartState} />
          <WorkoutStatisticsCycling chartState={chartState} setChartState={setChartState} />
        </div>
      </div>
    </div>
  );
}

export default WorkoutStatistics;
