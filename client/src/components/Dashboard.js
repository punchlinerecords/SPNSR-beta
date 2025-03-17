import React, { useEffect, useState } from "react";
import API_BASE_URL from "../config";

function Dashboard() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    async function fetchEvents() {
      const response = await fetch(`${API_BASE_URL}/api/events`);
      const data = await response.json();
      setEvents(data);
    }
    fetchEvents();
  }, []);

  return (
    <div>
      <h2>Dashboard</h2>
      <ul>
        {events.map((event) => (
          <li key={event.id}>{event.name} - {event.location}</li>
        ))}
      </ul>
    </div>
  );
}

export default Dashboard;

