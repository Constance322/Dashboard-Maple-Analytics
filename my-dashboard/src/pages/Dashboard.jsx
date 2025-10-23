import Navbar from "../components/layout/Navbar";
import Sidebar from "../components/layout/Sidebar";
import StatCard from "../components/cards/StatCard";
import LineChartCard from "../components/charts/LineChartCard";
import DataProvenancePanel from "../components/panels/DataProvenancePanel";

export default function Dashboard() {
  const salesData = [
    { label: "Jan", sales: 4000 },
    { label: "Feb", sales: 3000 },
    { label: "Mar", sales: 5000 },
    { label: "Apr", sales: 4000 },
    { label: "May", sales: 6000 },
  ];

  return (
    // Sets the blue background gradient (from-blue-50 via-blue-100)
    <div className="min-h-screen bg-gradient-to-b from-blue-50 via-blue-100 to-blue-50 flex flex-col lg:flex-row">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Navbar />
        {/* Main content area: responsive 12-column grid with gap-6 */}
        <main className="p-6 grid grid-cols-12 gap-6">
          
          {/* Stat Cards Column */}
          <div className="col-span-12 md:col-span-4 lg:col-span-3 flex flex-col gap-4">
            <StatCard title="Revenue" value="$12,500" delta={8} note="Compared to last week — Promo X increased sales." />
            <StatCard title="Users" value="1,250" delta={5} note="Active users this week — manually verified." />
            <StatCard title="Orders" value="320" delta={-2} note="Processed orders — minor March delay." />
          </div>

          {/* Charts Column */}
          <div className="col-span-12 md:col-span-8 lg:col-span-6 flex flex-col gap-6">
            <LineChartCard title="Monthly Sales" data={salesData} dataKey="sales" note="Feb dip due to shipment delays — checked manually." />
            <LineChartCard title="User Growth" data={[
              { label: "Jan", users: 200 },
              { label: "Feb", users: 300 },
              { label: "Mar", users: 450 },
              { label: "Apr", users: 500 },
              { label: "May", users: 650 },
            ]} dataKey="users" note="Growth verified by Connie." />
          </div>

          {/* Data Provenance Column */}
          <div className="col-span-12 lg:col-span-3 flex flex-col gap-4">
            <DataProvenancePanel
              source="Internal ERP System"
              lastUpdated="2025-10-10"
              transform="Daily aggregation v1.2"
              notes="Verified by Connie; minor March corrections applied."
            />
          </div>
        </main>
      </div>
    </div>
  );
}