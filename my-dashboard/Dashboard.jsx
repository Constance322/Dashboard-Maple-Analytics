import Navbar from "../components/layout/Navbar";
import Sidebar from "../components/layout/Sidebar";
import StatCard from "../components/cards/StatCard";
import LineChartCard from "../components/charts/LineChartCard";

export default function Dashboard() {
  const salesData = [
    { label: "Jan", sales: 4000 },
    { label: "Feb", sales: 3000 },
    { label: "Mar", sales: 5000 },
    { label: "Apr", sales: 4000 },
    { label: "May", sales: 6000 },
  ];

  return (
    <div className="min-h-screen bg-primary-50 flex">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        <Navbar />
        <main className="p-6 grid grid-cols-12 gap-6">
          {/* Stat Cards */}
          <div className="col-span-12 lg:col-span-3">
            <StatCard title="Revenue" value="$12,500" delta={8} note="Compared to last week" />
            <StatCard title="Users" value="1,250" delta={5} note="Active users this week" />
            <StatCard title="Orders" value="320" delta={2} note="Processed orders" />
          </div>

          {/* Charts */}
          <div className="col-span-12 lg:col-span-9 flex flex-col gap-6">
            <LineChartCard title="Monthly Sales" data={salesData} dataKey="sales" />
            <LineChartCard title="User Growth" data={[
              { label: "Jan", users: 200 },
              { label: "Feb", users: 300 },
              { label: "Mar", users: 450 },
              { label: "Apr", users: 500 },
              { label: "May", users: 650 },
            ]} dataKey="users" />
          </div>
        </main>
      </div>
    </div>
  );
}
<LineChartCard 
  title="Monthly Sales" 
  data={salesData} 
  dataKey="sales" 
  note="Sales were slightly lower in Feb due to delayed shipments — checked manually." 
/>
