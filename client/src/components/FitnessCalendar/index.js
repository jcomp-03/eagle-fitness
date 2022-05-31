import React, { useState } from "react";
import DatePicker from "react-datepicker";
import moment from "moment";
import "react-datepicker/dist/react-datepicker.css";
import { Link } from "react-router-dom";

function FitnessCalendar({setCurrentPage}) {
    setCurrentPage("Calendar")
  const [newWorkout, setNewWorkout] = useState({
    name: "",
    workoutType: "",
    startTime: null,
    durationMinutes: null,
  });
  const [workouts, setWorkouts] = useState([]);

  const handleUpdateNewWorkout = (key, val) => {
    const updatedWorkout = { ...newWorkout };
    updatedWorkout[key] = val;
    setNewWorkout(updatedWorkout);
  };

  const handleSubmitNewWorkout = () => {
    // TODO: Handle submitting to api with GraphQL
    setWorkouts([...workouts, newWorkout]);
    setNewWorkout({
      name: "",
      workoutType: "",
      startTime: null,
      durationMinutes: null,
    });
  };

  const handleDeleteWorkout = (i) => {
    // TODO: Handle submitting delete request to api
    const updatedWorkouts = [...workouts];
    updatedWorkouts.splice(i);
    setWorkouts(updatedWorkouts);
  };

  return (
    <div className="content-body">
      <div className="container-fluid pt-0">
        <div className="page-titles">
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <Link to="/dashboard">Dashboard</Link>
            </li>
            <li className="breadcrumb-item active">
              <a href="#">Calendar</a>
            </li>
          </ol>
        </div>

        <div className="row">
          <div className="col-xl-3">
            <div className="card">
              <div className="card-body">
                <h4 className="card-intro-title">Add a Workout</h4>
                <div>
                  <div className="form-group">
                    <input
                      type="text"
                      value={newWorkout.name}
                      onChange={(e) => {
                        handleUpdateNewWorkout("name", e.target.value);
                      }}
                      className="form-control input-default "
                      placeholder="Workout Name..."
                    />
                  </div>
                  <div className="form-group">
                    <select
                      className="form-select"
                      value={newWorkout.workoutType}
                      onChange={(e) => {
                        handleUpdateNewWorkout("workoutType", e.target.value);
                      }}
                    >
                      <option disabled value="">
                        {" "}
                        -- Workout Type --
                      </option>
                      <option value="strength">Strength</option>
                      <option value="cardio">Cardio</option>
                      <option value="yoga">Yoga</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label>Start Time:</label>
                    <DatePicker
                      showTimeSelect
                      dateFormat="MMMM d, yyyy h:mm aa"
                      selected={newWorkout.startTime}
                      onChange={(date) => {
                        handleUpdateNewWorkout("startTime", date);
                      }}
                    />
                  </div>
                  <button
                    className="btn btn-primary btn-event w-100"
                    onClick={handleSubmitNewWorkout}
                  >
                    <span className="align-middle">
                      <i className="ti-plus"></i>
                    </span>{" "}
                    Create New
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="Sample col-9">
            <div className="calendar-container">
              <main className="calendar_container_content">
                {workouts.map((w, i) => {
                    
                  return (
                    <div key={i}>
                      Name: {w.name}
                      Type: {w.workoutType}
                      Date: {moment(w.startTime).calendar()}
                      <button onClick={handleDeleteWorkout}>delete</button>
                    </div>
                  );
                })}
              </main>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
{/* 
// for your consideration :D
<div className="card font-weight-bold p-3" key={i}>
    Name: {w.name} <br></br>
    Type: {w.workoutType} <br></br>
    Date: {moment(w.startTime).calendar()} <br></br>
    <button className="btn btn-sm w-50 my-3 bg-danger text-light" onClick={handleDeleteWorkout}>delete</button>
</div> */}
export default FitnessCalendar;


