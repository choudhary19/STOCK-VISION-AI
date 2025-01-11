import React from 'react';
import TradingViewChart from './TradingViewChart';

const TradingViewChartArea = () => {
  return (
    <div className="ml-1 rounded-lg shadow-lg p-6 bg-white bg-opacity-80 backdrop-filter backdrop-blur-lg border border-gray-300">
      <TradingViewChart />
    </div>
  );
};

export default TradingViewChartArea;