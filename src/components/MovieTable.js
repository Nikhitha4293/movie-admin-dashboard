import { useState } from "react";

const initialMovies = [
  { id: 1, name: "Inception", genre: "Sci-Fi", rating: 8.8 },
  { id: 2, name: "Interstellar", genre: "Sci-Fi", rating: 8.6 },
  { id: 3, name: "Avatar", genre: "Fantasy", rating: 7.8 },
  { id: 4, name: "Titanic", genre: "Romance", rating: 7.9 },
];

export default function MovieTable() {
 const [movies] = useState(initialMovies);
 const [search, setSearch] = useState("");

  const filtered = movies.filter((m) =>
    m.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="bg-white dark:bg-slate-900 
                    border border-slate-200 dark:border-slate-700 
                    rounded-xl shadow overflow-hidden">

      {/* Search */}
      <div className="p-4">
        <input
          type="text"
          placeholder="Search movie..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full px-4 py-2 rounded-lg
                     bg-white dark:bg-slate-800
                     text-slate-900 dark:text-slate-100
                     border border-slate-300 dark:border-slate-600
                     placeholder-slate-400
                     focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />
      </div>

      {/* Table */}
      <table className="w-full border-collapse">
        <thead className="bg-slate-100 dark:bg-slate-800">
          <tr>
            <th className="p-4 text-left text-slate-700 dark:text-slate-200">
              Name
            </th>
            <th className="p-4 text-left text-slate-700 dark:text-slate-200">
              Genre
            </th>
            <th className="p-4 text-left text-slate-700 dark:text-slate-200">
              Rating
            </th>
            <th className="p-4 text-left text-slate-700 dark:text-slate-200">
              Action
            </th>
          </tr>
        </thead>

        <tbody>
          {filtered.map((movie) => (
            <tr
              key={movie.id}
              className="border-t border-slate-200 dark:border-slate-700
                         hover:bg-slate-50 dark:hover:bg-slate-800"
            >
              <td className="p-4 text-slate-900 dark:text-slate-100">
                {movie.name}
              </td>
              <td className="p-4 text-slate-700 dark:text-slate-300">
                {movie.genre}
              </td>
              <td className="p-4 text-slate-700 dark:text-slate-300">
                {movie.rating}
              </td>
              <td className="p-4">
                <button className="px-4 py-1 rounded-md
                                   bg-red-500 text-white
                                   hover:bg-red-600">
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
