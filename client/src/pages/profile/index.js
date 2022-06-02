import { useQuery, useMutation } from "@apollo/client";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import auth from "../../utils/auth";
import { UPDATE_USER } from "../../utils/graphQL/mutations";
import { QUERY_ME } from "../../utils/graphQL/queries";

function ProfilePage({ setCurrentPage, setProfileInfo }) {
  if (!auth.loggedIn()) {
    window.location.replace("/login");
  }
  setCurrentPage("Profile");

  const [formState, setFormState] = useState({});
  const { loading, data } = useQuery(QUERY_ME);
  const me = data?.me;
  const [changeInfo, { error }] = useMutation(UPDATE_USER);

  // update state based on form input changes
  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value.length>0?value:null,
    });
  };

  // submit form
  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      if (formState.value === "") {
        console.log(formState.value);
      }
      await changeInfo({
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
        <h1>Please Wait...</h1>
      </div>
    );
  }

  return (
    <div className="content-body">
      <div className="">
        <div className="container-fluid pt-0">
          <div className="page-titles">
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <Link to="/dashboard">Dashboard</Link>
              </li>
              <li className="breadcrumb-item active">
                <Link to="/profile">Profile</Link>
              </li>
            </ol>
          </div>
          {/* <!-- row --> */}
          <div className="row">
            <div className="col-lg-12">
              <div className="profile card card-body px-3 pt-3 pb-0">
                <div className="profile-head">
                  <div className="photo-content">
                    <div className="cover-photo"></div>
                  </div>
                  <div className="profile-info">
                    <div className="profile-photo">
                      <img
                        src="images/profile/profile.png"
                        className="img-fluid rounded-circle"
                        alt=""
                      ></img>
                    </div>
                    <div className="profile-details">
                      <div className="profile-name px-3 pt-2">
                        <h4 className="text-primary mb-0">
                          {me.firstName} {me.lastName}
                        </h4>
                        <p>{me.workoutPersona}</p>
                      </div>
                      <div className="profile-email px-2 pt-2">
                        <h4 className="text-muted mb-0">{me.email}</h4>
                        <p>Email</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-xl-4">
              <div className="card">
                {/* start card body */}
                <div className="card-body">
                  <div className="profile-statistics mb-5">
                    <div className="text-center">
                      <div className="row justify-content-center">
                        <h4 className="text-center">
                          {`${me.firstName}'s`} Workouts
                        </h4>
                      </div>
                      {/* user workout data goes here */}
                      {me.workouts.length > 0 ? (
                        me.workouts.map((workout) => (
                          <div className="my-3 p-3 shadow-sm border border-solid border-dark border-3 rounded">
                            <p className="font-weight-bold">{workout.name}</p>
                            <p className="font-italic">{workout.workoutType}</p>
                            <p className="font-weight-bold">
                              {workout.workoutDescription}
                            </p>
                          </div>
                        ))
                      ) : (
                        <p>User has no saved workouts</p>
                      )}
                    </div>
                  </div>
                  <div className="profile-statistics mb-5">
                    <div id="mealPlan" className="text-center">
                      <div className="row justify-content-center">
                        <h4 className="text-center">
                          {`${me.firstName}'s`} Meal Plan
                        </h4>
                      </div>
                      {/* user meal plan data goes here */}
                      {me.meals.length > 0 ? (
                        me.meals.map((meal) => (
                          <div className="my-3 p-3 shadow-sm border border-solid border-dark border-3 rounded">
                            <p className="font-weight-bold">{meal.mealName}</p>
                            <p className="font-italic">
                              Ingredients: <br></br>{" "}
                              {meal.ingredients.map((ingredient) => (
                                <div className="font-weight-bold">
                                  <p>{ingredient}</p>
                                </div>
                              ))}
                            </p>
                          </div>
                        ))
                      ) : (
                        <p>User has no saved meals</p>
                      )}
                    </div>
                  </div>
                </div>
                {/* end card body */}
              </div>
            </div>
            <div className="col-xl-8">
              <div className="card">
                <div className="card-body">
                  <div className="profile-tab">
                    <div className="custom-tab-1">
                      <ul className="nav nav-tabs">
                        <li className="nav-item">
                          <a
                            href="#about-me"
                            data-toggle="tab"
                            className="nav-link"
                          >
                            About Me
                          </a>
                        </li>
                        <li className="nav-item">
                          <a
                            href="#profile-settings"
                            data-toggle="tab"
                            className="nav-link"
                          >
                            Settings
                          </a>
                        </li>
                      </ul>
                      <div className="tab-content">
                        <div id="about-me" className="tab-pane active">
                          <div className="profile-about-me">
                            <div className="pt-4 border-bottom-1 pb-3">
                              <h4 className="text-primary">About Me</h4>
                              <p className="mb-2">{me.aboutMe}</p>
                            </div>
                          </div>

                          <div className="profile-personal-info">
                            <h4 className="text-primary mb-4">
                              Personal Information
                            </h4>
                            <div className="row mb-2">
                              <div className="col-sm-3 col-5">
                                <h5 className="f-w-500">
                                  Name <span className="pull-right">:</span>
                                </h5>
                              </div>
                              <div className="col-sm-9 col-7">
                                <span>
                                  {me.firstName} {me.lastName}
                                </span>
                              </div>
                            </div>
                            <div className="row mb-2">
                              <div className="col-sm-3 col-5">
                                <h5 className="f-w-500">
                                  Email <span className="pull-right">:</span>
                                </h5>
                              </div>
                              <div className="col-sm-9 col-7">
                                <span>{me.email}</span>
                              </div>
                            </div>

                            <div className="row mb-2">
                              <div className="col-sm-3 col-5">
                                <h5 className="f-w-500">
                                  Age <span className="pull-right">:</span>
                                </h5>
                              </div>
                              <div className="col-sm-9 col-7">
                                <span>{me.age}</span>
                              </div>
                            </div>
                            <div className="row mb-2">
                              <div className="col-sm-3 col-5">
                                <h5 className="f-w-500">
                                  Workout Persona
                                  <span className="pull-right">:</span>
                                </h5>
                              </div>
                              <div className="col-sm-9 col-7">
                                <span>{me.workoutPersona}</span>
                              </div>
                            </div>
                            <div className="row mb-2">
                              <div className="col-sm-3 col-5">
                                <h5 className="f-w-500">
                                  Eagle Fitness Member Since
                                  <span className="pull-right">:</span>
                                </h5>
                              </div>
                              <div className="col-sm-9 col-7">
                                <span>{me.createdAt}</span>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div id="profile-settings" className="tab-pane fade">
                          <div className="pt-3">
                            <div className="settings-form">
                              <h4 className="text-primary">Account Settings</h4>
                              <p className="font-weight-bold">
                                Modify your personal information here. <br></br>
                                For data you wish to keep the same, leave the
                                corresponding field blank.
                              </p>
                              <form onSubmit={handleFormSubmit}>
                                <div className="form-row">
                                  <div className="form-group col-md-6">
                                    <label>Email</label>
                                    <input
                                      name="email"
                                      onChange={handleChange}
                                      className="form-control"
                                    ></input>
                                  </div>
                                  <div className="form-group col-md-6">
                                    <label>Password</label>
                                    <input
                                      name="password"
                                      onChange={handleChange}
                                      className="form-control"
                                    ></input>
                                  </div>
                                </div>
                                <div className="form-group">
                                  <label>First Name</label>
                                  <input
                                    type="name"
                                    name="firstName"
                                    onChange={handleChange}
                                    className="form-control"
                                  ></input>
                                </div>
                                <div className="form-group">
                                  <label>Last Name</label>
                                  <input
                                    type="text"
                                    name="lastName"
                                    onChange={handleChange}
                                    className="form-control"
                                  ></input>
                                </div>
                                <div className="form-group">
                                  <label>Workout Persona</label>
                                  <input
                                    type="text"
                                    name="workoutPersona"
                                    onChange={handleChange}
                                    className="form-control"
                                  ></input>
                                </div>
                                <div className="form-group">
                                  <label>About Me</label>
                                  <textarea
                                    type="text"
                                    name="aboutMe"
                                    onChange={handleChange}
                                    className="form-control"
                                  ></textarea>
                                </div>

                                {error && (
                                  <p className="text-danger">
                                    There was a problem with your data
                                  </p>
                                )}

                                <button
                                  className="btn btn-primary"
                                  type="submit"
                                >
                                  Submit !
                                </button>
                              </form>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfilePage;
