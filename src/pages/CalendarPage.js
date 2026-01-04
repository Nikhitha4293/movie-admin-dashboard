import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import { useState } from "react";
import "react-big-calendar/lib/css/react-big-calendar.css";

const localizer = momentLocalizer(moment);

const events = [
  {
    title: "Avengers Booking",
    start: new Date(2026, 0, 10, 10, 0),
    end: new Date(2026, 0, 10, 12, 0),
  },
  {
    title: "Interstellar Show",
    start: new Date(2026, 0, 15, 14, 0),
    end: new Date(2026, 0, 15, 16, 0),
  },
];

export default function CalendarPage() {
  const [date, setDate] = useState(new Date());
  const [view, setView] = useState("month");

  return (
    <div className="bg-white dark:bg-slate-900 p-6 rounded-xl shadow border dark:border-slate-700">
      <h2 className="text-2xl font-bold mb-4">Booking Calendar</h2>

      <Calendar
        localizer={localizer}
        events={events}
        date={date}
        view={view}
        onNavigate={(newDate) => setDate(newDate)}
        onView={(newView) => setView(newView)}
        startAccessor="start"
        endAccessor="end"
        style={{ height: 500 }}
        className="dark:text-white"
      />
    </div>
  );
}
