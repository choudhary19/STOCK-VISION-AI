import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";


const PerformAutoTrade = () => {
  const [isLoggedIn] = useState(localStorage.getItem("alpacaLoggedIn") === "true");
  const [apiKey] = useState(localStorage.getItem("alpacaApiKey") || "");
  const [secretKey] = useState(localStorage.getItem("alpacaSecretKey") || "");
  const [symbol, setSymbol] = useState("");
  const [marketPrice, setMarketPrice] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [error, setError] = useState("");
  const [predictedPrice, setPredictedPrice] = useState(null);
  const [actualPrice, setActualPrice] = useState(null);
  const [side, setSide] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [Trend ,setTrend ] = useState("");
  const [open,setopen]= useState(null);

  const fetchMarketPrice = async (selectedSymbol) => {
    try {
      const response = await axios.post("http://localhost:5000/api/get-alpaca-price", {
        symbol: selectedSymbol,
        apikey: apiKey,
        secretKey,
      });

      if (response.data?.price) {
        setMarketPrice(response.data.price);
        setSymbol(selectedSymbol);
        setError("");
      } else {
        setError("Please connect to your Alpaca account.");
      }
    } catch (err) {
      console.error("Failed to fetch market price:", err);
      setError("Failed to fetch market price.");
    }
  };

  const calculateEstimatedCost = () => {
    return (quantity * marketPrice).toFixed(1) ;
  };

  const handleAutoTrade = async () => {
    try {
      const predictionRes = await axios.post(`http://localhost:8000/${symbol}_predict`, {
        stock_symbol: symbol,
      });

      
    const data = predictionRes.data;

    const predicted = data.predicted_close;
    const actual = data.open;
    setopen(actual);

      setPredictedPrice(predicted);
      setActualPrice(actual);

      let decision = null;

      if (predicted < actual) {
        decision = "sell";
        setTrend(`Sell 📉 (${((predicted - actual) / actual) * 100})%`);
      } else {
        decision = "buy";
        setTrend(`Buy 📈 (${((predicted - actual) / actual) * 100})%`);
      }

      if (!decision) {
        setError("Prediction not significant enough to trade.");
        return;
      }

      setSide(decision);
      setShowModal(true);
    } catch (err) {
      console.error("Prediction error:", err);
      setError("Prediction And Automations failed.");
    }
  };

  const confirmAndPlaceOrder = async () => {
    try {
      const orderPayload = {
        apikey: apiKey,
        secretKey,
        symbol,
        qty: quantity,
        side: side,
        type: "market",
        time_in_force: "gtc",
      };

      const orderResponse = await axios.post("http://localhost:5000/api/place-order", orderPayload);

      if (orderResponse.data?.status === "OK") {
        alert(`✅ Order Placed: ${side.toUpperCase()} ${quantity} shares of ${symbol}`);
        setError("");
      } else {
        setError("Order failed.");
      }
    } catch (err) {
      console.error("Order error:", err);
      setError("Order placement failed.");
    } finally {
      setShowModal(false);
    }
  };

  return (
    <section className="bg-gray-800 border-spacing-6 rounded-full mb-2 p-8 w-full">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-4 text-white">
          Automated Trading with StockVision
        </h2>
        <p className="text-lg mb-6 text-gray-300">
          Our trading bot provides automated trading services to manage your trades efficiently.
        </p>

        {/* Stock Selection */}
        <div className="flex flex-wrap justify-between mb-6">
          {["AAPL", "GOOGL", "MSFT", "AMZN", "TSLA"].map((stock) => (
            <div key={stock} className="flex flex-col items-center">
              <button
                className={`px-4 py-2 rounded mb-2 ${symbol === stock ? "bg-blue-600" : "bg-blue-900"} text-white hover:bg-blue-600`}
                onClick={() => fetchMarketPrice(stock)}
              >
                {stock}
              </button>
            </div>
          ))}
        </div>

        {/* Market Price and Estimated Cost */}
        {symbol && (
          <div className="text-gray-200 mb-6">
            <p>
              Selected Stock: <span className="text-green-500">{symbol}</span>
            </p>
            <p>
              Current Market Price: <span className="text-green-500">${marketPrice}</span>
            </p>
          </div>
        )}

        {isLoggedIn ? (
          <>
            <form onSubmit={(e) => e.preventDefault()} className="mt-6">
              <label htmlFor="trade-quantity" className="block mb-2 text-sm font-medium text-gray-200">
                Enter Number of Stocks
              </label>
              <input
                type="number"
                id="trade-quantity"
                className="border text-black rounded px-4 py-2 w-full"
                value={quantity}
                onChange={(e) => setQuantity(Number(e.target.value))}
                min="1"
              />
              <p className="mt-4 text-gray-200">
                Estimated Cost: <span className="text-green-500">${calculateEstimatedCost()}</span>
              </p>
            </form>
            {/* Start Auto Trade Button */}
            <button
              className="text-sm bg-green-600 px-4 py-2 rounded text-white mt-4"
              onClick={handleAutoTrade}
              // disabled={!isLoggedIn || !marketPrice || !symbol}
            >
              Start Auto Trade
            </button>
          </>
        ) : (
          <div className="text-center text-gray-200 mt-4">
            Please login to your Alpaca account to start auto trading. <br />
            <a href="/trade" className="underline">Login</a>
          </div>
        )}

        <Link to="/trade" className="text-blue-400 hover:underline mt-4 block text-center">
          <p className="text-center text-gray-200 mt-4">
            See Your Trades?{" "}
            <Link to="/trade" className="text-blue-400 hover:underline">
              Click here
            </Link>
          </p>
        </Link>

        {error && <p className="text-red-500 text-center mt-4">{error}</p>}
      </div>

      {/* Confirmation Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full">
            <h3 className="text-3xl font-bold mb-4 text-green-600">
              Confirm Your Trade
              <span role="img" aria-label="money bag" className="ml-2">💸</span>
            </h3>
            <p className="mb-4 text-lg">
            
              {symbol} Stocks will move From {open}$ to {predictedPrice}$ from predicition.
              <br />
              Are you sure you want to{" "}
              <strong>{side}</strong> {quantity} shares of <strong>{symbol}</strong>?
              <br />
              <span className="font-bold">Trend:</span> {Trend}
              <br />
              <span className="font-bold">Predicted Price:</span> ${predictedPrice?.toFixed(2)} <br />
              <span className="font-bold">Actual Price:</span> ${marketPrice?.toFixed(2)}
            </p>
            <div className="flex justify-end gap-4">
              <button
                className="bg-gray-400 px-4 py-2 rounded hover:bg-gray-500"
                onClick={() => setShowModal(false)}
              >
                Cancel
              </button>
              <button
                className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
                onClick={confirmAndPlaceOrder}
              >
                Confirm
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default PerformAutoTrade;