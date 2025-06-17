import React, { useState } from 'react';
import axios from 'axios';
import {
  LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid, Legend
} from 'recharts';

const PredictedChart = ({ symbol }) => {
  const [loading, setLoading] = useState(false);
  const [prediction, setPrediction] = useState(null);
  const [error, setError] = useState(null);
  const [trend, setTrend] = useState("");
  const [started, setStarted] = useState(false);  
  const [chartData, setChartData] = useState([]);

  const fetchPrediction = async () => {
    setLoading(true);
    setError(null);
    setStarted(true);

    try {
      const response = await axios.post(`http://localhost:8000/${symbol}_predict`, {
        stock_symbol: symbol
      });

      const data = response.data;
      setPrediction(data);
      // Compute trend
      const diff = data.predicted_Future_close - data.open;
      const percentChange = (diff / data.open) * 100;
      if (diff > 0) setTrend(`Buy 📈 (+${percentChange.toFixed(2)}%)`);
      else if (diff < 0) setTrend(`Sell 📉 (${percentChange.toFixed(2)}%)`);
      else setTrend("Hold 🤔 (0.00%)");

      // Prepare chart data
      const last7 = data.past7dayspredictions.slice(0, 6).map(item => ({
        
        date: item.date,
        actual: parseFloat(item.actual_close),
        predicted: parseFloat(item.predicted_close)
        
      }));

      // Add predicted value
      last7.push({
      date: "Predicted",
      // actual: parseFloat(data.actual_close),
      predicted: parseFloat(data.predicted_Future_close)
      });

      setChartData(last7);
     

    } catch (err) {
      setError("❌ Failed to fetch prediction.");
    }

    setLoading(false);
  };

  return (
    <div className="w-full rounded-lg shadow p-4 bg-gray-800 text-white">
      <div className="align-middle flex justify-center">
        <button
          onClick={fetchPrediction}
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          🚀 Start Prediction
        </button>
      </div>

      {started && (
        <div>
          {loading ? (
            <div className="animate-pulse space-y-4">
              <div className="h-6 bg-gray-600 rounded w-1/2"></div>
              <div className="h-4 bg-gray-600 rounded w-1/3"></div>
              <div className="h-48 bg-gray-700 rounded"></div>
            </div>
          ) : error ? (
            <p className="text-red-400">{error}</p>
          ) : (
            <>
              <div className="flex justify-between items-center mb-3">
                <div>
                  <h5 className="text-2xl font-bold">
                    Predicted Price: ${prediction?.predicted_Future_close.toFixed(2)}
                  </h5>
                  <p className="text-sm text-gray-300">
                    Last Price ({prediction?.last_date}): ${prediction?.actual_close.toFixed(2)}
                  </p>
                  <p className="text-sm text-gray-400 mt-1">Symbol: {prediction?.stock}</p>
                </div>
                <div className={`text-lg font-semibold px-3 py-1 rounded 
                  ${trend.includes("Buy") ? "text-green-400" : trend.includes("Sell") ? "text-red-400" : "text-yellow-300"}`}>
                  {trend}
                </div>
              </div>

              <div className="w-full h-96 bg-gray-700 rounded p-4">
        <ResponsiveContainer width="100%" height={400}>
  <LineChart data={chartData} margin={{ top: 20, right: 30, left: 0, bottom: 5 }}>
    <CartesianGrid strokeDasharray="3 3" stroke="#444" />
    <XAxis dataKey="date" stroke="#ccc" />
    <YAxis stroke="#ccc" domain={['auto', 'auto']} />
   <Tooltip
  formatter={(value, name) => {
    const labelMap = {
      actual: "Actual Price",
      predicted: "Predicted Price"
    };
    return [`$${value.toFixed(2)}`, labelMap[name] || name];
  }}
  labelStyle={{ color: '#fff' }}
  contentStyle={{ backgroundColor: '#222', borderRadius: '8px' }}
/>

    <Legend />
    
    <Line
      type="monotone"
      dataKey="actual"
      name="Actual Price"
      stroke="#00e676"
      strokeWidth={2}
     
    />
    <Line
      type="monotone"
      dataKey="predicted"
      name="Predicted Price"
      stroke="#ff1744"
      strokeDasharray="5 3"
      strokeWidth={2}
   
    />
  </LineChart>
</ResponsiveContainer>


              </div>
            </>
          )}
        </div>
      )}
    </div>
  );
};

export default PredictedChart;
