import React, { useState, useEffect } from "react";
import { Users } from "lucide-react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, LineChart, Line } from "recharts";

function Admin_home() {
  // Metric Card Component
  function MetricCard({ title, value, change }) {
    return (
      <div className="bg-[#111] rounded-lg p-6">
        <h3 className="text-sm font-medium text-gray-400 mb-2">{title}</h3>
        <p className="text-3xl font-bold mb-1">{value}</p>
        <p className="text-xs text-gray-400">{change}</p>
      </div>
    );
  }

  // Sample data for admin notifications/messages
  const [messages, setMessages] = useState([
    { id: 1, title: "User Report", content: "User John Doe reported an issue with the dashboard.", date: "2023-05-01" },
    { id: 2, title: "Feature Request", content: "User Jane Smith requested a new feature for analytics.", date: "2023-05-02" },
    { id: 3, title: "Bug Report", content: "User Mike Johnson reported a bug in the login system.", date: "2023-05-03" },
    { id: 4, title: "Feedback", content: "User Emily Davis provided feedback on the new design.", date: "2023-05-04" },
  ]);

  const [selectedMessage, setSelectedMessage] = useState(null);

  // Function to handle message selection
  const handleSelectMessage = (message) => {
    setSelectedMessage(message);
  };

  // Users API state and fetch logic
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);  // Add loading state

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/get-users');
        const data = await response.json(); // Parse the JSON response

        console.log("API Response:", data); // Check the response structure

        setUsers(data.data || []);  // Ensure 'data' field exists in the response
      } catch (error) {
        console.error("Error fetching users:", error);
      } finally {
        setLoading(false);  // Set loading to false once done
      }
    };

    fetchUsers();
  }, []);

  const userCount = users.length;  // Count the number of users

  return (
    <div>
      <h2 className="text-2xl font-bold mb-6">Dashboard Overview</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
        <MetricCard title="Total Users" value={userCount} change="+5% from last week" />
        <MetricCard title="Active Users" value={userCount} change="+3% from last week" />
        <MetricCard title="Revenue" value="$0" change="+7% from last week" />
      </div>

      {/* Admin Inbox Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Sidebar with list of messages */}
        <div className="bg-[#111] rounded-lg p-6 col-span-1">
          <h3 className="text-sm font-medium text-gray-400 mb-4">Messages</h3>
          <ul className="space-y-4">
            {messages.map((message) => (
              <li
                key={message.id}
                className="cursor-pointer p-4 bg-[#222] rounded-lg hover:bg-[#333] transition"
                onClick={() => handleSelectMessage(message)}
              >
                <h4 className="text-lg font-bold text-white">{message.title}</h4>
                <p className="text-sm text-gray-400">{message.date}</p>
              </li>
            ))}
          </ul>
        </div>

        {/* Message details */}
        <div className="bg-[#111] rounded-lg p-6 col-span-2">
          {selectedMessage ? (
            <>
              <h3 className="text-lg font-bold text-white mb-2">{selectedMessage.title}</h3>
              <p className="text-sm text-gray-400 mb-4">{selectedMessage.date}</p>
              <p className="text-white">{selectedMessage.content}</p>
            </>
          ) : (
            <p className="text-gray-400">Select a message to view details.</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default Admin_home;
