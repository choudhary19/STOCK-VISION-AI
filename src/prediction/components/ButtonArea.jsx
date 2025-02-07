"use client";
import React, { useState } from "react";
import CurrentChart from "./chart/currentchart";
import PredictedChart from "./chart/predictedchart";
import Modal from "./PredictionPopup";

const ButtonArea = () => {
  const stockSymbols = ["AAPL", "GOOG", "AMZN", "MSFT", "TSLA"];
  const [selectedStock, setSelectedStock] = useState("AAPL");
  const [loading, setLoading] = useState(false);
  const [currentTimeSelected, setCurrentTimeSelected] = useState("5 days");
  const [showModal, setShowModal] = useState(true);
  const [accepted, setAccepted] = useState(false);

  const handleButtonClick = (symbol) => {
    if (loading) return;
    setSelectedStock(symbol);
    setLoading(true);
    setTimeout(() => setLoading(false), 1000);
  };

  const handleTimeframeChange = (newTimeframe, buttonSelected) => {
    if (loading) return;
    setCurrentTimeSelected(buttonSelected);
  };

  const handleAccept = () => {
    setAccepted(true);
    setShowModal(false);
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-900">
      <div className="h-1/4 w-full">
        <div className="button-area text-center">
          <div className="mr-10 ml-10 buttons flex justify-between">
            {stockSymbols.map((symbol, index) => (
              <button
                key={symbol}
                className={`font-bold py-2 px-4 border-b-4 rounded ${
                  selectedStock === symbol
                    ? "bg-blue-500 border-blue-700"
                    : `bg-${(index + 1) * 100} border-${(index + 1) * 100}`
                } hover:bg-${(index + 1) * 100} hover:border-${
                  (index + 1) * 100
                } text-white ${loading ? "cursor-not-allowed" : "cursor-pointer"}`}
                onClick={() => handleButtonClick(symbol)}
                disabled={loading}
              >
                {loading && selectedStock === symbol ? (
                  <div role="status">
                    <svg
                      aria-hidden="true"
                      className="inline mx-4 w-6 h-6 animate-spin fill-current"
                      viewBox="0 0 100 101"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                        fill="currentColor"
                      />
                      <path
                        d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                        fill="currentColor"
                      />
                    </svg>
                    <span className="sr-only">Loading...</span>
                  </div>
                ) : (
                  symbol
                )}
              </button>
            ))}
          </div>
        </div>

        <div className="rounded-md shadow-md p-4 text-center">
          <div className="layout">
            <div className="childrenContainer flex justify-center items-center mb-4">
              <h1 className="text-lg font-semibold text-white mr-4">
                Predicting Price of {selectedStock} for the selected time frame
              </h1>
              <button
                onClick={() => handleTimeframeChange("1", "5 days")}
                className={`${
                  currentTimeSelected === "5 days"
                    ? "bg-blue-400"
                    : "bg-transparent"
                } hover:bg-blue-500 text-white font-semibold py-2 px-4 border border-blue-500 rounded mr-4 transition duration-300 ${
                  loading ? "cursor-not-allowed" : "cursor-pointer"
                }`}
                disabled={loading}
              >
                5 days
              </button>
              <button
                onClick={() => handleTimeframeChange("15", "75 minutes")}
                className={`${
                  currentTimeSelected === "75 minutes"
                    ? "bg-blue-400"
                    : "bg-transparent"
                } hover:bg-blue-500 text-white font-semibold py-2 px-4 border border-blue-500 rounded transition duration-300 ${
                  loading ? "cursor-not-allowed" : "cursor-pointer"
                }`}
                disabled={loading}
              >
                75 minutes
              </button>
            </div>
          </div>
        </div>
      </div>
      <section className="flex flex-row mb-10">
        {loading ? (
          <div className="bg-slate-500 animate-pulse h-80 w-full"></div>
        ) : (
          <div className="w-1/2 h-full ml-10 flex justify-center">
            {/* Placeholder for CurrentChart */}
            <CurrentChart symbol={selectedStock} data={[]} prediction={[]} />
          </div>
        )}

        {loading ? (
          <div className="bg-slate-500 animate-pulse h-80 w-full"></div>
        ) : (
          <div className="w-1/2 h-full mr-10 flex justify-center">
            {/* Placeholder for PredictionChart */}
            <PredictedChart symbol={selectedStock} data={[]} prediction={[]} />
          </div>
        )}
      </section>

      {showModal && <Modal onAccept={handleAccept} />}
    </div>
  );
};

export default ButtonArea;