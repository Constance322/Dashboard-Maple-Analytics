import { CheckCircleIcon, ClockIcon, ServerStackIcon, TagIcon } from "@heroicons/react/24/outline";

export default function DataProvenancePanel({ source, lastUpdated, transform, notes }) {
  const panelItems = [
    { label: "Source", value: source, icon: <ServerStackIcon className="w-5 h-5 text-blue-500" /> },
    { label: "Last Updated", value: lastUpdated, icon: <ClockIcon className="w-5 h-5 text-blue-500" /> },
    { label: "Transform", value: transform, icon: <TagIcon className="w-5 h-5 text-blue-500" /> },
    { label: "Analyst Note", value: notes, icon: <CheckCircleIcon className="w-5 h-5 text-blue-500" /> },
  ];

  return (
    <div className="p-5 bg-white rounded-2xl shadow-lg border border-blue-200">
      <h2 className="text-lg font-bold text-blue-700 mb-4 border-b pb-2">Data Provenance</h2>
      <div className="flex flex-col space-y-4">
        {panelItems.map((item, index) => (
          <div key={index} className="flex items-start gap-3">
            <div className="mt-1 flex-shrink-0">{item.icon}</div> {/* Blue icon color applied here */}
            <div className="flex flex-col">
              <span className="text-xs font-semibold text-slate-500">{item.label}</span>
              <p className="text-sm font-medium text-slate-800 break-words">{item.value}</p>
            </div>
          </div>
        ))}
      </div>
      <p className="mt-4 text-xs text-slate-400 p-2 border-t pt-3">
        This panel ensures full auditability and transparency for the data displayed in the dashboard.
      </p>
    </div>
  );
}