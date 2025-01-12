import React, { useState } from "react";

const OrderForm = ({ buttonType }) => {

  const [range, setRange] = useState("1000");
  const [formData, setFormData] = useState({ price: "", amount: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const formSubmitHandler = (e) => {
    e.preventDefault();
    console.log("Submitted Form Data:", formData);
  };

  return (
    <form className="w-full px-10 py-10 mx-auto" onSubmit={formSubmitHandler}>
      <div className="mb-5">
        <label htmlFor="price" className="block mb-2 text-sm font-bold text-white">
          Price
        </label>
        <input
          type="text"
          id="price"
          name="price"

          value={formData.price}
          onChange={handleChange}
          className="block w-full p-2.5 text-black font-bold border rounded-lg"
          placeholder="Price"
        />
      </div>

      <div className="mb-5">
        <label htmlFor="amount" className="block mb-2 text-sm font-bold text-white">
          Amount
        </label>
        <input
          type="text"
          id="amount"
          name="amount"
          value={formData.amount}
          onChange={handleChange}
          className="block w-full p-2.5  font-bold text-black border rounded-lg"
          placeholder="USDT"
        />
        <p className="mt-2 text-sm text-white">Available: $9182.12</p>
      </div>

      <div className="relative mb-10">
        <label htmlFor="labels-range-input" className="sr-only">
          USDT
        </label>
        <input
          id="labels-range-input"
          type="range"
          value={range}
          onChange={(e) => setRange(e.target.value)}
          min="100"
          max="1500"
          className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700"
        />
        <span className="text-sm text-white absolute start-0 -bottom-6">
          Min ($100)
        </span>
        <span className="text-sm text-white absolute start-1/3 -translate-x-1/2 rtl:translate-x-1/2 -bottom-6">
          $500
        </span>
        <span className="text-sm text-white absolute start-2/3 -translate-x-1/2 rtl:translate-x-1/2 -bottom-6">
          $1000
        </span>
        <span className="text-sm text-white absolute end-0 -bottom-6">
          Max ($1500)
        </span>
      </div>

      <div>
        <label
          htmlFor="symbol"
          className="block mb-2 text-sm font-medium text-white"
        >
          { "Waiting for prediction..."}
        </label>
        <input
          type="text"
          id="symbol"
          className="bg-white border border-gray-300 text-gray-900 dark:text-gray-100 placeholder-gray-400 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600"
          placeholder="AAPL"
        />
      </div>


      <button
        type="submit"
        className={`w-full mt-5 px-4 py-2.5 rounded-lg text-white ${
          buttonType === "Buy" ? "bg-green-500" : "bg-red-500"
        }`}
      >
        {buttonType}
      </button>
    </form>
  );
};

export default OrderForm;


// 1. Price
// What is it?
// The Price is the cost of one unit of the stock (e.g., AAPL) that you're willing to buy or sell at.
// It reflects the per-share price of the stock.
// Why is it important?
// You use this to control at what price you want the bot to execute a trade.
// For example:
// If the current market price of AAPL is $115, but you're only willing to buy it if it drops to $112, you set the price to $112.
// Similarly, if you own AAPL stock and want to sell it when the price goes up to $150, you set the price to $150.


// 2. Amount
// What is it?
// The Amount is the total money (in USDT) that you want to spend on buying or selling stocks.
// It defines how much of your balance you’re willing to allocate for this transaction.
// Why is it important?
// The bot calculates how many shares you can buy or sell based on this amount and the price you set.
// How it works:
// Example 1: If you set Amount = $500 and Price = $112, the bot calculates:
// Number of Shares to Buy = $500 ÷ $112 = ~4.46 shares
// Example 2: If you're selling:
// The bot will sell shares worth $500 at the price you set (e.g., $150 per share).
