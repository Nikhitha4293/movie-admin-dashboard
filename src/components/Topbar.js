import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

export default function Topbar() {
  const { dark, setDark } = useContext(ThemeContext);

  return (
    <div className="flex justify-between items-center px-6 py-4 border-b bg-white dark:bg-gray-900 dark:text-white">
      <h2 className="text-xl font-semibold">Admin Dashboard</h2>

      <button
        onClick={() => setDark(!dark)}
        className="text-sm underline"
      >
        {dark ? "Light mode" : "Dark mode"}
      </button>
    </div>
  );
}
