import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
  Legend,
} from "recharts";

const CurrentChart = ({ symbol }) => {
  const [liveData, setLiveData] = useState(null);
  const [historicalData, setHistoricalData] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchStockData = async () => {
      try {
        const response = await axios.post("http://localhost:5000/api/get-stockData", {
          symbol,
        });

        const { live, historical } = response.data || {};
        setLiveData(live || null);
        setHistoricalData(historical || []);
      } catch (err) {
        console.error("Error fetching stock data:", err);
        setError("Failed to load stock data.");
      }
    };

    const interval = setInterval(fetchStockData, 1000);
    return () => clearInterval(interval);
  }, [symbol]);

  return (
    <div className="bg-white rounded-lg p-4 shadow-md">
      <h2 className="text-xl font-semibold mb-4 text-center">{symbol} Stock Prices</h2>
      {error && <p className="text-red-500 text-center">{error}</p>}

      {/* Live Data Section */}
      {liveData && (
        <div className="mb-6 text-center">
          <h3 className="text-lg font-medium">Live Data</h3>
          <p>Price: ${liveData.price}</p>
          <p>Open: ${liveData.open}</p>
          <p>High: ${liveData.high}</p>
          <p>Low: ${liveData.low}</p>
          <p>Volume: {liveData.volume.toLocaleString()}</p>
        </div>
      )}

      {/* Historical Data Chart */}
      {historicalData.length > 0 ? (
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={historicalData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="date" tickFormatter={historicalData.date} />
            <YAxis domain={["auto", "auto"]} />
            <Tooltip labelFormatter={historicalData.date} />
            <Legend />
            <Line type="monotone" dataKey="open" stroke="#8884d8" name=" $Open Price" />
            <Line type="monotone" dataKey="close" stroke="#82ca9d" name="$Close Price" />
            <Line type="monotone" dataKey="high" stroke="#FF5733" name="$High Price" />
            <Line type="monotone" dataKey="low" stroke="#C70039" name="$Low Price" />
          </LineChart>
        </ResponsiveContainer>
      ) : (
        <p className="text-gray-500 text-center">Loading chart...</p>
      )}
    </div>
  );
};

export default CurrentChart;