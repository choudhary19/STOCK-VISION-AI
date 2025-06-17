import React from 'react';

const OrdersData = ({ orders }) => {
  return (
    <div className="relative mb-5 overflow-x-auto shadow-md sm:rounded-lg">
      <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="px-6 py-3">Asset</th>
            <th scope="col" className="px-6 py-3">OrderType</th>
            <th scope="col" className="px-6 py-3">Side</th>
            <th scope="col" className="px-6 py-3">Time in force</th>
            <th scope="col" className="px-6 py-3">Qty</th>
            <th scope="col" className="px-6 py-3">Filled Qty</th>
            <th scope="col" className="px-6 py-3">Avg Fill Price</th>
            <th scope="col" className="px-6 py-3">Status</th>
            <th scope="col" className="px-6 py-3">Submitted At</th>
            {/* <th scope="col" className="px-6 py-3">
              <div className="flex items-center text-yellow-400">
                Cancel All
                <a href="#">
                  <svg className="w-3 h-3 ms-1.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8.574 11.024h6.852a2.075 2.075 0 0 0 1.847-1.086 1.9 1.9 0 0 0-.11-1.986L13.736 2.9a2.122 2.122 0 0 0-3.472 0L6.837 7.952a1.9 1.9 0 0 0-.11 1.986 2.074 2.074 0 0 0 1.847 1.086Zm6.852 1.952H8.574a2.072 2.072 0 0 0-1.847 1.087 1.9 1.9 0 0 0 .11 1.985l3.426 5.05a2.123 2.123 0 0 0 3.472 0l3.427-5.05a1.9 1.9 0 0 0 .11-1.985 2.074 2.074 0 0 0-1.846-1.087Z" />
                  </svg>
                </a>
              </div>
            </th> */}
          </tr>
        </thead>
        <tbody>
          {orders.length === 0 ? (
            <tr>
              <td colSpan={9} className="px-6 py-4 text-center">You have no open orders</td>
            </tr>
          ) : (
            orders.map((order) => (
              <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700" >
                <td className="px-6 py-4">{order.symbol}</td>
                <td className="px-6 py-4">{order.order_type}</td>
                <td className="px-6 py-4">{order.side}</td>
                <td className="px-6 py-4">{order.time_in_force}</td>
                <td className="px-6 py-4">{order.qty}</td>
                <td className="px-6 py-4">{order.filled_qty}</td>
                <td className="px-6 py-4">{order.filled_avg_price}</td>
                <td className="px-6 py-4">{order.status}</td>
                <td className="px-6 py-4">{order.submitted_at}</td>
                {/* <td className="px-6 py-4 text-right">
                  <button className="bg-red-500 text-white rounded-lg px-4 py-2.5 text-sm w-full">Cancel</button>
                </td> */}
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
};

export default OrdersData;
