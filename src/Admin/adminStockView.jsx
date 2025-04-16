import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';

const AdminStockView = () => {
  const [marketActivities, setMarketActivities] = useState([]);
  const [loading, setLoading] = useState(true);

  const symbols = ['MSFT', 'AAPL', 'GOOGL', 'AMZN', 'TSLA', 'META'];

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
          previousClose: data.pc,
          pnl: data.pc !== 0 ? (((data.c - data.pc) / data.pc) * 100).toFixed(2) + '%' : 'N/A',
          trend: data.c > data.pc ? 'Rally' : data.c < data.pc ? 'Decline' : 'Stable',
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
    <div className="bg-gray-800 w-full ml-3 mt-5 p-4 rounded-lg text-white">
      <h2 className="text-lg font-semibold mb-4 text-center">Stocks Activities</h2>

      {loading ? (
        <div className="text-center text-gray-400">Loading...</div>
      ) : (
        <Table>
          <TableHeader>
            <TableRow className="bg-gray-700  font-semibold">
              <TableHead className="text-blue-600">Symbol</TableHead>
              <TableHead className="text-blue-600">Current Price</TableHead>
              <TableHead className="text-blue-600">Previous Close</TableHead>
              <TableHead className="text-blue-600">PNL</TableHead>
              <TableHead className="text-blue-600">Trend</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {marketActivities.map((activity, index) => (
              <TableRow key={index} className="hover:bg-gray-700">
                <TableCell className="font-medium">{activity.symbol}</TableCell>
                <TableCell className="text-green-500">${activity.price}</TableCell>
                <TableCell className="text-gray-400">${activity.previousClose}</TableCell>
                <TableCell className={activity.pnl.includes('-') ? 'text-red-500' : 'text-green-500'}>{activity.pnl}</TableCell>
                <TableCell>
                  <span className="flex items-center">
                    {activity.trend === 'Rally' ? <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" /></svg> : activity.trend === 'Decline' ? <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg> : <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-3a1 1 0 011-1m5 0a2 2 0 012 0v1a1 1 0 001 1h3a1 1 0 001-1v-3a1 1 0 00-1-1h-3a1 1 0 00-1 1m-6 0a2 2 0 004 0v1a1 1 0 001 1h3a1 1 0 001-1v-3a1 1 0 00-1-1h-3a1 1 0 00-1 1" /></svg>}
                  </span>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      )}
    </div>
  );
};

export default AdminStockView;

