import React, { useState, useEffect } from "react";
import "./displayUpcomingEvents.css";

function DisplayUpcomingEvents() {
  const [upcomingEvents, setUpcomingEvents] = useState([]);

  useEffect(() => {
    getUpcomingEvents();
  }, []);

  async function getUpcomingEvents() {
    let res = await fetch(
      "https://clanoptimistapi.herokuapp.com/api/v1/events/upcomingevents/1"
    );
    let response = await res.json();

    setUpcomingEvents(response.payload.rows);
  }

  return (
    <div>
      {upcomingEvents.map((event) => {
        return (
          <div className="box" key={event.id}>
            <h2>{event.event_name}</h2>
            <p className="time-text">
              {event.event_date}, {event.event_start} ({event.event_duration})
            </p>
            <p className="category-text">{event.event_category}</p>
            <p>{event.event_description}</p>
          </div>
        );
      })}
    </div>
    // <form onSubmit={handleSubmit}>
    //     <input type='text' onChange={handleChange} value={description} />
    //     <button type='submit'>Submit</button>
    //     <p>DEBUG: {description}</p>
    // </form>
  );
}

export default DisplayUpcomingEvents;
