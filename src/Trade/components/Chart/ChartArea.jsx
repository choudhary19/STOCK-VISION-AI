import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Chart from 'react-apexcharts';
import TradingViewChartArea from './TradingViewChartArea'; // Import the component

const StockChart = () => {
  const [chartData, setChartData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedCompany, setSelectedCompany] = useState('AAPL');
  const [showTradingView, setShowTradingView] = useState(false); // State to toggle view

  const companies = [
    { symbol: 'AAPL', name: 'APPLE' },
    { symbol: 'TSLA', name: 'TESLA' },
    { symbol: 'AMZN', name: 'AMAZON' },
    { symbol: 'MSFT', name: 'MICROSOFT' },
    { symbol: 'META', name: 'META' },
  ];

  const fetchStockData = async (symbol) => {
    const apiKey = '0054c9970f6320bbc3fafa0d13be651e';
    const endpoint = 'http://api.marketstack.com/v2/eod';
    const endDate = new Date().toISOString().split('T')[0];
    const startDate = new Date(new Date().setDate(new Date().getDate() - 30)).toISOString().split('T')[0];

    try {
      const response = await axios.get(endpoint, {
        params: {
          access_key: apiKey,
          symbols: symbol,
          date_from: startDate, // Start date
          date_to: endDate,     // End date
        },
      });

      const data = response.data.data;
      const formattedData = data.map(item => ({
        x: new Date(item.date).getTime(), // Convert the date to a timestamp
        y: item.close, // Closing price of the stock
      }));

      setChartData(formattedData);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching stock data:', error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchStockData(selectedCompany);
  }, [selectedCompany]);

  const handleCompanyChange = (event) => {
    setSelectedCompany(event.target.value);
    setLoading(true);
  };

  const options = {
    chart: {
      type: 'line',
      height: '100%',
      zoom: { enabled: true },
      toolbar: { show: true },
      background: 'light',
    },
    stroke: {
      width: 2,
      curve: 'smooth',
      colors: ['#1C64F2'],
    },
    xaxis: {
      type: 'datetime',
      labels: { format: 'dd MMM yyyy', style: { colors: '#6b7280' } },
      axisBorder: { color: 'black' },
      axisTicks: { color: '#e5e7eb' },
    },
    yaxis: {
      title: { text: 'Price (USD)', style: { color: '#6b7280' } },
      labels: { style: { colors: '#6b7280' } },
    },
    tooltip: { x: { format: 'dd MMM yyyy' } },
    title: {
      text: `${companies.find(company => company.symbol === selectedCompany).name} Stock Price (${selectedCompany})`,
      align: 'center',
      style: { fontSize: '20px', color: '#111827' },
    },
    grid: { borderColor: '#e5e7eb', strokeDashArray: 4 },
  };

  const series = [
    {
      name: selectedCompany,
      data: chartData,
    },
  ];

  return (
    <>
      <ul className="flex ml-1 rounded-lg mt-2 flex-wrap bg-blue-950 text-sm font-medium text-center text-gray-500 dark:text-gray-400">
        <li className="me-2">
          <button className="inline-block px-4 py-3 rounded-lg hover:text-gray-900 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-white">
            1m
          </button>
        </li>
        <li>
          <button className="inline-block px-4 py-3 text-gray-400 cursor-not-allowed dark:text-gray-500">
            1y
          </button>
        </li>
        <div className="flex pl-80 ml-80">
          <li className="me-2">
            <button
              className="inline-block px-4 py-3 rounded-lg hover:text-gray-900 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-white"
              onClick={() => setShowTradingView(false)} // Show the stock chart
            >
              Original
            </button>
          </li>
          <li className="me-2">
            <button
              className="inline-block px-4 py-3 rounded-lg hover:text-gray-900 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-white"
              onClick={() => setShowTradingView(true)} // Show the TradingView component
            >
              TradingView
            </button>
          </li>
          {/* <li>
            <button className="inline-block px-4 py-3 text-gray-400 cursor-not-allowed dark:text-gray-500">
              Depth
            </button>
          </li> */}
        </div>
      </ul>

      {/* Conditional Rendering */}
      {
      !showTradingView ? (
        <div className="ml-1 rounded-lg shadow-lg p-6 bg-white bg-opacity-80 backdrop-filter backdrop-blur-lg border border-gray-300">
          <h2 className="text-2xl font-semibold mb-4 text-gray-900">Stock Prices</h2>
          <div className="mb-4">
            <label
              htmlFor="company"
              className="block text-sm font-medium text-gray-700"
            >
              Select Company:
            </label>
            <select
              id="company"
              value={selectedCompany}
              onChange={handleCompanyChange}
              className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
            >
              {companies.map((company) => (
                <option key={company.symbol} value={company.symbol}>
                  {company.name}
                </option>
              ))}
            </select>
          </div>
          {loading ? (
            <div className="text-center text-gray-500">Loading...</div>
          ) : (
            <Chart options={options} series={series} type="line" height="350" />
          )}
        </div>
      ) :(
        <TradingViewChartArea />
      )
      
      }
    </>
  );
};

export default StockChart;
