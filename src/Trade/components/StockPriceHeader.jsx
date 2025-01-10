import React, { useEffect, useState } from "react";
import axios from "axios";
import { Swiper, SwiperSlide } from "swiper/react";

const StockPriceHeader = () => {
  const [stocks, setStocks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const companies = [
    { symbol: "AAPL", name: "Apple" },
    { symbol: "TSLA", name: "Tesla" },
    { symbol: "AMZN", name: "Amazon" },
    { symbol: "MSFT", name: "Microsoft" },
    { symbol: "META", name: "Meta" },
  ];

  const fetchStockData = async () => {
    try {
      const requests = companies.map((company) =>
        axios.get(
          `https://finnhub.io/api/v1/quote?symbol=${company.symbol}&token=cu0fm31r01ql96gqgt50cu0fm31r01ql96gqgt5g`
        )
        
      );
      const responses = await Promise.all(requests);

      const data = responses.map((response, index) => ({
        name: companies[index].name,
        symbol: companies[index].symbol,
        price: response.data.c,
        high: response.data.h,
        low: response.data.l,
        change: response.data.d,
        changePercent: response.data.dp,
        open_price: response.data.o,
      }));

      setStocks(data);
      setLoading(false);
    } catch (err) {
      console.error("Error fetching stock data:", err);
      setError("Failed to fetch stock data");
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchStockData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error loading stock data: {error}</div>;
  }

  return (
    <Swiper
      spaceBetween={30}
      slidesPerView={3}
      pagination={{ clickable: true }}
      className="w-50 h-full mt-10 "
    >
      {
      stocks.map((stock) => (
        <SwiperSlide key={stock.symbol}>
          <div className="rounded-md shadow-md p-4 text-white bg-gray-800 min-w-60 ml-2">
            <h1 className="text-xl font-bold mb-4">
              {stock.name} ({stock.symbol})
            </h1>
            <div className="mb-4">
              <div className="text-lg">Current Price: ${stock.price}</div>
              <div className="text-sm text-green-500">High: ${stock.high}</div>
              <div className="text-sm text-red-500">Low: ${stock.low}</div>
            </div>
            <div className="flex flex-wrap gap-4">
              <div className="tickerItem p-2 rounded-md bg-gray-700">
                <div className="tickerItemLabel text-gray-400 text-sm">
                  24h Change
                </div>
                <div className="tickerPriceText text-sm">
                  <span
                    className={`${
                      stock.change > 0 ? "text-green-500" : "text-red-500"
                    }`}
                  >
                    ${stock.change}
                  </span>
                  <span
                    className={`${
                      stock.changePercent > 0 ? "text-green-500" : "text-red-500"
                    }`}
                  >
                    ({stock.changePercent}%)
                  </span>
                </div>
              </div>
              <div className="tickerItem p-2 rounded-md bg-gray-700">
                <div className="tickerItemLabel text-gray-400 text-sm">
                  Open Price
                </div>
                <div className="tickerPriceText text-white text-sm">
                  {stock.open_price}
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default StockPriceHeader;
