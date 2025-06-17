import React from 'react'

function HowItWork() {
   return (
    <div className="how-it-works-section py-16">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold text-white mb-8">How It Works</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Step 1 */}
          <div className="step p-6 rounded-lg bg-gray-800 shadow-lg hover:shadow-xl transition duration-300 ease-in-out transform hover:scale-105">
            <div className="step-number bg-blue-500 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold text-lg mb-4">1</div>
            <h3 className="text-xl font-semibold text-white mb-4">Connect Your Trading Account</h3>
            <p className="text-lg text-gray-300">
            Start by linking your trading account Alpaca to our Auto Trade System using secure API keys.
            </p>
          </div>
          {/* Step 2 */}
          <div className="step p-6 rounded-lg bg-gray-800 shadow-lg hover:shadow-xl transition duration-300 ease-in-out transform hover:scale-105">
            <div className="step-number bg-blue-500 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold text-lg mb-4">2</div>
            <h3 className="text-xl font-semibold text-white mb-4">Auto-Trade Execution</h3>
            <p className="text-lg text-gray-300">
            Our AI-powered bot continuously analyzes market trends and executes buy/sell orders and informed you to Procced Trade Conformation.
            </p>
          </div>
          {/* Add more steps as needed */}
        </div>
      </div>
    </div>
  );
}

export default HowItWork
