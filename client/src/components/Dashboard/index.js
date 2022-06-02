import React, { useState, useEffect, Component } from 'react';

import Chart from "react-apexcharts";
import auth from '../../utils/auth';
import { DashboardMeals } from '../DashboardMeals';
import { Link } from "react-router-dom";
import {createHttpLink, useQuery} from "@apollo/client";
import { QUERY_ME } from "../../utils/graphQL/queries";
import {
  ApolloClient,
  InMemoryCache,
} from '@apollo/client';
import {setContext} from "@apollo/client/link/context";
import moment from "moment";

class Dashboard extends Component {
  constructor(props) {
    super(props);

    const httpLink = createHttpLink({
      uri: "/graphql",
    });

    const authLink = setContext((_, { headers }) => {
      const token = localStorage.getItem("id_token");
      return {
        headers: {
          ...headers,
          authorization: token ? `Bearer ${token}` : "",
        },
      };
    });

    this.client = new ApolloClient({
      link: authLink.concat(httpLink),
      cache: new InMemoryCache(),
    });

  this.state = {
    me: null,
    options: {
      chart: {
        id: "basic-bar"
      },
      xaxis: {
        categories: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'Novermber', 'December']
      }
    },
    series: [
      {
        name: "Hours",
        data: [30, 40, 45, 50, 49, 60, 70, 91]
      }
    ],
  };
  this.props.setCurrentPage("Dashboard")
  }

  doQuery = () => {
    this.client
      .query({
        query: QUERY_ME
      })
      .then(result => {
        this.setState({me: result.data.me})
      });
  }

  componentDidMount() {
    this.doQuery();
  }

  // const [chartState, setChartState] = useState(initialChartState)

  // useEffect(() => {
  //   fetch('/api/dashboard/chart_series')
  //   .then(res => res.json)
  //   .then(res => setChartState({...chartState, series: res.data}))
  // }, [])

