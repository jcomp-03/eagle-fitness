import { useMutation } from "@apollo/client";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import auth from "../../utils/auth";
import { ADD_USER } from "../../utils/graphQL/mutations";

const SignUp = () => {
    const [formState, setFormState] = useState(parseInt({age:""}));
    const [newUser,{error}] = useMutation(ADD_USER)

    const handleChange = (event) => {
        let { name, value } = event.target;

        if (name === 'age') {
            value = parseInt(value)
        }
        
        setFormState({
          ...formState,
          [name]: value,
        });

        // console.log(formState)
    };

    const handleFormSubmit = async (event) => {
        event.preventDefault();
    
        try {
          if (formState.value == "") {
            console.log(formState.value);
          }
          const {data} = await newUser({
            variables: { ...formState },
          });
          console.log(data)
    
          auth.login(data.addUser.token)
    
          // console.log(formState)
        } catch (e) {
        //   setFormState({});
          console.error(e);
        }
    };
  return(
    <div className="authincation h-100 mt-5">
        <div className="container h-100">
            <div className="row justify-content-center h-100 align-items-center">
                <div className="col-md-6">
					
					<div className="authincation-content">
                        <div className="row no-gutters">
                            <div className="col-xl-12">
                                <div className="auth-form">
									<div className="text-center mb-3">
										<a href="index.html"><img src="images/logo-full-h.png" alt=""></img></a>
									</div>
                                    <h4 className="text-center mb-4 text-white">Sign up</h4>
                                    <div className="new-account mt-3">
                                        <p className="text-white text-center">Already have an account? <Link to="/login" className="text-white">Sign In</Link> <br></br> * Indicates required field</p>
                                    </div>
                                    <form onSubmit={handleFormSubmit}>
                                        <div className="form-group">
                                            {/* move the asteric to the beginning of each word */}
                                            <label className="mb-1 text-white"><strong>Username *</strong></label>
                                            <input onChange={handleChange} name="username" type="text" className="form-control" placeholder="username"></input>
                                        </div>
                                        <div className="form-group">
                                            <label className="mb-1 text-white"><strong>Email *</strong></label>
                                            <input onChange={handleChange} name="email" type="email" className="form-control" placeholder="hello@example.com"></input>
                                        </div>
                                        <div className="form-group">
                                            <label className="mb-1 text-white"><strong>Password *</strong></label>
                                            <input onChange={handleChange} name="password" type="password" className="form-control"></input>
                                        </div>
                                        <div className="form-group">
                                            <label className="mb-1 text-white"><strong>First Name *</strong></label>
                                            <input onChange={handleChange} name="firstName" type="name" className="form-control"></input>
                                        </div>
                                        <div className="form-group">
                                            <label className="mb-1 text-white"><strong>Last Name *</strong></label>
                                            <input onChange={handleChange} name="lastName" type="name" className="form-control"></input>
                                        </div>
                                        <div className="form-group">
                                            <label className="mb-1 text-white"><strong>Age *</strong></label>
                                            <input onChange={handleChange} name="age" className="form-control" placeholder="Please enter a number"></input>
                                        </div>
                                        <div className="form-group">
                                            <label className="mb-1 text-white"><strong>What is your workout persona? *</strong></label>
                                            <input onChange={handleChange} name="workoutPersona" className="form-control" placeholder="Enter up to 15 characters"></input>
                                        </div>
                                        <div className="form-group">
                                            <label className="mb-1 text-white"><strong>Tell us a little about yourself! *</strong></label>
                                            <input onChange={handleChange} name="aboutMe" className="form-control" placeholder="10 characters minimum"></input>
                                        </div>
                                        <div className="text-center mt-4">
                                            <button type="submit" className="btn bg-white text-primary btn-block">Sign me up</button>
                                        </div>
                                        {error && (
                                            <p className="text-danger">
                                                There was a problem with your data
                                            </p>
                                        )}
                                    </form>
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

export default SignUp