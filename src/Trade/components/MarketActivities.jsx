import React, { useEffect, useState } from 'react';
import axios from 'axios';

const MarketActivities = () => {
  const [marketActivities, setMarketActivities] = useState([]);
  const [loading, setLoading] = useState(true);

  const symbols = ['MSFT', 'AAPL', 'GOOGL', 'AMZN', 'TSLA','META'];

  const fetchMarketData = async () => {
    const apiKey = 'cu0fm31r01ql96gqgt50cu0fm31r01ql96gqgt5g';
    const requests = symbols.map(symbol =>
      axios.get(`https://finnhub.io/api/v1/quote?symbol=${symbol}&token=${apiKey}`)
    );

    try {
      const responses = await Promise.all(requests);
      const activities = responses.map((response, index) => {
        const data = response.data;
        return {
          symbol: symbols[index],
          price: data.c,
          pnl: ((data.c - data.pc) / data.pc * 100).toFixed(2) + '%', // Profit/Loss percentage
          trend: data.c > data.pc ? 'Rally' : 'Decline',
        };
      });
      setMarketActivities(activities);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching market data:', error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchMarketData();
    const interval = setInterval(fetchMarketData, 300000); // Fetch data every 5 minutes
    return () => clearInterval(interval);
  }, []);

  return (
    <div className='bg-gray-200 w-fit ml-3 mt-5 dark:bg-gray-800 p-4 rounded-lg text-white'>
      <h2 className="text-lg font-semibold mb-4">Market Activities</h2>
      {
      loading ? (
        <div className="text-center text-gray-500">Loading...</div>
      ) : (
        <div className="flex flex-col space-y-2">
          {marketActivities.map((activity, index) => (
            <div
              key={index}
              className={`flex items-center justify-between px-4 py-2 rounded-md ${
                index % 2 === 0 ? 'bg-gray-100 dark:bg-gray-800' : 'bg-white dark:bg-gray-900'
              }`}
            >
              <div className="flex items-center">
                <span className="mr-2 font-semibold">{activity.symbol}</span>
                <span className="text-gray-500 dark:text-gray-400">{activity.price}</span>
              </div>
              <div className={`flex items-center ${activity.pnl.includes('+') ? 'text-green-600' : 'text-red-600'}`}>
                <span className="mr-2 font-semibold">{activity.pnl}</span>
                <span>
                  {activity.trend === 'Rally' ? (
                    <svg
                      className="w-4 h-4 text-green-600"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
                    </svg>
                  ) : (
                    <svg
                      className="w-4 h-4 text-red-600"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                    </svg>
                  )}
                </span>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MarketActivities;