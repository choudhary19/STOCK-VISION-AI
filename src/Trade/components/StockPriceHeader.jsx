import React, { useEffect, useState } from "react";
import axios from "axios";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

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
    { symbol: "NVDA", name: "Nvidia" },

  ];

  const fetchStockData = async () => {
    try {
      const requests = companies.map((company) =>
        axios.get(
          `https://finnhub.io/api/v1/quote?symbol=${company.symbol}&token=cu0fm31r01ql96gqgt50cu0fm31r01ql96gqgt5g`
        )
      );
      const responses = await Promise.all(requests);
      const stockData = responses.map((response, index) => ({
        ...companies[index],
        ...response.data,
      }));
      setStocks(stockData);
      setLoading(false);
    } catch (error) {
      setError(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchStockData();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div className="stock-price-header">
      <Carousel className="w-full max-w-4xl  mt-10 h-[350px]">
        <CarouselContent className="ml-3 max-h-full">
          {stocks.map((stock) => (
            <CarouselItem key={stock.symbol} className="pl-1 md:basis-1/2 lg:basis-1/3">
              <div className="p-2">
                <Card className="h-full w-fit bg-gray-800 text-white">
                  <CardHeader>
                    <CardTitle className="text-center text-lg font-bold">
                      {stock.name}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="flex flex-col items-center justify-center p-5 h-full">
                  <div className="mb-4">
              <div className="text-lg">Current Price: ${stock.c}</div>
              <div className="text-sm text-green-500">High: ${stock.h}</div>
              <div className="text-sm text-red-500">Low: ${stock.l}</div>
            </div>
            <div className="flex flex-wrap gap-4">
              <div className="tickerItem p-2 rounded-md bg-gray-700">
                <div className="tickerItemLabel text-gray-400 text-sm">
                  24h Change
                </div>
                <div className="tickerPriceText text-sm">
                  <span
                    className={`${
                      stock.d > 0 ? "text-green-500" : "text-red-500"
                    }`}
                  >
                    ${stock.d}
                  </span>
                  <span
                    className={`${
                      stock.dp > 0 ? "text-green-500" : "text-red-500"
                    }`}
                  >
                    ({stock.dp}%)
                  </span>
                </div>
              </div>
              <div className="tickerItem p-2 rounded-md bg-gray-700">
                <div className="tickerItemLabel text-gray-400 text-sm">
                  Open Price
                </div>
                <div className="tickerPriceText text-white text-sm">
                  {stock.o}
                </div>
              </div>
            </div>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="w-12 h-12 text-white bg-gray-800 hover:bg-gray-700 rounded-full flex items-center justify-center" />
        <CarouselNext className="w-12 h-12 text-white bg-gray-800 hover:bg-gray-700 rounded-full flex items-center justify-center" />
      </Carousel>
    </div>
  );
};

export default StockPriceHeader;


// symbol: companies[index].symbol,
// price: response.data.c,
// high: response.data.h,
// low: response.data.l,
// change: response.data.d,
// changePercent: response.data.dp,
// open_price: response.data.o,