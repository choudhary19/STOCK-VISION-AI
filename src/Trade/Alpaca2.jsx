import React, { useState, useEffect } from "react";
import axios from "axios";
import OrderForm from "./components/OrderForm/OrderForm";

function Alpaca2() {
  const [apiKey, setApiKey] = useState(localStorage.getItem("alpacaApiKey") || "");
  const [secretKey, setSecretKey] = useState(localStorage.getItem("alpacaSecretKey") || "");
  const [authenticated, setAuthenticated] = useState(false);
  const [accountData, setAccountData] = useState(null);
  const [selectedStock, setSelectedStock] = useState("AAPL");
  const [isLoggedIn, setIsLoggedIn] = useState(localStorage.getItem("alpacaLoggedIn") === "true");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Verify stored credentials on component mount
  useEffect(() => {
    const verifyStoredCredentials = async () => {
      const storedApiKey = localStorage.getItem("alpacaApiKey");
      const storedSecretKey = localStorage.getItem("alpacaSecretKey");

      if (storedApiKey && storedSecretKey) {
        await verifyCredentials(storedApiKey, storedSecretKey);
      }
    };
    verifyStoredCredentials();
  }, []);

  // Verify API credentials
  const verifyCredentials = async (apiKey, secretKey) => {
    setLoading(true);
    setError(null);
    try {
      const response = await axios.post(
        "http://localhost:5000/api/get-alpaca-account",
        {
            apikey: apiKey,
            secretKey: secretKey,
        },  
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (response.data?.status !== "OK" || !response.data?.alpaca_user) {
        throw new Error(response.data?.message || "Authentication failed");
      }

      setAuthenticated(true);
      setIsLoggedIn(true);
      setAccountData(response.data.alpaca_user);

      // Store credentials in localStorage
      localStorage.setItem("alpacaApiKey", apiKey);
      localStorage.setItem("alpacaSecretKey", secretKey);
      localStorage.setItem("alpacaLoggedIn", "true");
    } catch (err) {
      console.error("Authentication error:", err);
      setError(err.response?.data?.message || err.message || "Failed to authenticate with Alpaca");
      setAuthenticated(false);
      setIsLoggedIn(false);
      setAccountData(null);
    } finally {
      setLoading(false);
    }
  };

  // Handle login form submission
  const handleLogin = async (e) => {
    e.preventDefault();
    await verifyCredentials(apiKey, secretKey);
  };

  // Handle logout
  const handleLogout = () => {
    localStorage.removeItem("alpacaApiKey");
    localStorage.removeItem("alpacaSecretKey");
    localStorage.removeItem("alpacaLoggedIn");
    setApiKey("");
    setSecretKey("");
    setAuthenticated(false);
    setIsLoggedIn(false);
    setAccountData(null);
  };

  // Handle stock selection change
  const handleStockChange = (e) => {
    setSelectedStock(e.target.value);
  };

  return (
    <section className="p-8">
      {!isLoggedIn ? (
        <div className="max-w-4xl text-white mx-auto">
          <h2 className="text-3xl font-bold mb-4">Welcome to Alpaca</h2>
          <p className="text-lg mb-6">
            Connect your Alpaca account to start trading. Enter your API credentials below.
          </p>

          <form onSubmit={handleLogin} className="bg-gray-800 p-6 rounded-lg">
            <div className="mb-4">
              <label htmlFor="api-key" className="block mb-2 text-sm font-medium text-gray-300">
                API Key
              </label>
              <input
                type="text"
                id="api-key"
                className="w-full px-4 py-2 rounded border border-gray-600 bg-gray-700 text-white"
                value={apiKey}
                onChange={(e) => setApiKey(e.target.value)}
                placeholder="PK..."
                required
              />
            </div>
            <div className="mb-6">
              <label htmlFor="secret-key" className="block mb-2 text-sm font-medium text-gray-300">
                Secret Key
              </label>
              <input
                type="password"
                id="secret-key"
                className="w-full px-4 py-2 rounded border border-gray-600 bg-gray-700 text-white"
                value={secretKey}
                onChange={(e) => setSecretKey(e.target.value)}
                placeholder="Your secret key"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded disabled:opacity-50"
              disabled={loading}
            >
              {loading ? "Connecting..." : "Connect to Alpaca"}
            </button>

            {error && (
              <div className="mt-4 p-3 bg-red-900 text-red-100 rounded">
                {error}
              </div>
            )}
          </form>

          <div className="mt-6 text-sm text-gray-400">
            <p>
              Don't have an Alpaca account?{" "}
              <a
                href="https://alpaca.markets"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:underline"
              >
                Sign up here
              </a>
            </p>
            <p className="mt-2">
              Your API keys will be stored locally in your browser for convenience.
            </p>
          </div>
        </div>
      ) : (
        <div className="max-w-6xl mx-auto">
          <div className=" justify-between items-center mb-8">
            <div className=" items-center justify-center text-center text-cyan-100">
              <h2 className="text-2xl font-bold">Trading Dashboard</h2>
              <p className="text-gray-400">Connected to Alpaca Paper Trading</p>
            </div>
            <div className="flex items-center justify-end">
              <p className="text-gray-400 mr-4">Want to logout?</p>
              <button
                onClick={handleLogout}
                className="bg-red-600 hover:bg-red-700 text-white py-2 px-4 rounded"
              >
                Disconnect
              </button>
            </div>

          </div>

          {accountData && (
            
            <div className="bg-gray-800 p-6 rounded-lg mb-8">
              <h3 className="text-xl font-semibold text-center mb-4">Account Information</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-gray-700 p-4 rounded">
                  <p className="text-gray-400">Buying Power</p>
                  <p className="text-xl font-bold text-green-500">
                    ${parseFloat(accountData.buying_power).toLocaleString()}
                  </p>
                </div>
                <div className="bg-gray-700 p-4 rounded">
                  <p className="text-gray-400">Cash</p>
                  <p className="text-xl text-green-500 font-bold">
                    ${parseFloat(accountData.cash).toLocaleString()}
                  </p>
                </div>
                <div className="bg-gray-700 p-4 rounded">
                  <p className="text-gray-400">Portfolio Value</p>
                  <p className="text-xl text-green-500 font-bold">
                    ${parseFloat(accountData.portfolio_value).toLocaleString()}
                  </p>
                </div>
              </div>
            </div>
          )}

          <div className="mb-6 justify-center items-center text-center">
            <label htmlFor="stock-select" className="block text-sm font-medium text-gray-300 mb-2">
              Select Stock
            </label>
            <select
              id="stock-select"
              className="bg-gray-700 border  border-gray-600 text-white rounded px-4 py-2 "
              value={selectedStock}
              onChange={handleStockChange}
            >
              <option value="AAPL">Apple (AAPL)</option>
              <option value="MSFT">Microsoft (MSFT)</option>
              <option value="TSLA">Tesla (TSLA)</option>
              <option value="AMZN">Amazon (AMZN)</option>
              <option value="GOOGL">Google (GOOGL)</option>
            </select>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <OrderForm
              buttonType="buy"
              symbol={selectedStock}
              apiKey={apiKey}
              secretKey={secretKey}
              accountData={accountData}
            />
            <OrderForm
              buttonType="sell"
              symbol={selectedStock}
              apiKey={apiKey}
              secretKey={secretKey}
              accountData={accountData}
            />
          </div>
        </div>
      )}
    </section>
  );
}

export default Alpaca2;