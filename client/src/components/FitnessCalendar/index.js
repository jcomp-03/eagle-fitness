import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";

import moment from 'moment'

function FitnessCalendar() {
  const [myEvents, setEvents] = React.useState([]);

//   React.useEffect(() => {
//     getJson(
//       "https://trial.mobiscroll.com/events/?vers=5",
//       (events) => {
//         setEvents(events);
//       },
//       "jsonp"
//     );
//   }, []);

  const onEventClick = React.useCallback((event) => {
    toast({
      message: event.event.title,
    });
  }, []);

  const view = React.useMemo(() => {
    return {
      calendar: { labels: true },
    };
  }, []);

  const [value, onChange] = useState(new Date());

  const [modalVisible, setModalVisible] = useState(false);
  const [newWorkout, setNewWorkout] = useState({
    date: null,
    name: "",
    workoutType: "",
    workoutDescription: "",
  });

  const closeModal = () => setModalVisible(false);
  const showModal = () => setModalVisible(true);

  const handleNewEventClick = (val) => {
    setNewWorkout({ ...newWorkout, date: val.date });
    showModal();
  };

  const handleUpdateNewWorkout = (key, val) => {
    const newWorkoutState = { ...newWorkout };
    newWorkoutState[key] = val;
    setNewWorkout(newWorkoutState);
  };

  const handleSubmitNewWorkout = () => {
    // TODO: Submit to backend
    setEvents([...myEvents, {title: newWorkout.name, start: newWorkout.date, end: newWorkout.date}]);
    closeModal();
    setNewWorkout({
      date: null,
      name: "",
      workoutType: "",
      workoutDescription: "",
    })
  }

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
                <div id="external-events" className="my-3">
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
                  onClick={handleNewEventClick}
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
        <div className="Sample col-9">
          <div className="calendar-container">
            <main className="calendar_container_content">
              <Eventcalendar
                theme="ios"
                themeVariant="light"
                clickToCreate={true}
                dragToCreate={false}
                dragToMove={true}
                dragToResize={false}
                data={myEvents}
                onCellClick={handleNewEventClick}
                view={view}
                onEventClick={onEventClick}
              />
            </main>
          </div>
        </div>

        <Modal show={modalVisible} onHide={closeModal}>
          <Modal.Header closeButton>
            <Modal.Title>
              <strong>Add New Event</strong>
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            New Workout: {newWorkout.date && moment(newWorkout.date).format('l')}
            <br />
            <label>Workout:</label>
            <input
              type="text"
              value={newWorkout.name}
              onChange={(e) => handleUpdateNewWorkout("name", e.target.value)}
            />
          </Modal.Body>
          <Modal.Footer>
            <button className="btn btn-secondary" onClick={closeModal}>
              Close
            </button>
            <button className="btn btn-primary" onClick={handleSubmitNewWorkout}>
              Save Changes
            </button>
          </Modal.Footer>
        </Modal>
      </div>
    </div>
  );
}

export default FitnessCalendar;
