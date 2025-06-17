import React, { useState, useEffect } from "react";
import axios from "axios";

const OrderForm = ({ buttonType, symbol, apiKey, secretKey, accountData }) => {
  const [quantity, setQuantity] = useState(1);
  const [orderType, setOrderType] = useState("market");
  const [timeInForce, setTimeInForce] = useState("day");
  const [marketPrice, setMarketPrice] = useState(0);
  const [limitPrice, setLimitPrice] = useState(0);
  const [stopPrice, setStopPrice] = useState(0);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);

  useEffect(() => {

    const fetchMarketPrice = async () => {
      try {
        const response = await axios.post("http://localhost:5000/api/get-alpaca-price", {
          symbol,
          apikey: apiKey,
          secretKey,
        });
        if (response.data?.price) {
          setMarketPrice(response.data.price);
        }
      } catch (err) {
        console.error("Failed to fetch market price:", err);
      }
    };

    if (symbol && apiKey && secretKey) {
      fetchMarketPrice();
    }
  }, [symbol, apiKey, secretKey]);

  const calculateEstimatedCost = () => {
    return (quantity * marketPrice).toFixed(2);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setSuccess(null);

    try {


      const orderData={
        apikey: apiKey,
        secretKey,
        symbol,
        qty: quantity,
        side: buttonType,
        type: orderType,
        time_in_force: timeInForce,
      };
      
      
      if (orderType === "limit" || orderType === "stop_limit") {
        orderData.limit_price = parseFloat(limitPrice);
      }
      if (orderType === "stop" || orderType === "stop_limit") {
        orderData.stop_price = parseFloat(stopPrice);
      }

      const response = await axios.post(
        "http://localhost:5000/api/place-order",
        JSON.stringify(orderData),
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (response.data?.order) {
        setSuccess([
          "Order placed successfully!",
          'Order ID: ' + response.data.order.id,
          'Order Side: ' + response.data.order.side,
          'Order Symbol: ' + response.data.order.symbol,
          'Order Quantity: ' + response.data.order.qty
        ].join('\n'));
        setQuantity(1); // Reset quantity after success
      } else {
        throw new Error(response.data?.message || "Failed tooo place order");
      }
    } catch (err) {
      console.error("Order Error:", err);
      setError("Failed to place order Field Cannot be Empty");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-gray-800 p-6 rounded-lg">
      <h3 className="text-xl font-semibold text-blue-300 mb-4 text-center">{buttonType}</h3>

      <form onSubmit={handleSubmit}>
        {/* Symbol */}
        <div className="mb-4">
          <label className="block text-gray-400 text-sm font-medium mb-1">Symbol</label>
          <div className="bg-gray-700 text-white p-2 rounded border border-gray-600">{symbol}</div>
        </div>

        {/* Market Price */}
        <div className="mb-4">
          <label className="block text-gray-400 text-sm font-medium mb-1">Market Price</label>
          <div className="bg-gray-700 text-white p-2 rounded border border-gray-600">
            ${marketPrice.toFixed(2)}
          </div>
        </div>

        {/* Quantity */}
        <div className="mb-4">
          <label className="block text-gray-400 text-sm font-medium mb-1">Quantity</label>
          <input
            type="number"
            min="1"
            className="w-full bg-gray-700 border border-gray-600 text-white rounded px-3 py-2"
            value={quantity}
            onChange={(e) => setQuantity(parseInt(e.target.value))}
          />
        </div>

        {/* Order Type */}
        <div className="mb-4">
          <label className="block text-gray-400 text-sm font-medium mb-1">Order Type</label>
          <select
            className="w-full bg-gray-700 border border-gray-600 text-white rounded px-3 py-2"
            value={orderType}
            onChange={(e) => setOrderType(e.target.value)}
          >
            <option value="market">Market</option>
            <option value="limit">Limit</option>
            <option value="stop">Stop</option>
            <option value="stop_limit">Stop Limit</option>
          </select>
        {orderType === "limit" && (
          <div className="mt-2">
           
            <label className="block text-gray-400 text-sm font-medium mb-1">Limit Price</label>
            <input
                type="number"
                className="w-full bg-gray-700 border border-gray-600 text-white rounded px-3 py-2"
                placeholder="Enter limit price $"
                value={limitPrice}
                onChange={(e) => setLimitPrice(e.target.value)}
              />
         
          </div>  
        )}
        {orderType === "stop" && (
          <div className="mt-2">
            <label className="block text-gray-400 text-sm font-medium mb-1">Stop Price</label>
            <input
                type="number"
                className="w-full bg-gray-700 border border-gray-600 text-white rounded px-3 py-2"
                placeholder="Enter limit price $"
                value={stopPrice}
                onChange={(e) => setStopPrice(e.target.value)}
              />
            
          </div>
        )}
        {
          orderType === "stop_limit" && (
            <div className="mt-2">
              <label className="block text-gray-400 text-sm font-medium mb-1">Stop Price</label>
                 <input
                type="number"
                className="w-full bg-gray-700 border border-gray-600 text-white rounded px-3 py-2"
                placeholder="Enter limit price $"
                value={stopPrice}
                onChange={(e) => setStopPrice(e.target.value)}
              />
               <label className="block text-gray-400 text-sm font-medium mb-1">Limit Price</label>
               <input
                type="number"
                className="w-full bg-gray-700 border border-gray-600 text-white rounded px-3 py-2"
                placeholder="Enter limit price $"
                value={limitPrice}
                onChange={(e) => setLimitPrice(e.target.value)}
              />
            </div>
          )
        }
        </div>

        {/* Tivalme in Force */}
        <div className="mb-4">
          <label className="block text-gray-400 text-sm font-medium mb-1">Time in Force</label>
          <select
            className="w-full bg-gray-700 border border-gray-600 text-white rounded px-3 py-2"
            value={timeInForce}
            onChange={(e) => setTimeInForce(e.target.value)}
          >
            <option value="day">DAY</option>
            <option value="gtc">GTC</option>
            <option value="opg">OPG</option>
         
          </select>
        </div>

        {/* Estimated Cost */}
        <div className="mb-6">
          <label className="block text-gray-400 text-sm font-medium mb-1">Estimated Cost</label>
          <div className="bg-gray-700 text-white p-2 rounded border border-gray-600">
            ${calculateEstimatedCost()}
          </div>
        </div>

        {/* Buying Power */}
        <div className="mb-6">
          <label className="block text-gray-400 text-sm font-medium mb-1">Buying Power</label>
          <div className="bg-gray-700 text-white p-2 rounded border border-gray-600">
            ${accountData?.buying_power ? parseFloat(accountData.buying_power).toFixed(2) : "0.00"}
          </div>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className={`w-full ${
            buttonType === "buy"
              ? "bg-green-600 hover:bg-green-700"
              : "bg-red-600 hover:bg-red-700"
          } text-white font-bold py-2 px-4 rounded disabled:opacity-50`}
          disabled={loading}
        >
          {loading ? "Placing Order..." : `Review ${buttonType} Order`}
        </button>

        {/* Error & Success Messages */}
        {error && (
          <div className="mt-4 p-3 bg-red-900 text-red-100 rounded text-sm">{error}</div>
        )}
        {success && (
          <div className="mt-4 p-3 bg-green-900 text-green-100 rounded text-sm">{success}</div>
        )}
      </form>
    </div>
  );
};

export default OrderForm;
