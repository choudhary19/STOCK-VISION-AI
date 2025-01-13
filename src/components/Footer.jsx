import React from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaYoutube, FaDiscord, FaTelegram, FaTiktok, FaReddit } from "react-icons/fa";
import { AiOutlineGlobal } from "react-icons/ai";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto p-6">
        {/* Top Section */}
        <div className="flex flex-wrap justify-between">
          {/* Social Media */}
          <div className="mb-6">
            <h3 className="text-lg font-semibold mb-4">
              <span className="italic font-caligraphy text-3xl text-yellow-400 mr-2">SV</span>
              StockVision -  automates stock market analysis and <br/>  trades with advanced algorithms.
            </h3>
            <div className="flex space-x-4">
              <FaFacebook className="text-2xl hover:text-gray-400" />
              <FaTwitter className="text-2xl hover:text-gray-400" />
              <FaInstagram className="text-2xl hover:text-gray-400" />
              <FaLinkedin className="text-2xl hover:text-gray-400" />
              <FaYoutube className="text-2xl hover:text-gray-400" />
              <FaTelegram className="text-2xl hover:text-gray-400" />
              <FaReddit className="text-2xl hover:text-gray-400" />
              <FaDiscord className="text-2xl hover:text-gray-400" />
            </div>
            <div className="mt-4 flex items-center space-x-2">
              <AiOutlineGlobal className="text-2xl" />
              <span>English</span>
            </div>
          </div>

          {/* Links */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
            <div>
              <h4 className="font-bold mb-3">Products</h4>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-gray-400">Supercharts</a></li>
                <li><a href="#" className="hover:text-gray-400">Automation</a></li>
                <li><a href="#" className="hover:text-gray-400">AI Trading</a></li>
                <li><a href="#" className="hover:text-gray-400">Depth View</a></li>
                <li><a href="#" className="hover:text-gray-400">Market Analysis</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-3">Company</h4>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-gray-400">About</a></li>
                <li><a href="#" className="hover:text-gray-400">Features</a></li>
                <li><a href="#" className="hover:text-gray-400">Pricing</a></li>
                <li><a href="#" className="hover:text-gray-400">Careers</a></li>
                <li><a href="#" className="hover:text-gray-400">Blog</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-3">Community</h4>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-gray-400">Refer a Friend</a></li>
                <li><a href="#" className="hover:text-gray-400">Ideas</a></li>
                <li><a href="#" className="hover:text-gray-400">Scripts</a></li>
                <li><a href="#" className="hover:text-gray-400">Moderators</a></li>
                <li><a href="#" className="hover:text-gray-400">Chat</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-3">For Business</h4>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-gray-400">Widgets</a></li>
                <li><a href="#" className="hover:text-gray-400">Advertising</a></li>
                <li><a href="#" className="hover:text-gray-400">Trading Platform</a></li>
                <li><a href="#" className="hover:text-gray-400">Brokerage Integration</a></li>
                <li><a href="#" className="hover:text-gray-400">Partner Program</a></li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <hr className="my-6 border-gray-700" />
        <div className="flex justify-between items-center">
          <span>© 2025 StockVision. All Rights Reserved.</span>
          <span>Privacy Policy · Terms of Service</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
