import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const WhyChooseUs2 = () => {
  const data = [
    {
      heading:
          "Real-Time  Market Analysis",
      paragraph:
        "Our trading bot provides accurate, real-time insights into market trends, helping users make informed decisions without delays.",
      src:'public/img/icon/choose_icon01.svg'
    },
    {
      heading: "Advanced Algorithms",
      paragraph:
        "Equipped with cutting-edge algorithms, the bot predicts market movements and optimizes trades for maximum profitability.",
        // src:'public/img/icon/choose_icon02.svg'
        src:'public/img/icon/h2_choose_icon01.svg'

    },
    {
      heading: "Automation for Convenience",
      paragraph:
        "Eliminate the hassle of manual trading with a fully automated solution that works 24/7 to monitor and execute trades.",
        src:'public/img/icon/choose_icon03.svg'
    },
    {
      heading: "Customizable Strategies",
      paragraph:
        "The bot allows users to define their own trading strategies, ensuring a personalized and flexible trading experience.",
        // src:'public/img/icon/choose_icon04.svg'
        src:'public/img/icon/h2_choose_icon02.svg'
    },
    {
      heading: "Risk Management Features",
      paragraph:
        "Built-in tools to minimize risks, such as stop-loss, take-profit levels, and diversified trading options, provide enhanced security.",
        src:'public/img/icon/choose_icon04.svg',


    },
  ];

  return (
    <div className="relative pt-10 pb-52 text-center justify-center bg-black">
      <h1 className="text-6xl lg:text-7xl font-bold text-white">
        Why{" "}
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
          Choose Us
        </span>
      </h1>

      <Carousel className="w-full max-w-7xl mx-auto mt-10 h-[400px]">
   <CarouselContent className="-ml-2 h-full">
    {Array.from({ length: 5 }).map((_, index) => (
        <CarouselItem key={index} className=" md:basis-1/2 lg:basis-1/3">
        <div className="p-3">
        <Card className="h-full bg-black text-white">
   <CardContent className="flex flex-col items-center justify-center p-5 h-full">
    <div className="w-full">
     <img className='mx-auto p-10 rounded-r-lg w-1/2 h-auto' src={data[index].src}></img>
      <h2 className="text-2xl font-semibold text-white">{data[index].heading}</h2>
      <p className="mt-4 text-sm text-gray-300">{data[index].paragraph}</p>
    </div>

    <div className="mt-auto">
      <span className="inline-block text-lg font-bold text-indigo-500">Learn More</span>
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

export default WhyChooseUs2;
