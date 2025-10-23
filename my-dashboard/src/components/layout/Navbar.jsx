import { BellIcon } from "@heroicons/react/24/outline";

export default function Navbar() {
  return (
    <header className="flex items-center justify-between p-4 bg-white border-b shadow-sm">
      <div className="flex items-center gap-3">
        <h1 className="text-xl font-semibold text-blue-800">Maple Analytics</h1>
        <span className="text-sm text-slate-500">— weekly snapshot</span>
      </div>
      <div className="flex items-center gap-4">
        <button aria-label="notifications" className="p-2 rounded-md hover:bg-blue-100 hover:animate-bounce">
          <BellIcon className="w-6 h-6 text-blue-600" /> {/* Blue icon color */}
        </button>
        <div className="text-sm text-slate-700">Connie • Product</div>
      </div>
    </header>
  );
}