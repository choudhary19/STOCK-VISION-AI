import React, { useEffect, useState } from "react";
import axios from "axios";

const CurrentChart = ({ symbol }) => {
  const [liveData, setLiveData] = useState(null);
  const [historicalData, setHistoricalData] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchStockData = async () => {
      try {
        const response = await axios.post("http://localhost:5000/api/get-stockData", { symbol });

        const live = response.data.live;
        const historical = response.data.historical || [];

        setLiveData(live || null);
        // Show the last 5 historical entries (excluding live)
        setHistoricalData(historical.slice(-5));
        setError("");
      } catch (err) {
        console.error("Error fetching stock data:", err);
        setError("Failed to load stock data.");
      }
    };

    fetchStockData(); // initial fetch
    const interval = setInterval(fetchStockData, 10000); // refresh every 10 seconds
    return () => clearInterval(interval);
  }, [symbol]);

  return (
    <div className="bg-white rounded-lg p-6 shadow-xl max-w-2xl mx-auto mt-4">
      <h2 className="text-2xl font-bold text-center mb-4 text-gray-800">{symbol} Stock Tracker</h2>

      {error && <p className="text-red-500 text-center">{error}</p>}

      {/* Live Data Section */}
      {liveData && (
        <div className="bg-gray-50 rounded-md p-4 shadow-inner mb-6">
          <h3 className="text-xl font-semibold text-indigo-700 mb-2 text-center">📈 Live Market Data</h3>
          <div className="grid grid-cols-2 gap-4 text-gray-700 text-sm sm:text-base">
            <p><strong>Price:</strong> ${liveData.price}</p>
            <p><strong>Open:</strong> ${liveData.open}</p>
            <p><strong>High:</strong> ${liveData.high}</p>
            <p><strong>Low:</strong> ${liveData.low}</p>
            <p><strong>Volume:</strong> {liveData.volume.toLocaleString()}</p>
          </div>
        </div>
      )}

      {/* Historical Data Table */}
      {historicalData.length > 0 && (
        <div className="overflow-x-auto">
          <h3 className="text-lg font-semibold text-center text-gray-700 mb-2">📅 Past 5 Trading Days</h3>
          <table className="min-w-full border border-gray-300 text-sm">
            <thead className="bg-gray-100 text-gray-700">
              <tr>
                <th className="border px-3 py-2">Date</th>
                <th className="border px-3 py-2">Open</th>
                <th className="border px-3 py-2">High</th>
                <th className="border px-3 py-2">Low</th>
                <th className="border px-3 py-2">Close</th>
                <th className="border px-3 py-2">Volume</th>
              </tr>
            </thead>
            <tbody>
              {historicalData.map((entry, index) => (
                <tr key={index} className="text-center hover:bg-gray-50">
                  <td className="border px-3 py-1">{entry.date}</td>
                  <td className="border px-3 py-1">${entry.open?.toFixed(2) || "N/A"}</td>
                  <td className="border px-3 py-1">${entry.high?.toFixed(2) || "N/A"}</td>
                  <td className="border px-3 py-1">${entry.low?.toFixed(2) || "N/A"}</td>
                  <td className="border px-3 py-1">${entry.close?.toFixed(2) || "N/A"}</td>
                  <td className="border px-3 py-1">{entry.volume?.toLocaleString() || "N/A"}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default CurrentChart;
