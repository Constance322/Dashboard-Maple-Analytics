import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from "recharts";

export default function LineChartCard({ title, data, dataKey, note }) {
  return (
    // Adds hover translation and shadow
    <div className="p-4 bg-white rounded-2xl shadow-sm transform hover:-translate-y-1 hover:shadow-lg transition-all duration-300">
      <div className="flex items-center justify-between">
        <div className="text-sm text-slate-500 font-semibold">{title}</div>
        <div className="text-xs text-slate-400">source: internal • updated today</div>
      </div>
      {/* Adds slight hover scale to chart area */}
      <div style={{ height: 240 }} className="mt-3 transition-transform transform hover:scale-[1.02]">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data}>
            <CartesianGrid stroke="#e5e7eb" strokeDasharray="3 3" />
            <XAxis dataKey="label" stroke="#6b7280" />
            <YAxis stroke="#6b7280" />
            <Tooltip formatter={(v) => new Intl.NumberFormat().format(v)} />
            {/* Blue line color: #2563eb */}
            <Line type="monotone" dataKey={dataKey} stroke="#2563eb" strokeWidth={2} dot={{ r: 4 }} activeDot={{ r: 6 }} />
          </LineChart>
        </ResponsiveContainer>
      </div>
      {note && <div className="mt-3 text-xs text-slate-500">{note}</div>}
    </div>
  );
}