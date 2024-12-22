import React from "react";
import "../style/Event.css"; // Tambahkan file CSS untuk styling
import Event1 from "../assets/event.jpg"; // Contoh gambar
import Event2 from "../assets/event.jpg";
import Event3 from "../assets/event.jpg";
import Event4 from "../assets/event.jpg";

// Data Event
const eventList = [
  { id: 1, name: "Workshop Teknologi AI", date: "10 Januari 2025", image: Event1 },
  { id: 2, name: "Lomba Inovasi Digital", date: "20 Februari 2025", image: Event2 },
  { id: 3, name: "Seminar Pengembangan Karier", date: "15 Maret 2025", image: Event3 },
  { id: 4, name: "Hackathon Pelajar", date: "5 April 2025", image: Event4 },
];

function Event() {
  return (
    <div className="event-container">
      <h1 className="event-header">Upcoming Events</h1>
      <div className="event-cards">
        {eventList.map((event) => (
          <div key={event.id} className="event-card">
            <img src={event.image} alt={event.name} className="event-image" />
            <h3 className="event-title">{event.name}</h3>
            <p className="event-date">{event.date}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Event;