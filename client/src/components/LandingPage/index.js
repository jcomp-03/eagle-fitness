import React, { Fragment } from 'react';

import { Grid, Container, Button, Tooltip } from '@material-ui/core';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';

import hero9 from '../../assets/images/hero-bg/hero-5.jpg';

const LandingPage = () => {
  return (
    <Fragment>
      <div className="hero-wrapper bg-composed-wrapper bg-premium-dark min-vh-100">
        <div className="flex-grow-1 w-100 d-flex align-items-center">
          <div
            className="bg-composed-wrapper--image opacity-5"
            style={{ backgroundImage: 'url(' + hero9 + ')' }}
          />
          <div className="bg-composed-wrapper--bg bg-second opacity-3" />
          <div className="bg-composed-wrapper--bg bg-red-lights opacity-1" />
          <div className="bg-composed-wrapper--content pt-5 pb-2 py-lg-5">
            <Container maxWidth="md" className="pb-5">
              <Grid container spacing={4}>
                <Grid
                  item
                  lg={10}
                  className="px-0 mx-auto d-flex align-items-center">
                  <div className="text-center">
                    <Tooltip arrow placement="top" title="Version: 1.0.0">
                      <span className="badge badge-success px-4 text-uppercase h-auto py-1">
                        One cool Gym 
                      </span>
                    </Tooltip>
                    <div className="px-4 px-sm-0 text-white mt-4">
                      <h1 className="display-2 mb-5 font-weight-bold">
                        Eagle Fitness
                      </h1>
                      <p className="font-size-xl text-white-50 mb-3">
                        Meet your patriotic fitness Goals with our great american GYM, EAGLE FITNESS. We will train you to be the all the American you can be. We will make you Great Again!
                      </p>
                      <p className="text-white font-size-lg">
                        Are you already a member?, no? just sign up bellow!
                      </p>
                      <div className="divider border-2 border-light my-5 border-light opacity-2 mx-auto rounded-circle w-50" />
                      <div>
                        <Button
                          to="/Login"
                          component={Link}
                          size="large"
                          color="primary"
                          variant="contained"
                          className="m-2 py-3 px-5"
                          title="Login to you Eagle Fitness Dashboard">
                          <span className="btn-wrapper--label">Log in</span>
                          <span className="btn-wrapper--icon">
                            <FontAwesomeIcon icon={['fas', 'arrow-right']} />
                          </span>
                        </Button>
                        <Button
                          to=" /SignUp"
                          size="large"
                          color="secondary"
                          variant="contained"
                          className="m-2 py-3 px-5"
                          target="_blank"
                          title="Sign Up! we will make you great again">
                          <span className="btn-wrapper--icon">
                            <FontAwesomeIcon icon={['fas', 'download']} />
                          </span>
                          <span className="btn-wrapper--label">
                            Sign Up
                          </span>
                        </Button>
                        <Button
                          href="https://uifort.com/template/carolina-react-admin-dashboard-material-ui-pro"
                          target="_blank"
                          size="large"
                          className="m-2 py-3 px-5"
                          color="default"
                          variant="contained"
                          title="Learn more about Carolina React Admin Dashboard with Material-UI Free version">
                          <span className="btn-wrapper--icon">
                            <FontAwesomeIcon
                              icon={['fas', 'external-link-alt']}
                            />
                          </span>
                          <span className="btn-wrapper--label">
                            PRO Version
                          </span>
                        </Button>
                      </div>
                      <small className="d-block pt-4">
                        For a comprehensive list of components &amp; commercial
                        licenses, we recommend the PRO version.
                      </small>
                    </div>
                  </div>
                </Grid>
              </Grid>
            </Container>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default LandingPage;
