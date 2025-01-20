'use client';
import BubbleAnimation from "@/Animations/BubbleAnimation";
import React, { useState, useEffect } from "react";

const ContentComponent = () => {
  const [scrolling, setScrolling] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const rightSide = document.getElementById("rightSide");
      if (rightSide) {
        const rightSideHeight = rightSide.offsetHeight;
        const rightSideContentHeight = rightSide.scrollHeight;
        const scrollTop = window.scrollY;

        if (rightSideContentHeight > rightSideHeight && scrollTop > rightSide.offsetTop) {
          setScrolling(true);
        } else {
          setScrolling(false);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Requirements array
  const requirements = [
    {
      title: "Prediction",
      content: "Stock Price prediction must be done in the Trading Bot. Prediction visualization must be given. Multiple time frames predictions must be available. Predictions of multiple stock should be available for the user."
    },
    {
      title: "Automation",
      content: "The user can automate the trading using the trading bot. User can select the stock from the list of available stocks. User can specify the number of stocks. System shall setup the take profit and stop loss of the trade."
    },
    {
      title: "Order Execution",
      content: "The bot must be capable of placing market orders, limit orders, and stop-loss orders based on its predefined strategy. The bot must apply the stop-loss and take profit on limit orders."
    },
    {
      title: "Alert and Notification",
      content: "It shall allow users to set alerts and receive notifications when certain stock price thresholds or conditions are met."
    },
    {
      title: "Transaction",
      content: "The user will be able to make safe transaction. The user will be able to view the transaction history. Use should connect to the Alpaca for transactions."
    },
    {
      title: "Login",
      content: "The web page must allow user to login to the system. The website shall check the user credentials from the database. The website shall give the module of forget password."
    },
    {
      title: "Register User",
      content: "The web page must allow user to create account. The website shall hold and maintain the data of the user. User shall connect to the Alpaca account."
    },
    {
      title: "User Logout",
      content: "System should allow the user to successfully log out of their accounts. System should give the warning of closing the trades before logging out."
    },
    {
      title: "Order cancellation",
      content: "User shall be able to cancel the orders before their execution. System shall give the warning before performing the cancellation."
    },
    {
      title: "Closing Trades",
      content: "User shall be able to close the trades during their execution. System should show the loss or profit of trade before closing the trade."
    },
    {
      title: "Trades Tracking",
      content: "User shall be able to track the executed trades. User shall be able to track the profit and loss of the trades."
    },
    {
      title: "Manual Trade",
      content: "User must be able to setup the manual trade. User must be able to setup the stop loss and take profit of the trade order. User can select the specific stock and the amount of stock. User must be able to select the buy and sell direction of the trade order manually."
    },
    {
      title: "User Friendly",
      content: "The application's and website's GUI shall both be exceedingly user-friendly."
    },
    {
      title: "Simple and minimalistic design",
      content: "The application shall have a straightforward, basic style that makes it very simple to explore all the choices and put them to use."
    },
    {
      title: "Portability",
      content: "Any Web Browser will be supported by our modules and interface shall be responsive giving a portable structure."
    },
    {
      title: "Documentations and help",
      content: "The application's full documentation and instructions for use shall be given."
    },
    {
      title: "Responsive and fast",
      content: "The analysis and prediction of stocks, and order placing shall be done very fast. The application will be quick to generate results."
    },
    {
      title: "Accuracy",
      content: "Results from the application shall be comparatively accurate."
    }
  ];

  return (

    <div className="flex  text-white bg-black flex-col md:flex-row">
    <BubbleAnimation></BubbleAnimation>

      <div className={`md:w-1/2 flex justify-center items-center p-8 `}>
        <div>
          <h2 className="text-3xl font-bold mb-6 text-center">
            Experience market dominance with our exclusive A.I. technology delivering unbeatable alerts.
          </h2>
          <div className="flex justify-center space-x-4">
            <button className="bg-blue-500 text-white px-6 py-3 rounded-full hover:bg-blue-600 transition-colors duration-300">
              Start for Free
            </button>
            <button className="bg-gray-500 text-white px-6 py-3 rounded-full hover:bg-gray-600 transition-colors duration-300">
              See Our Plans
            </button>
          </div>
        </div>
      </div>
      <div
        id="rightSide"
        className={`md:w-1/2 p-8 overflow-y-auto no-scroll-bar ${scrolling ? '' : 'relative'}`}
        style={{ maxHeight: 'calc(100vh - 64px)' }}
      >
        <div className="flex flex-col space-y-4">
          {/* Requirements */}
          {requirements.map((requirement, index) => (
            <div key={index} className="border border-gray-400 p-4 rounded-lg cursor-pointer hover:bg-blue-100 hover:text-black transition-all duration-300">
              <h3 className="text-xl font-bold">{requirement.title}</h3>
              <p className="mt-2">{requirement.content}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ContentComponent;