render () {
  if (!auth.loggedIn()) {
    window.location.replace("/login");
  }
  return (
  <div className='content-body'>

    <div className="container-fluid">
      <div className="row">
        <div className="col-xl-6 col-xxl-12">
          <div className="row">
            <div className="col-sm-6">
              <div className="card avtivity-card">
                <div className="card-body">
                  <div className="media align-items-center">
                    <span className="activity-icon bgl-secondary  mr-md-4 mr-3">
                      <svg
                        width="40"
                        height="37"
                        viewBox="0 0 40 37"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M1.64826 26.5285C0.547125 26.7394 -0.174308 27.8026 0.0366371 28.9038C0.222269 29.8741 1.07449 30.5491 2.02796 30.5491C2.15453 30.5491 2.28531 30.5364 2.41188 30.5112L10.7653 28.908C11.242 28.8152 11.6682 28.5578 11.9719 28.1781L15.558 23.6554L14.3599 23.0437C13.4739 22.5965 12.8579 21.7865 12.6469 20.8035L9.26338 25.0688L1.64826 26.5285Z"
                          fill="#A02CFA"
                        />
                        <path
                          d="M31.3999 8.89345C33.8558 8.89345 35.8467 6.90258 35.8467 4.44673C35.8467 1.99087 33.8558 0 31.3999 0C28.9441 0 26.9532 1.99087 26.9532 4.44673C26.9532 6.90258 28.9441 8.89345 31.3999 8.89345Z"
                          fill="#A02CFA"
                        />
                        <path
                          d="M21.6965 3.33297C21.2282 2.85202 20.7937 2.66217 20.3169 2.66217C20.1439 2.66217 19.971 2.68748 19.7853 2.72967L12.1534 4.53958C11.0986 4.78849 10.4489 5.84744 10.6979 6.89795C10.913 7.80079 11.7146 8.40831 12.6048 8.40831C12.7567 8.40831 12.9086 8.39144 13.0605 8.35347L19.5618 6.81357C19.9837 7.28187 22.0974 9.57273 22.4813 9.97775C19.7938 12.855 17.1064 15.7281 14.4189 18.6054C14.3767 18.6519 14.3388 18.6982 14.3008 18.7446C13.5161 19.7445 13.7566 21.3139 14.9379 21.9088L23.1774 26.1151L18.8994 33.0467C18.313 34.0002 18.6083 35.249 19.5618 35.8396C19.8951 36.0464 20.2621 36.1434 20.6249 36.1434C21.3042 36.1434 21.9707 35.8017 22.3547 35.1815L27.7886 26.3766C28.0882 25.8915 28.1683 25.305 28.0122 24.7608C27.8561 24.2123 27.4806 23.7567 26.9702 23.4993L21.3885 20.66L27.2571 14.3823L31.6869 18.1371C32.0539 18.4493 32.5054 18.6012 32.9526 18.6012C33.4335 18.6012 33.9145 18.424 34.2899 18.078L39.3737 13.3402C40.1669 12.6019 40.2133 11.3615 39.475 10.5684C39.0868 10.1549 38.5637 9.944 38.0406 9.944C37.5638 9.944 37.0829 10.117 36.7074 10.4671L32.9019 14.0068C32.8977 14.011 23.363 5.04163 21.6965 3.33297Z"
                          fill="#A02CFA"
                        />
                      </svg>
                    </span>
                    <Link to="/calendar">
                      <div className="media-body">
                        <h3 className="fs-20">Hello,</h3>
                        <span className="title text-black font-w600"> {this.state.me && this.state.me.firstName}</span>
                        <p>Let's get to work!</p>
                      </div>
                    </Link>
                  </div>
                </div>
                <div className="effect bg-dark"></div>
              </div>
            </div>
            <div className="col-sm-6">
              <div className="card avtivity-card">
                <div className="card-body">
                  <div className="media align-items-center">
                    <span className="activity-icon bgl-success mr-md-4 mr-3">
                      <svg
                        width="40"
                        height="40"
                        viewBox="0 0 40 40"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g clipPath="url(#clip2)">
                          <path
                            d="M14.6406 24.384C14.4639 24.1871 14.421 23.904 14.5305 23.6633C15.9635 20.513 14.4092 18.7501 14.564 11.6323C14.5713 11.2944 14.8346 10.9721 15.2564 10.9801C15.6201 10.987 15.905 11.2962 15.8971 11.6598C15.8902 11.9762 15.8871 12.2939 15.8875 12.6123C15.888 12.9813 16.1893 13.2826 16.5583 13.2776C17.6426 13.2628 19.752 12.9057 20.5684 10.4567L20.9744 9.23876C21.7257 6.9847 20.4421 4.55115 18.1335 3.91572L13.9816 2.77294C12.3274 2.31768 10.5363 2.94145 9.52387 4.32498C4.66826 10.9599 1.44452 18.5903 0.0754914 26.6727C-0.300767 28.8937 0.754757 31.1346 2.70222 32.2488C13.6368 38.5051 26.6023 39.1113 38.35 33.6379C39.3524 33.1709 40.0002 32.1534 40.0002 31.0457V19.1321C40.0002 18.182 39.5322 17.2976 38.7484 16.7664C34.5339 13.91 29.1672 14.2521 25.5723 18.0448C25.2519 18.3828 25.3733 18.937 25.8031 19.1166C27.4271 19.7957 28.9625 20.7823 30.2439 21.9475C30.5225 22.2008 30.542 22.6396 30.2654 22.9155C30.0143 23.1658 29.6117 23.1752 29.3485 22.9376C25.9907 19.9053 21.4511 18.5257 16.935 19.9686C16.658 20.0571 16.4725 20.3193 16.477 20.61C16.496 21.8194 16.294 22.9905 15.7421 24.2172C15.5453 24.6544 14.9607 24.7409 14.6406 24.384Z"
                            fill="#27BC48"
                          />
                        </g>
                        <defs>
                          <clipPath id="clip2">
                            <rect width="40" height="40" fill="white" />
                          </clipPath>
                        </defs>
                      </svg>
                    </span>
                    <Link to="/workoutPlan">
                    <div className="media-body">
                      <h4 className="fs-20">Workouts</h4>
                      <p><span className="title text-black font-w600">{this.state.me && this.state.me.workouts.length }</span> workouts scheduled</p>
                    </div>
                  </Link>
                  </div>
                </div>
                <div className="effect bg-success"></div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-xl-6 col-xxl-12">
          <div className="card">
            <div className="card-header d-sm-flex d-block pb-0 border-0">
              <div className="mr-auto pr-3 mb-sm-0 mb-3">
                <h4 className="text-black fs-20">Monthly Progress</h4>
              </div>
            </div>
            <div className="card-body pt-0 pb-0">
              <div id="chartBar">
              <Chart
              options={this.state.options}
              series={this.state.series}
              type="line"
              width="100%"
            />
              </div>
            </div>
          </div>
        </div>
        <div className="col-xl-12">
          <div className="row">
            <DashboardMeals></DashboardMeals>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}
}

export default Dashboard;
