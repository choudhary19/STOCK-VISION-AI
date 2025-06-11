import React, { useState, useEffect } from "react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from "recharts";

function Admin_home() {
  // Metric Card Component
  function MetricCard({ title, value, change }) {
    return (
      <div className="bg-[#111] rounded-lg p-6 flex flex-col items-center">
        <h3 className="text-sm font-medium text-gray-400 mb-2">{title}</h3>
        <p className="text-3xl font-bold mb-1">{value}</p>
        {change && <p className="text-xs text-green-400">{change}</p>}
      </div>
    );
  }

  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  const [systemStatus, setSystemStatus] = useState(null);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/get-users');
        const data = await response.json();
        setUsers(data.data || []);
      } catch (error) {
        setUsers([]);
      } finally {
        setLoading(false);
      }
    };

    const fetchStatus = async () => {
      try {
        const response = await fetch('http://localhost:8000/status');
        const data = await response.json();
        setSystemStatus(data);
      } catch (error) {
        console.error("Failed to fetch status", error);
      }
    };

    fetchUsers();
    fetchStatus();
  }, []);

  const userCount = users.length;

  const today = new Date();
  const currentMonth = today.toLocaleString('default', { month: 'long' });
  const prevMonth = new Date(today.getFullYear(), today.getMonth() - 1).toLocaleString('default', { month: 'long' });

  const userGrowthData = [
    { month: prevMonth, users: Math.max(0, userCount+1) },
    { month: currentMonth, users: userCount }
  ];

  return (
    <div>
      <h2 className="text-2xl font-bold mb-6">Admin Dashboard</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
        <MetricCard title="Total Users" value={loading ? "Loading..." : userCount} />

        <div className="bg-[#111] rounded-lg p-6 flex flex-col items-center">
          <h3 className="text-sm font-medium text-gray-400 mb-2">User Growth</h3>
          <ResponsiveContainer width="100%" height={120}>
            <BarChart data={userGrowthData}>
              <CartesianGrid strokeDasharray="3 3" vertical={false} />
              <XAxis dataKey="month" stroke="#8884d8" />
              <YAxis hide />
              <Tooltip />
              <Bar dataKey="users" fill="#8884d8" radius={[8, 8, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>

<div className="bg-[#111] rounded-xl p-6 shadow-md w-full">
  <h3 className="text-sm font-medium text-gray-400 mb-4 border-b border-gray-700 pb-2">
    <span className="inline-flex items-center text-green-400 font-bold text-lg">
      <svg className="w-4 h-4 mr-2 text-green-400" fill="currentColor" viewBox="0 0 20 20">
        <path d="M10 18a8 8 0 100-16 8 8 0 000 16zm-1-4l5-5-1.5-1.5L9 11l-1.5-1.5L6 11l3 3z" />
      </svg>
      All Systems Operational
    </span>
  </h3>

  {systemStatus ? (
    <>
      <div className="mb-4">
        <p className="text-xs text-gray-400">
          Uptime: <span className="text-white font-semibold">{systemStatus.uptime_seconds}</span> seconds
        </p>
        <p className="text-xs text-gray-500">
          Last checked: {new Date().toLocaleTimeString()}
        </p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 w-full">
        {Object.entries(systemStatus.models).map(([model, info]) => (
          <div
            key={model}
            className="bg-[#1a1a1a] border border-gray-700 rounded-lg p-4 flex flex-col space-y-2 shadow-sm"
          >
            <div className="flex justify-between items-center">
              <h4 className="text-white font-semibold text-md">{model}</h4>
              <span className="text-xs text-green-400">✓ Healthy</span>
            </div>
            <div className="text-xs text-gray-400">
              <p>Load Time: <span className="text-white">{info.load_time}s</span></p>
              <p>Uptime: <span className="text-white">{info.uptime}s</span></p>
            </div>
          </div>
        ))}
      </div>
    </>
  ) : (
    <p className="text-red-400 text-sm">Failed to fetch system status</p>
  )}
</div>

      </div>
    </div>
  );
}

export default Admin_home;
