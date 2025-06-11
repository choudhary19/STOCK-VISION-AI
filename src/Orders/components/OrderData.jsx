import React from 'react';
import { useState, useEffect } from 'react';

const OrdersData = () => {
       const [orders, setOrders] = useState([]);
       const [apiKey, setApiKey] = useState(localStorage.getItem("alpacaApiKey"));
      useEffect(() => {
        const fetchData = async () => {
          if (!apiKey) {
            setOrders([]);
            return;
          }
          try {
            const secretKey = localStorage.getItem("alpacaSecretKey");
            const res = await fetch("http://localhost:5000/api/get-stockPosition", {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({
                apikey: apiKey,
                secretKey: secretKey,
              }),
            });

            const data = await res.json();
            setOrders(data);
            console.log(data);
          } catch (error) {
            console.error("Error fetching orders:", error);
          }
        };

        const interval = setInterval(fetchData, 3000);
        return () => clearInterval(interval);
      }, [apiKey]);

  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
      <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="px-6 py-3">Asset</th>
            <th scope="col" className="px-6 py-3">Quantity</th>
            <th scope="col" className="px-6 py-3">Your Entry Price</th>
            <th scope="col" className="px-6 py-3">Current Price</th>
            <th scope="col" className="px-6 py-3">Market Value</th>
            <th scope="col" className="px-6 py-3">Total P/L ($)</th>
            {/* <th scope="col" className="px-6 py-3">Action</th> */}
          </tr>
        </thead>
        <tbody>
          {apiKey ? (
            orders.length === 0 ? (
              <tr>
                <td colSpan={6} className="px-6 py-4 text-center">You have no Assests Right now</td>
              </tr>
            ) : (
              orders.map((order, index) => (
                <tr key={index} className="bg-white border-b font-normal size-9 text- text-black ">
                  <td className="px-6 py-4">{order.symbol}</td>
                  <td className="px-6 py-4">{order.qty}</td>
                  <td className="px-6 py-4"><spna className="text-green-600 font-bold">$</spna>{order.avg_entry_price}</td>
                  <td className="px-6 py-4"><spna className="text-green-600 font-bold">$</spna>{order.current_price}</td>
                  <td className="px-6 py-4"><spna className="text-green-600 font-bold">$</spna>{order.market_value}</td>
                  <td className="px-6 py-4"><span className={order.unrealized_pl < 0 ? "text-red-600 font-bold" : "text-green-600 font-bold"}>{order.unrealized_pl} $</span></td>

                  {/* <td className="px-6 py-4"><span className={order.unrealized_pl < 0 ? "text-red-600 font-bold" : "text-green-600 font-bold"}>$</span>{order.unrealized_pl}</td> */}
                  {/* <td className="px-6 py-4">
                    <button className="text-red-600 hover:text-red-900">Delete</button>
                  </td> */}
                </tr>
              ))
            )
          ) : (
            <tr>
              <td colSpan={6} className="px-6 py-4 text-center">Please connect to your account</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default OrdersData;

