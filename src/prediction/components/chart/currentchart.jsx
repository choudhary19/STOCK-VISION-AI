import React, { useState, useEffect } from 'react';

const CurrentChart = ({ symbol, data, prediction }) => {

  return (
    <div className="w-full h-80 rounded-lg shadow p-4">
      <div className="flex justify-between">
        <div>
          <h5 className="leading-none text-3xl font-bold text-white dark:text-white pb-2">
            Current Price: Eg 250
          </h5>
          <p className="text-base font-normal text-gray-500 dark:text-gray-400">Apple Inc.</p>
        </div>
        <div className="flex items-center px-2.5 py-0.5 text-base font-semibold text-green-500 dark:text-green-500 text-center">
          1.267%
          <svg
            className="w-3 h-3 ms-1"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 10 14"
          >
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13V1m0 0L1 5m4-4 4 4" />
          </svg>
        </div>
      </div>
       <div className="h-80 w-full flex items-center justify-center">
         <img src="public/img/about/who-we-are-chart.png" alt="Chart" className="w-full h-full object-contain" />
       </div>
    </div>
  );
};

export default CurrentChart;
