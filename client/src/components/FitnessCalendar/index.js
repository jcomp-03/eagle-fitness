import React, { useState } from "react";
import DatePicker from "react-datepicker";
import moment from "moment";
import "react-datepicker/dist/react-datepicker.css";
import { Link } from "react-router-dom";
import { useMutation, useQuery } from "@apollo/client";
import { QUERY_ME } from "../../utils/graphQL/queries";
import {ADD_USER_WORKOUT, ADD_WORKOUT, DELETE_USER_WORKOUT} from "../../utils/graphQL/mutations";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'

function FitnessCalendar({setCurrentPage}) {
  setCurrentPage("Calendar")
  const [newWorkout, setNewWorkout] = useState({
    name: "",
    workoutType: "",
    workoutDescription: "",
  });
  const [workouts, setWorkouts] = useState([]);

  const {data, loading} = useQuery(QUERY_ME);
  const [saveWorkout] = useMutation(ADD_WORKOUT);
  const [addUserWorkout] = useMutation(ADD_USER_WORKOUT)
  const[deleteWorkout, {error}] = useMutation(DELETE_USER_WORKOUT)

  const workoutsCreated = data?.me.workouts || [];
  console.log("workoutsCreated", data)

  const handleUpdateNewWorkout = (key, val) => {
    const updatedWorkout = { ...newWorkout };
    updatedWorkout[key] = val;
    setNewWorkout(updatedWorkout);
  };

  function handleChange(e) {
      let { name, value } = e.target;
      setNewWorkout({
        ...newWorkout,
        [name]: value,
      });
  }

  function handleDateChange(dateString) {
    let startTime = "startTime";
    setNewWorkout({
      ...newWorkout,
      [startTime]: dateString
    });
  }

  const handleSubmitNewWorkout = async (workoutId) => {
    const workoutToSave = workouts.find((workout) => workout.workoutId === workoutId);

    try {
      const {data} = await saveWorkout({
        variables: {...newWorkout},
      });

      await addUserWorkout({
        variables:{workout: data.addWorkout._id}
      })


      if (!data) {
        throw new Error('something went wrong!');
      }

      setWorkouts([...workouts, newWorkout]);
      setNewWorkout({
        name: "",
        workoutType: "",
        workoutDescription: "",
        startTime: null
      });
    } catch (err) {
      console.error(err);
    }
  };

  async function handleWorkoutDelete(event) {
    // console.log(event.target.name)
    const workoutId = event.target.name
    try {
      await deleteWorkout({
        variables: {
          workout: workoutId
        }
      })
      window.location.reload()
    } catch (error) {
      console.error(error)
    }
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
              <a href="#">Calendar</a>
            </li>
          </ol>
        </div>

        <div className="row">
          <div className="col-xl-4">
            <div className="card calendar-siderbar">
              <div className="card-body">
                <h4 className="card-intro-title">Add a Workout</h4>
                <div>
                  <div className="form-group">
                    <input
                      type="text"
                      value={newWorkout.name}
                      onChange={handleChange}
                      name="name"
                      className="form-control input-default "
                      placeholder="Workout Name..."
                    />
                  </div>
                  <textarea
                    value={newWorkout.workoutDescription}
                    onChange={handleChange}
                    name="workoutDescription"
                    className="form-control input-default "
                    placeholder="Workout Description..."
                  />
                  <div className="form-group">
                    <select
                      className="form-select type-dropdown"
                      value={newWorkout.workoutType}
                      onChange={handleChange}
                      name={"workoutType"}
                    >
                      <option disabled value="">
                        {" "}
                          Workout Type
                      </option>
                      <option value="strength">Strength</option>
                      <option value="cardio">Cardio</option>
                      <option value="yoga">Yoga</option>
                    </select>
                  </div>
                  <div className="form-group d-flex">
                    <label>Start Time:</label>
                    <DatePicker
                      showTimeSelect
                      name="startTime"
                      dateFormat="MMMM d, yyyy h:mm aa"
                      selected={newWorkout.startTime}
                      onChange={handleDateChange}
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
          <div className="Sample col-8">
            <div className="calendar-container">
              <main className="calendar_container_content">
                <div className="card-header d-sm-flex flex-wrap d-block border-0 mb-4">
                  <div className="mr-auto pr-3 mb-3">
                    <h4 className="text-black fs-20">Plan List</h4>
                    {workouts.length > 0 ? <p className="fs-13 mb-0 text-black">See your workouts!</p> : <p className="fs-13 mb-0 text-black">You should add a workout!</p>}
                  </div>
                </div>
                {workoutsCreated.slice(0, 3).map((w, i) => {

                  return (
                    <div className= "card p-3 d-flex container" key={i}>
                      <div className= "row">
                        <div className="col-3 d-flex">
                         <h4 className="date"> {moment(w.startTime).calendar()} </h4>
                        </div>
                        <div className="col-6">
                          <h3> {w.name} </h3>
                          {w.workoutDescription}
                        </div>
                        <div className="col-3">
                          {w.workoutType}
                        </div>
                      </div>
                      <div className="row">
                        <div className="col d-flex justify-content-end">
                          <button className= "btn btn-danger"  name={w._id} onClick={handleWorkoutDelete}>delete  <FontAwesomeIcon icon="fa-solid fa-trash" /></button>
                        </div>
                      </div>
                    </div>
                  );
                })}
                <div className="row">
                  <div className="col d-flex justify-content-center pb-4">
                    <button className= "btn btn-event btn-primary"> View More Here </button>
                  </div>
                </div>
              </main>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default FitnessCalendar;
