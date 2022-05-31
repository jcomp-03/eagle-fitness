import { useMutation, useQuery } from "@apollo/client";
import React from "react";
import { Link } from "react-router-dom";
import { DELETE_USER_WORKOUT } from "../../utils/graphQL/mutations";
import { QUERY_ME } from "../../utils/graphQL/queries";

function WorkoutPlan ({setCurrentPage}) {
  setCurrentPage("Workout Plan")
  const {data, loading} = useQuery(QUERY_ME)
  const[deleteWorkout, {error}] = useMutation(DELETE_USER_WORKOUT)

  if (loading) {
    return(<div className="content-body"><h1>Please Wait...</h1></div>)
  }
  const workouts = data?.me.workouts
  console.log(workouts)

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

  return(
    <div className="content-body">
			<div className="container-fluid pt-0">
      <div className="page-titles">
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <Link to="/dashboard">Dashboard</Link>
              </li>
              <li className="breadcrumb-item active">
                <Link to="#">Workout Plan</Link>
              </li>
            </ol>
          </div>
				<div className="row">
					<div className="col-xl-12 col-xxl-12">
						<div className="row">
							<div className="col-xl-12">
								<div className="card plan-list">
									<div className="card-header d-sm-flex flex-wrap d-block pb-0 border-0">
										<div className="mx-auto pr-3 mb-3">
											<h4 className="text-black fs-20">Plan List</h4>
										</div>
									</div>
									<div className="card-body tab-content pt-2">
                    {workouts.length > 0 ? workouts.map((workout) => (
                      <div key={workout._id} className="d-flex border-bottom flex-wrap pt-3 list-row align-items-center mb-2">
                            <div className="col-xl-5 col-xxl-7 col-lg-6 col-sm-7 d-flex align-items-center">
                              {/* <div className="list-icon bg-light mr-3 mb-3">
                                <p className="fs-24 text-black mb-0 mt-2">21</p>
                                <span className="fs-14 text-black">Tue</span>
                              </div> */}
                              <div className="info mb-3">
                                <h4 className="fs-20 "><a href="workout-statistic.html" className="text-black">{workout.name}</a></h4>
                                <span className="pr-3">{workout.workoutDescription}</span>
                                <div className="form-check">
                                  <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"></input>
                                  <label className="form-check-label" htmlFor="flexCheckDefault">
                                  <span className="text-primary font-w600">Mark as finished</span>
                                  </label>
                                </div>											
                              </div>
                            </div>
                            <div className="col-xl-2 col-xxl-3 col-lg-2 col-sm-3 activities mb-3 mr-auto pl-3 pr-3 text-sm-center col-6">
                              <span className="text-dark ml-2"><strong>Type: {workout.workoutType}</strong></span> <br></br>
                              {/* if the big date elements ends up not being used */}
                              <span className="text-dark ml-2">Start Time: DATA.START</span>
                            </div>
                            <div className="col-xl-5 col-xxl-2 col-lg-4 col-sm-2 d-flex align-items-center col-6">
                              <div className="dropdown more-dropdown mb-3">
                                <a href="javascript:void(0)" className="more-button" data-toggle="dropdown" aria-expanded="false">
                                  <svg width="6" height="26" viewBox="0 0 6 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M6 3C6 4.65685 4.65685 6 3 6C1.34315 6 0 4.65685 0 3C0 1.34315 1.34315 0 3 0C4.65685 0 6 1.34315 6 3Z" fill="#585858"></path>
                                    <path d="M6 13C6 14.6569 4.65685 16 3 16C1.34315 16 0 14.6569 0 13C0 11.3431 1.34315 10 3 10C4.65685 10 6 11.3431 6 13Z" fill="#585858"></path>
                                    <path d="M6 23C6 24.6569 4.65685 26 3 26C1.34315 26 0 24.6569 0 23C0 21.3431 1.34315 20 3 20C4.65685 20 6 21.3431 6 23Z" fill="#585858"></path>
                                  </svg>
                                </a>
                                <div className="dropdown-menu dropdown-menu-right">
                                  <a className="dropdown-item" name={workout._id} onClick={handleWorkoutDelete} href="javascript:void(0);">Delete</a>
                                </div>
                                {error && (
                                  <p className="text-danger">
                                    There was a problem!
                                  </p>
                                )}
                              </div>
                            </div>
                      </div>
                    )) : <p className="text-center font-weight-bold">User has no saved workouts</p> }
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
            </div>
        </div>
  )
}

export default WorkoutPlan