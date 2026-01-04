import { BrowserRouter, Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Topbar from "./components/Topbar";
import Dashboard from "./pages/Dashboard";
import Movies from "./pages/Movies";
import CalendarPage from "./pages/CalendarPage";
import Kanban from "./pages/Kanban";
import Analytics from "./pages/Analytics";

export default function App() {
  return (
    <BrowserRouter>
      {/* ROOT LAYOUT */}
      <div className="flex min-h-screen bg-slate-100 dark:bg-slate-950 text-slate-900 dark:text-slate-100">
        
        {/* SIDEBAR */}
        <div className="w-[260px] shrink-0">
          <Sidebar />
        </div>

        {/* MAIN CONTENT */}
        <div className="flex-1 flex flex-col">
          <Topbar />

          {/* PAGE AREA */}
          <main className="flex-1 p-8 bg-slate-100 dark:bg-slate-950">
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/movies" element={<Movies />} />
              <Route path="/calendar" element={<CalendarPage />} />
              <Route path="/kanban" element={<Kanban />} />
              <Route path="/analytics" element={<Analytics />} />
            </Routes>
          </main>
        </div>

      </div>
    </BrowserRouter>
  );
}
