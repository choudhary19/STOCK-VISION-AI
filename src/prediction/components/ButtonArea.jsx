"use client";
import React, { useState } from "react";
import CurrentChart from "./chart/currentchart";
import PredictedChart from "./chart/predictedchart";
import Modal from "./PredictionPopup";

const ButtonArea = () => {
  const stockSymbols = ["AAPL", "GOOGL", "AMZN", "MSFT", "TSLA"];
  const [selectedStock, setSelectedStock] = useState("AAPL");
  const [showModal, setShowModal] = useState(true);

  return (
    <div className="min-h-screen flex flex-col bg-slate-900 p-5">
      <div className="flex justify-center space-x-4 mb-6">
        {stockSymbols.map((symbol) => (
          <button
            key={symbol}
            className={`px-4 py-2 rounded font-bold text-white transition duration-300 ${
              selectedStock === symbol ? "bg-blue-600" : "bg-gray-700 hover:bg-gray-600"
            }`}
            onClick={() => setSelectedStock(symbol)}
          >
            {symbol}
          </button>
        ))}
      </div>
      
      <h1 className="text-center text-white text-lg font-semibold mb-4">
        Predicting Price of {selectedStock}
      </h1>
      
      <section className="flex flex-row gap-5 justify-center">
        <div className="w-1/2">
          <CurrentChart symbol={selectedStock}  />
        </div>
        <div className="w-1/2">
          <PredictedChart symbol={selectedStock} data={[]} prediction={[]} />
        </div>
      </section>
      {showModal && <Modal onAccept={() => setShowModal(false)} />}
    </div>
  );
};

export default ButtonArea;
