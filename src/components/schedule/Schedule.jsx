import React from "react";
import "./sc.css";

const Schedule = () => {
  return (
    <div className="master">
      <div className="schedule_container">
        <div className="dolly">
          <h2 className="sc_title">Here's a sneak peek of</h2>
          <h1 className="sc">our special day's schedule</h1>

          <div className="sc_grid">
            <div className="sc_sub">
              <h2 className="sc_time">11:15 AM</h2>
              <h2 className="event">Guest Arrival</h2>
            </div>

            <div className="sc_sub">
              <h2 className="sc_time">12:00 NOON</h2>
              <h2 className="event">Wedding Ceremony</h2>
            </div>

            <div className="sc_sub">
              <h2 className="sc_time">03:30 PM</h2>
              <h2 className="event">Reception Begins</h2>
            </div>

            <div className="sc_sub">
              <h2 className="sc_time">09:00 PM</h2>
              <h2 className="event">Send Off</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Schedule;
