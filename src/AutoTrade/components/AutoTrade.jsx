"use client";
import React from "react";

const PerformAutoTrade = () => {
  return (
    <section className="bg-gray-800 border-spacing-6 rounded-full mb-2 p-8 w-full">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold  text-center mb-4 text-white">
          Automated Trading with Our Bot
        </h2>
        <p className="text-lg mb-6 text-gray-300">
          Our trading bot provides automated trading services to manage your
          trades efficiently. We offer features such as stop-loss and
          take-profit orders to help you minimize risks and maximize profits.
          Additionally, we keep you updated with your trades by sending email
          notifications.
        </p>
        <div className="flex flex-wrap justify-between mb-6">
          <div className="flex flex-col items-center">
            <button className="px-4 py-2 rounded mb-4 bg-blue-900 text-white hover:bg-blue-600">
              AAPL
            </button>
            <button className="text-gray-400 hover:text-gray-200 underline">
              Trend (Days)
            </button>
            {/* <button className="text-gray-400 hover:text-gray-200 underline">
              Trend (Minutes)
            </button> */}
          </div>
          <div className="flex flex-col items-center">
            <button className="px-4 py-2 rounded mb-4 bg-blue-900 text-white hover:bg-blue-600">
              GOOG
            </button>
            <button className="text-gray-400 hover:text-gray-200 underline">
              Trend (Days)
            </button>
            {/* <button className="text-gray-400 hover:text-gray-200 underline">
              Trend (Minutes)
            </button> */}
          </div>
          <div className="flex flex-col items-center">
            <button className="px-4 py-2 rounded mb-4 bg-blue-900 text-white hover:bg-blue-600">
              MSFT
            </button>
            <button className="text-gray-400 hover:text-gray-200 underline">
              Trend (Days)
            </button>
            {/* <button className="text-gray-400 hover:text-gray-200 underline">
              Trend (Minutes)
            </button> */}
          </div>
          <div className="flex flex-col items-center">
            <button className="px-4 py-2 rounded mb-4 bg-blue-900 text-white hover:bg-blue-600">
              AMZN
            </button>
            <button className="text-gray-400 hover:text-gray-200 underline">
              Trend (Days)
            </button>
            {/* <button className="text-gray-400 hover:text-gray-200 underline">
              Trend (Minutes)
            </button> */}
          </div>
          <div className="flex flex-col items-center">
            <button className="px-4 py-2 rounded mb-4 bg-blue-900 text-white hover:bg-blue-600">
              TSLA
            </button>
            <button className="text-gray-400 hover:text-gray-200 underline">
              Trend (Days)
            </button>
            {/* <button className="text-gray-400 hover:text-gray-200 underline">
              Trend (Minutes)
            </button> */}
          </div>
        </div>
        <div className="text-gray-200">
          The visible trend or signals followed by AAPL in upcoming 1 day is <spam className="text-green-500">Buy</spam>
        </div>
        <div className="mt-6">
          <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
            Start Auto Trade
          </button>
        </div>
        <div>
          <form>
            <label htmlFor="trade-price" className="block mb-2 text-sm font-medium text-gray-200">
              Enter Number of Stocks
            </label>
            <input
              type="number"
              id="trade-price"
              className="border text-black rounded px-4 py-2 w-full"
              placeholder="AAPL"
            />
            <button
              type="submit"
              className="bg-green-500 text-white px-4 py-2 mt-4 rounded hover:bg-green-600"
            >
              Confirm Order?
            </button>
          </form>
        </div>
        <div>
          <p className="text-lg mb-4 text-gray-300">
            To connect your Alpaca account to our trading bot, please enter
            your API key and Secret Key below:
          </p>
          <form>
            <div className="mb-4">
              <label
                htmlFor="api-key"
                className="block mb-2 text-sm font-medium text-gray-300"
              >
                API Key
              </label>
              <input
                type="text"
                id="api-key"
                className="border text-black rounded px-4 py-2 w-full"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="secret-key"
                className="block mb-2 text-sm font-medium text-gray-300"
              >
                Secret Key
              </label>
              <input
                type="password"
                id="secret-key"
                className="border text-black rounded px-4 py-2 w-full"
              />
            </div>
            <button
              type="submit"
              className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
            >
              Connect Alpaca Account
            </button>
          </form>
    
          <p className="text-sm mt-2 text-gray-300">
            Don't have an Alpaca account?{" "}
            <a
              href="https://app.alpaca.markets/signup"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 underline"
            >
              Sign up here
            </a>
          </p>
          <p className="text-sm mt-2 text-gray-300">
            To obtain your API Key and Secret Key, sign up at{" "}
            <a
              href="https://app.alpaca.markets/signup"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 underline"
            >
              Alpaca Markets
            </a>{" "}
            and navigate to your account settings.
          </p>
        </div>
      </div>
    </section>
  );
};

export default PerformAutoTrade;
