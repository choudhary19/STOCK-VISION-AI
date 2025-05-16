import React, { useState } from "react";
import axios from "axios";

const PerformAutoTrade = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(localStorage.getItem("alpacaLoggedIn") === "true");
  const [apiKey, setApiKey] = useState(localStorage.getItem("alpacaApiKey") || "");
  const [secretKey, setSecretKey] = useState(localStorage.getItem("alpacaSecretKey") || "");
  const [symbol, setSymbol] = useState(""); // Selected stock symbol
  const [marketPrice, setMarketPrice] = useState(null); // Market price of the selected stock
  const [quantity, setQuantity] = useState(1); // Number of stocks to trade
  const [error, setError] = useState("");

  // Fetch market price for the selected stock symbol
  const fetchMarketPrice = async (selectedSymbol) => {
    try {
      const response = await axios.post("http://localhost:5000/api/get-alpaca-price", {
        symbol: selectedSymbol,
        apikey: apiKey,
        secretKey,
      });
      if (response.data?.price) {
        setMarketPrice(response.data.price);
        setSymbol(selectedSymbol); // Update the selected symbol
        setError(""); // Clear any previous errors
      } else {
        setError("Please Connect to your Alpaca account");
      }
    } catch (err) {
      console.error("Failed to fetch market price:", err);
      setError("Connect To your Alpaca account");
    }
  };

  // Calculate the estimated cost based on quantity and market price
  const calculateEstimatedCost = () => {
    return  (quantity * marketPrice).toFixed(2) || 0;
  };

  return (
    <section className="bg-gray-800 border-spacing-6 rounded-full mb-2 p-8 w-full">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-4 text-white">
          Automated Trading with StockVision
        </h2>
        <p className="text-lg mb-6 text-gray-300">
          Our trading bot provides automated trading services to manage your trades efficiently.
          We offer features such as stop-loss and take-profit orders to help you minimize risks
          and maximize profits. Additionally, we keep you updated with your trades by sending
          email notifications.
        </p>

        {/* Stock Buttons */}
        <div className="flex flex-wrap justify-between mb-6">

          {
          ["AAPL", "GOOG", "MSFT", "AMZN", "TSLA"].map((stock) => (
            <div key={stock} className="flex flex-col items-center">
              <button
                className="px-4 py-2 rounded mb-4 bg-blue-900 text-white hover:bg-blue-600"
                onClick={() => fetchMarketPrice(stock)} // Fetch market price for the selected stock
              >
                {stock}
              </button>
             
            </div>
          ) )
          }
        </div>

        {/* Market Price and Estimated Cost */}
  
          <div className="text-gray-200 mb-6">
            <p>
              Selected Stock: <span className="text-green-500">{symbol}</span>
            </p>
      
              <p>
                Current Market Price: <span className="text-green-500">${marketPrice}</span>
              </p>
          
          </div>
    

        {isLoggedIn ? (
          <>
            <div className="mt-6">
              <form>
                <label htmlFor="trade-quantity" className="block mb-2 text-sm font-medium text-gray-200">
                  Enter Number of Stocks
                </label>
                <input
                  type="number"
                  id="trade-quantity"
                  className="border text-black rounded px-4 py-2 w-full"
                  placeholder="Enter quantity"
                  value={quantity}
                  onChange={(e) => setQuantity(Number(e.target.value))}
                  min="1"
                />
                <p className="mt-4 text-gray-200">
                  Estimated Cost:{" "}
                  <span className="text-green-500">${calculateEstimatedCost()}</span>
                </p>
                <button
                  type="submit"
                  className="bg-green-500 text-white px-4 py-2 mt-4 rounded hover:bg-green-600"
                >
                  Start Trade
                </button>
              </form>
            </div>
          </>
        ) : (
          <div className="text-center text-gray-200 mt-4">
            Please login to your Alpaca account to start auto trading.
            <br />
            <a href="/trade" className="underline">
              Login
            </a>
          </div>
        )}

        {error && <p className="text-red-500 text-center mt-4">{error}</p>}
      </div>
    </section>
  );
};

export default PerformAutoTrade;



//next step is to add the auto trade functionality
// and integrate it with the Alpaca API