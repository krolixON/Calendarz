import React, { useState } from "react";

import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";

const DUMMY_EVENTS = [
  {
    title: "Big Meeting",
    start: "2022-03-17",
  },
  {
    title: "Vacation",
    start: "2022-03-15",
  },
  {
    title: "Conference",
    start: "2022-03-24",
  },
];

function App() {
  const [newEvent, setNewEvent] = useState({ title: "", start: ""});
  const [allEvents, setAllEvents] = useState(DUMMY_EVENTS);

  const eventTitleHandler = (e) => {
    setNewEvent({ ...newEvent, title: e.target.value });
  };

  const eventDateHandler = (e) => {
    setNewEvent({ ...newEvent, start: e.target.value });
  };

  function handleAddEvent(e) {
    e.preventDefault();
    setAllEvents([...allEvents, newEvent]);
  }

  return (
    <div className="App">
      <h1>Calendar</h1>
      <h2>Add New Event</h2>
      <div>
        <form>
          <input
            type="text"
            placeholder="Add Title"
            value={newEvent.title}
            onChange={eventTitleHandler}
          />
          <input
            type="datetime-local"
            placeholder="Start Date"
            value={newEvent.start}
            onChange={eventDateHandler}
          />
          <input type="submit" value="add Event" onClick={handleAddEvent} />
        </form>
      </div>
      <FullCalendar
        plugins={[dayGridPlugin, timeGridPlugin]}
        initialView="dayGridMonth"
        headerToolbar={{
          left: "prev,next",
          center: "title",
          right: "dayGridMonth,timeGridWeek,timeGridDay",
        }}
        events={allEvents}
      />
    </div>
  );
}

export default App;
