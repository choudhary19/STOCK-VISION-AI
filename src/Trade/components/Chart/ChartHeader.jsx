import React from 'react';

const ChartHeader = ({ onTimeIntervalChange }) => {
  return (
    <ul className="flex  ml-1  rounded-lg mt-2 flex-wrap bg-blue-950 text-sm font-medium text-center text-gray-500 dark:text-gray-400">
     
      <li className="me-2">
        <button onClick={() => onTimeIntervalChange('1m')} className="inline-block px-4 py-3 rounded-lg hover:text-gray-900 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-white">1m</button>
      </li>
      <li>
        <button onClick={() => onTimeIntervalChange('1y')} className="inline-block px-4 py-3 text-gray-400 cursor-not-allowed dark:text-gray-500">1y</button>
      </li>
      <svg className="pt-4 w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 10">
        <path d="M15.434 1.235A2 2 0 0 0 13.586 0H2.414A2 2 0 0 0 1 3.414L6.586 9a2 2 0 0 0 2.828 0L15 3.414a2 2 0 0 0 .434-2.179Z" />
      </svg>
      <div className="flex  pl-80 ml-80 ">
        <li className="me-2">
          <button className="inline-block px-4 py-3 rounded-lg text-yellow-200 hover:text-gray-900 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-white">Original</button>
        </li>
        <li className="me-2">
          <button className="inline-block px-4 py-3 rounded-lg hover:text-gray-900 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-white">TradingView</button>
        </li>
        <li>
          <button className="inline-block px-4 py-3 text-gray-400 cursor-not-allowed dark:text-gray-500">Depth</button>
        </li>
      </div>
    </ul>
  );
};

export default ChartHeader;