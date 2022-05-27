import React, { useState } from "react";
import Calendar from "react-calendar";

function FitnessCalendar() {
  const [value, onChange] = useState(new Date());

  return (
    <div className="container-fluid">
      <div className="page-titles">
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <a href="#">App</a>
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
              <h4 className="card-intro-title">Calendar</h4>

              <div className="">
                <div id="external-events" class="my-3">
                  <p>Drag and drop your event or click in the calendar</p>
                  <div className="external-event" data-class="bg-primary">
                    <i className="fa fa-move"></i>New Theme Release
                  </div>
                  <div className="external-event" data-class="bg-success">
                    <i className="fa fa-move"></i>My Event
                  </div>
                  <div className="external-event" data-class="bg-warning">
                    <i className="fa fa-move"></i>Meet manager
                  </div>
                  <div className="external-event" data-class="bg-dark">
                    <i className="fa fa-move"></i>Create New theme
                  </div>
                </div>

                <div className="checkbox custom-control checkbox-event custom-checkbox pt-3 pb-5">
                  <input
                    type="checkbox"
                    className="custom-control-input"
                    id="drop-remove"
                  />
                  <label className="custom-control-label" htmlFor="drop-remove">
                    Remove After Drop
                  </label>
                </div>
                <a
                  href="#"
                  data-toggle="modal"
                  data-target="#add-category"
                  className="btn btn-primary btn-event w-100"
                >
                  <span className="align-middle">
                    <i className="ti-plus"></i>
                  </span>{" "}
                  Create New
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="Sample">
          <div className="calendar-container">
            <main className="calendar_container_content">
              <Calendar onChange={onChange} value={value} />
            </main>
          </div>
        </div>

        <div className="modal fade none-border" id="event-modal">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h4 className="modal-title">
                  <strong>Add New Event</strong>
                </h4>
              </div>
              <div className="modal-body"></div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-default waves-effect"
                  data-dismiss="modal"
                >
                  Close
                </button>
                <button
                  type="button"
                  className="btn btn-success save-event waves-effect waves-light"
                >
                  Create event
                </button>

                <button
                  type="button"
                  className="btn btn-danger delete-event waves-effect waves-light"
                  data-dismiss="modal"
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="modal fade none-border" id="add-category">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h4 className="modal-title">
                  <strong>Add a category</strong>
                </h4>
              </div>
              <div className="modal-body">
                <form>
                  <div className="row">
                    <div className="col-md-6">
                      <label className="control-label">Category Name</label>
                      <input
                        className="form-control form-white"
                        placeholder="Enter name"
                        type="text"
                        name="category-name"
                      />
                    </div>
                    <div className="col-md-6">
                      <label className="control-label">
                        Choose Category Color
                      </label>
                      <select
                        className="form-control form-white"
                        data-placeholder="Choose a color..."
                        name="category-color"
                      >
                        <option value="success">Success</option>
                        <option value="danger">Danger</option>
                        <option value="info">Info</option>
                        <option value="pink">Pink</option>
                        <option value="primary">Primary</option>
                        <option value="warning">Warning</option>
                      </select>
                    </div>
                  </div>
                </form>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-default waves-effect"
                  data-dismiss="modal"
                >
                  Close
                </button>
                <button
                  type="button"
                  className="btn btn-danger waves-effect waves-light save-category"
                  data-dismiss="modal"
                >
                  Save
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FitnessCalendar;
