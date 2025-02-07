import React, { useState } from 'react';

const OrdersData = () => {
  const orders = [
    { id: "1", symbol: "AAPL", qty: "100", side: "Buy", time_in_force: "GTC", order_class: "Market", order_type: "Order", limit_price: "0.05", stop_price: "0", status: "Active", submitted_at: "12:00"},
    { id: "2", symbol: "AMZN", qty: "50", side: "Sell", time_in_force: "GTC", order_class: "Limit", order_type: "Order", limit_price: "0", stop_price: "0.1", status: "Active", submitted_at: "12:05"},
    { id: "3", symbol: "GOOGL", qty: "25", side: "Buy", time_in_force: "GTC", order_class: "Stop", order_type: "Order", limit_price: "0", stop_price: "0.95", status: "Active", submitted_at: "12:10"},
    { id: "4", symbol: "MSFT", qty: "150", side: "Sell", time_in_force: "GTC", order_class: "Stop", order_type: "Limit", limit_price: "0.15", stop_price: "0", status: "Active", submitted_at: "12:15"},
    { id: "5", symbol: "FB", qty: "100", side: "Buy", time_in_force: "GTC", order_class: "Market", order_type: "Market", limit_price: "0", stop_price: "0", status: "Active", submitted_at: "12:20"},

  ];


  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
      <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="px-6 py-3">Symbol</th>
            <th scope="col" className="px-6 py-3">Quantity</th>
            <th scope="col" className="px-6 py-3">Side</th>
            <th scope="col" className="px-6 py-3">Time in Force</th>
            <th scope="col" className="px-6 py-3">Order Class</th>
            <th scope="col" className="px-6 py-3">Order Type</th>
            <th scope="col" className="px-6 py-3">Take Profit</th>
            <th scope="col" className="px-6 py-3">Stop Loss</th>
            <th scope="col" className="px-6 py-3">Status</th>
            <th scope="col" className="px-6 py-3">Submitted At</th>
            <th scope="col" className="px-6 py-3 text-right">Cancel All</th>
          </tr>
        </thead>
        <tbody>
          {orders.length === 0 ? emptyOrders.map((order, index) => (
            <tr key={order.id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
              <td className="px-6 py-4">{order.symbol}</td>
              <td className="px-6 py-4">{order.qty}</td>
              <td className="px-6 py-4">
                <span className={`font-semibold ${order.side === 'buy' ? 'text-green-500' : 'text-red-500'}`}>
                  {order.side.toUpperCase()}
                </span>
              </td>
              <td className="px-6 py-4">{order.time_in_force}</td>
              <td className="px-6 py-4">{order.order_class}</td>
              <td className="px-6 py-4">{order.order_type}</td>
              <td className="px-6 py-4">{order.limit_price || '--'}</td>
              <td className="px-6 py-4">{order.stop_price || '--'}</td>
              <td className="px-6 py-4">
                <span className={`font-semibold ${order.status === 'accepted' ? 'text-green-500' : order.status ==='canceled'?'text-red-500' : 'text-white'}`}>
                  {order.status.toUpperCase()}
                </span>
              </td>
              <td className="px-6 py-4">{order.submitted_at}</td>
              <td className="px-6 py-4 text-right">
                <button className="bg-red-500 text-white rounded-lg px-4 py-2.5 text-sm w-full" onClick={() => console.log("Cancel")}>
                  Cancel
                </button>
              </td>
            </tr>
          )) : orders.map((order, index) => (
            <tr key={order.id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
              <td className="px-6 py-4">{order.symbol}</td>
              <td className="px-6 py-4">{order.qty}</td>
              <td className="px-6 py-4">
                <span className={`font-semibold ${order.side === 'buy' ? 'text-green-500' : 'text-red-500'}`}>
                  {order.side.toUpperCase()}
                </span>
              </td>
              <td className="px-6 py-4">{order.time_in_force}</td>
              <td className="px-6 py-4">{order.order_class}</td>
              <td className="px-6 py-4">{order.order_type}</td>
              <td className="px-6 py-4">{order.limit_price || '--'}</td>
              <td className="px-6 py-4">{order.stop_price || '--'}</td>
              <td className="px-6 py-4">
                <span className={`font-semibold ${order.status === 'accepted' ? 'text-green-500' : order.status ==='canceled'?'text-red-500' : 'text-white'}`}>
                  {order.status.toUpperCase()}
                </span>
              </td>
              <td className="px-6 py-4">{order.submitted_at}</td>
              <td className="px-6 py-4 text-right">
                <button className="bg-red-500 text-white rounded-lg px-4 py-2.5 text-sm w-full" onClick={() => console.log("Cancel")}>
                  Cancel
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default OrdersData;