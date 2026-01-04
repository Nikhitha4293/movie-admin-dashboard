import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid
} from "recharts";

const data = [
  { day: "Mon", tickets: 200 },
  { day: "Tue", tickets: 450 },
  { day: "Wed", tickets: 300 }
];

export default function Analytics() {
  return (
    <div className="w-full max-w-5xl mx-auto
                    bg-slate-100 dark:bg-slate-950
                    text-slate-900 dark:text-slate-100
                    p-6 rounded-xl">

      <h2 className="text-2xl font-bold mb-6">
        Weekly Tickets
      </h2>

      <div className="bg-white dark:bg-slate-900
                      border border-slate-200 dark:border-slate-700
                      rounded-xl p-4">

        <BarChart width={500} height={300} data={data}>
          <CartesianGrid
            strokeDasharray="3 3"
            stroke="#475569"
          />

          <XAxis
            dataKey="day"
            stroke="#cbd5f5"
          />

          <YAxis
            stroke="#cbd5f5"
          />

          <Tooltip
            contentStyle={{
              backgroundColor: "#020617",
              border: "1px solid #475569",
              color: "#e5e7eb"
            }}
          />

          <Bar dataKey="tickets" fill="#6366f1" radius={[6, 6, 0, 0]} />
        </BarChart>

      </div>
    </div>
  );
}
