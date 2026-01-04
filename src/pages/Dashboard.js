export default function Dashboard() {
  const card =
    "p-6 min-w-[180px] rounded-lg " +
    "bg-white dark:bg-slate-900 " +
    "border border-slate-200 dark:border-slate-700 " +
    "shadow text-slate-900 dark:text-slate-100";

  return (
    <div className="w-full flex flex-col items-center justify-center">
      
      {/* Title */}
      <h1 className="text-3xl font-bold mb-8 text-slate-900 dark:text-slate-100">
        Dashboard
      </h1>

      {/* Cards */}
      <div className="flex gap-6">
        <div className={card}>
          <p className="text-slate-500 dark:text-slate-400">Users</p>
          <h2 className="text-2xl font-bold text-indigo-500 mt-2">
            1,250
          </h2>
        </div>

        <div className={card}>
          <p className="text-slate-500 dark:text-slate-400">Tickets</p>
          <h2 className="text-2xl font-bold text-violet-500 mt-2">
            4,820
          </h2>
        </div>

        <div className={card}>
          <p className="text-slate-500 dark:text-slate-400">Revenue</p>
          <h2 className="text-2xl font-bold text-emerald-500 mt-2">
            ₹3,40,000
          </h2>
        </div>
      </div>

    </div>
  );
}
