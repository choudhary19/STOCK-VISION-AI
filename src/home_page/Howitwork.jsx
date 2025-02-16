import BubbleAnimation from "@/Animations/BubbleAnimation";
import React from "react";

export const Steps = [
  {
    title: "Create an account",
    description: "Sign up for a free Alpaca account and get connected to our platform.",
  },
  {
    title: "Place Trades",
    description: "Make manual trades using our accurate Predictions or use our efficient Trading Bot.",
  },
  {
    title: "Start earning",
    description: "Once done, you'll be able to start earning money right away.",
  },
];
const Step = ({ step, number }) => {
  return (
    <div
      className={`rounded-full flex items-center justify-center flex-col gap-5 p-5 w-[350px] h-[350px] relative overflow-hidden ${
        number !== 2
          ? "bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 shadow-lg"
          : "bg-transparent border-2 border-[#7752FE] "
      }`}
    >
      <h2 className="font-semibold text-[22px]">{step.title}</h2>
      <p className="font-normal text-[14px] text-white leading-relaxed text-center">
        {step.description}
      </p>
    </div>
  );
};

const HowItWorks = () => {
  return (
    <section className="h-[100%] w-full bg-black ">
        <BubbleAnimation></BubbleAnimation>
      <div className="flex items-center justify-center flex-col gap-10 md:gap-20 text-[#f8f2f2] w-full m-auto max-w-7xl">
        <div className="flex flex-col text-center items-center justify-between gap-3 w-full flex-wrap">
          <h1 className="text-6xl mt-6 lg:text-7xl font-bold text-white">
        Simple{" "}
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
          Steps
        </span>
      </h1>
          <p className="text-sm md:text-[16px] md:max-w-lg font-normal leading-relaxed">
            We have made it easy for you to get started with our simple steps.
          </p>
        </div>

        <div className="flex items-center justify-center w-full md:flex-row flex-col">
          {Steps.map((step, index) => (
            <React.Fragment key={index}>
              {index < Steps.length && (
                <div className="h-[50px] w-[50px] bg-[#793FDF] rounded-full flex items-center justify-center">
                  <p className="text-white font-semibold text-[16px]">
                    0{index + 1}
                  </p>
                </div>
              )}
              <Step step={step} number={index + 1} />
            </React.Fragment>
          ))}
          <div className="h-[50px] w-[50px] bg-[#793FDF] rounded-full flex items-center justify-center">
            <p className="text-white font-semibold text-[16px]">👉🏻</p>
          </div>
        </div>
      </div>

    </section>
  );
};

export default HowItWorks;