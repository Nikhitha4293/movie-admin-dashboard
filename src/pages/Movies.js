import MovieTable from "../components/MovieTable";

export default function Movies() {
  return (
    <div className="w-full max-w-6xl mx-auto 
                    p-6 rounded-xl
                    bg-slate-100 dark:bg-slate-950
                    text-slate-900 dark:text-slate-100">
      
      <h2 className="text-2xl font-bold mb-6">
        Movies
      </h2>

      <MovieTable />
    </div>
  );
}
