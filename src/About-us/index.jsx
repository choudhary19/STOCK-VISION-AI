import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import NavBar from "@/components/Navbar";
import Team from "@/home_page/components/Team/Team";
import Footer from "@/components/Footer";

const aboutSections = [
  {
    title: "AI-Powered Stock Prediction",
    description:
      "StockVision leverages advanced AI models like LSTM and GRU to analyze historical stock data and predict future price trends with high accuracy.",
  },
  {
    title: "Sleek UI & Intuitive Design",
    description:
      "With a focus on user experience, StockVision offers a seamless and intuitive interface that enhances user engagement and simplifies trading activities.",
  },
  {
    title: "Automated & Manual Trading",
    description:
      "Users can execute trades manually or use our AI-powered trading bot to automate buy/sell actions based on predefined strategies.",
  },
  {
    title: "Sentiment Analysis for Market Trends",
    description:
      "StockVision integrates real-time sentiment analysis by scanning news sources and social media to provide insights into market trends.",
  },
  {
    title: "Risk Management & Strategy Customization",
    description:
      "Users can define stop-loss, take-profit conditions, and backtest strategies to optimize their trading performance and minimize risks.",
  },
  {
    title: "Open System Integration with Alpaca",
    description:
      "StockVision's open architecture allows seamless integration with Alpaca, enabling users to connect their trading accounts and access real-time market data effortlessly.",
  },

];

const AboutUs = () => {
  return (
    <>
    <NavBar></NavBar>
    <div className="relative min-h-screen bg-black text-white py-20 px-6">
      {/* Heading */}
      <h1 className="text-6xl lg:text-7xl font-bold text-center">
        About <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">StockVision</span>
      </h1>

      {/* Description */}
      <p className="max-w-3xl text-lg text-gray-400 text-center mx-auto mt-6">
        StockVision is an AI-driven trading platform that combines predictive analytics, real-time sentiment analysis, and Web 3.0 UI integration.
      </p>

      {/* Feature Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto mt-16">
        {aboutSections.map((section, index) => (
          <div key={index}>
            <Card className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 p-[2px] rounded-xl shadow-lg">
              <CardContent className="bg-black p-6 rounded-xl text-center">
                <h2 className="text-xl font-semibold text-white">{section.title}</h2>
                <p className="text-gray-300 mt-2">{section.description}</p>
              </CardContent>
            </Card>
          </div>
        ))}
      </div>

      {/* Learn More Section */}
      <div className="mt-20 text-center">
        <h2 className="text-4xl font-semibold text-indigo-500">Learn More About StockVision</h2>
        <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
          Explore how AI-powered trading and decentralized finance can enhance your investment strategies.
        </p>
      </div>
      <Team></Team>

      {/* Contact Section */}
      <div className="mt-20 bg-gray-900 p-8 rounded-lg shadow-lg max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-indigo-500">Contact Us</h2>
        <p className="text-gray-300 mt-2">Reach out for inquiries, support, or collaborations.</p>
        <div className="mt-6 flex flex-col md:flex-row justify-center gap-8">
          <div className="flex items-center gap-3">
            <FaEnvelope className="text-indigo-500 text-xl" />
            <p className="text-gray-400">support@stockvision.ai</p>
          </div>
          <div className="flex items-center gap-3">
            <FaMapMarkerAlt className="text-indigo-500 text-xl" />
            <p className="text-gray-400">Lahore, Pakistan</p>
          </div>
        </div>
      </div>
    </div>
    
    <Footer></Footer>
    </>
  );
};

export default AboutUs;
