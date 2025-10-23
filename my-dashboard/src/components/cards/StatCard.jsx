export default function StatCard({ title, value, delta, note }) {
  return (
    // Adds hover translation and shadow: transform hover:-translate-y-1 hover:shadow-lg
    <div className="p-4 bg-white rounded-2xl shadow-sm transform hover:-translate-y-1 hover:shadow-lg transition-all duration-300">
      <div className="text-sm text-slate-500">{title}</div>
      <div className="mt-2 flex items-baseline gap-2">
        <div className="text-2xl font-bold text-slate-800">{value}</div>
        {delta && (
          // Conditional text color: text-green-600 or text-red-600
          <div className={`text-sm font-medium ${delta >= 0 ? "text-green-600" : "text-red-600"}`}>
            {delta >= 0 ? `+${delta}%` : `${delta}%`}
          </div>
        )}
      </div>
      {note && <div className="mt-3 text-xs text-slate-400">{note}</div>}
    </div>
  );
}