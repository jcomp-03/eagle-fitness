import React from "react";

// need to pass in user information to populate the user profile page still...
function UserProfile({ props }) {
  return (
    <div id="main-wrapper">
      <div className="content-body">
        <div className="container-fluid">
          <div className="page-titles">
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <a href="javascript:void(0)">App</a>
              </li>
              <li className="breadcrumb-item active">
                <a href="javascript:void(0)">Profile</a>
              </li>
            </ol>
          </div>

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
                      />
                    </div>
                    <div className="profile-details">
                      <div className="profile-name px-3 pt-2">
                        <h4 className="text-primary mb-0">Mitchell C. Shay</h4>
                        <p>UX / UI Designer</p>
                      </div>
                      <div className="profile-email px-2 pt-2">
                        <h4 className="text-muted mb-0">info@example.com</h4>
                        <p>Email</p>
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

export default UserProfile;
