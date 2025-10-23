import React from "react";
import { HomeIcon, ChartBarIcon, Cog6ToothIcon } from "@heroicons/react/24/outline";

export default function Sidebar() {
  const menuItems = [
    { name: "Home", icon: <HomeIcon className="w-5 h-5" /> },
    { name: "Analytics", icon: <ChartBarIcon className="w-5 h-5" /> },
    { name: "Settings", icon: <Cog6ToothIcon className="w-5 h-5" /> },
  ];

  return (
 <aside className="w-64 bg-blue-50 h-screen shadow-md p-4 hidden lg:block">
  <div className="mb-6 text-xl font-bold text-blue-700">Dashboard</div>
      <nav className="flex flex-col gap-3">
        {menuItems.map((item) => (
          <button key={item.name} className="flex items-center gap-2 p-2 rounded hover:bg-primary-50">
            {item.icon}
            <span className="text-sm text-slate-700">{item.name}</span>
          </button>
        ))}
      </nav>
    </aside>
    
  );
}
