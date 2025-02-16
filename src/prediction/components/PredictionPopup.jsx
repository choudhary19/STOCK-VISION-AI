import React, { useState } from "react";

const Modal = ({ onAccept }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="bg-black opacity-50 absolute inset-0"></div>
      <div className="bg-gray-800 rounded-lg shadow-lg p-6 z-10 w-11/12 md:w-1/2 lg:w-1/3">
        <div className="text-left mb-6">
          <h1 className="text-lg font-semibold text-gray-400 mb-4">
            Welcome to Our Prediction Service!
          </h1>
          <ul className="text-sm space-y-2 text-gray-200 mb-4 list-disc pl-5">
            <li>
              We are pleased to offer predictions for the following stocks:
              AAPL, AMZN, GOOG, TSLA, and MSFT.
            </li>
            <li>
              Our predictions cover 1 day and 75 minutes with intervals of 5 minutes.
            </li>
            <li>
              In our interface, you'll find two charts: 
              the left chart displays the last 10 days or last 150 minutes' price of the selected stock,
              while the right chart shows the next predictions respectively.
            </li>
            <li>
              We understand that loading can take some time, but rest assured, it's worth the wait!
            </li>
            <li>
              You can also view the status of the market by opening the sidebar from the button on the right sidebar.
            </li>
            <li>
              Our models are trained with utmost accuracy and backed by extensive research and effort.
              We strive to provide you with the most reliable predictions possible.
            </li>
            <li>
              Thank you for choosing our prediction service. We hope you find it valuable.
            </li>
          </ul>
        </div>
        <div className="flex justify-end">
        <button
            onClick={() => { onAccept(); }} 
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition duration-300"
          >
            Accept
          </button>

        </div>
      </div>
    </div>
  );
};

export default Modal;
