import kanbanData from "../data/kanbanData";

export default function Kanban() {
  if (!kanbanData) {
    return <p>Loading...</p>;
  }

  const rows = [
    ...(kanbanData.booked || []).map((item) => ({
      status: "Booked",
      ...item,
    })),
    ...(kanbanData.confirmed || []).map((item) => ({
      status: "Confirmed",
      ...item,
    })),
    ...(kanbanData.cancelled || []).map((item) => ({
      status: "Cancelled",
      ...item,
    })),
  ];

  return (
    <div className="w-full max-w-5xl mx-auto 
                    bg-slate-100 dark:bg-slate-950 
                    text-slate-900 dark:text-slate-100
                    p-6 rounded-xl">

      <h2 className="text-2xl font-bold mb-6">
        Booking Status
      </h2>

      <div className="overflow-hidden rounded-xl 
                      bg-white dark:bg-slate-900
                      border border-slate-200 dark:border-slate-700">

        <table className="w-full border-collapse">
          <thead className="bg-slate-100 dark:bg-slate-800">
            <tr>
              <th className="p-4 text-left text-slate-700 dark:text-slate-200">
                Status
              </th>
              <th className="p-4 text-left text-slate-700 dark:text-slate-200">
                Movie
              </th>
              <th className="p-4 text-left text-slate-700 dark:text-slate-200">
                Seat
              </th>
            </tr>
          </thead>

          <tbody>
            {rows.map((row, index) => (
              <tr
                key={index}
                className="border-t border-slate-200 dark:border-slate-700
                           hover:bg-slate-50 dark:hover:bg-slate-800"
              >
                <td className="p-4">
                  <StatusBadge status={row.status} />
                </td>
                <td className="p-4 text-slate-900 dark:text-slate-100">
                  {row.movie}
                </td>
                <td className="p-4 text-slate-700 dark:text-slate-300">
                  {row.seat}
                </td>
              </tr>
            ))}
          </tbody>
        </table>

      </div>
    </div>
  );
}

function StatusBadge({ status }) {
  const styles = {
    Booked:
      "bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-200",
    Confirmed:
      "bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-200",
    Cancelled:
      "bg-red-100 text-red-700 dark:bg-red-900 dark:text-red-200",
  };

  return (
    <span className={`px-3 py-1 rounded-full text-sm font-medium ${styles[status]}`}>
      {status}
    </span>
  );
}
