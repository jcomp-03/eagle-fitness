import React from "react";
import { Link } from "react-router-dom";

const SignUp = () => {
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
										<a href="index.html"><img src="images/logo-full.png" alt=""></img></a>
									</div>
                                    <h4 className="text-center mb-4 text-white">Sign up</h4>
                                    <form action="index.html">
                                        <div className="form-group">
                                            <label className="mb-1 text-white"><strong>Username</strong></label>
                                            <input type="text" className="form-control" placeholder="username"></input>
                                        </div>
                                        <div className="form-group">
                                            <label className="mb-1 text-white"><strong>Email</strong></label>
                                            <input type="email" className="form-control" placeholder="hello@example.com"></input>
                                        </div>
                                        <div className="form-group">
                                            <label className="mb-1 text-white"><strong>Password</strong></label>
                                            <input type="password" className="form-control" value="Password"></input>
                                        </div>
                                        <div className="text-center mt-4">
                                            <button type="submit" className="btn bg-white text-primary btn-block">Sign me up</button>
                                        </div>
                                    </form>
                                    <div className="new-account mt-3">
                                        <p className="text-white">Already have an account? <Link to="/login" className="text-white">Sign In</Link></p>
                                    </div>
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