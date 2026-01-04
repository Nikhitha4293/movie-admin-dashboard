export default function Pagination({ page, setPage, total }) {
  return (
    <div className="flex gap-4 mt-4">
      <button
        onClick={() => setPage(page - 1)}
        disabled={page === 1}
        className="px-3 py-1 bg-gray-300 rounded"
      >
        Prev
      </button>
      <span>Page {page}</span>
      <button
        onClick={() => setPage(page + 1)}
        disabled={page === total}
        className="px-3 py-1 bg-gray-300 rounded"
      >
        Next
      </button>
    </div>
  );
}

