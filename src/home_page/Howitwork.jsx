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
  const size = number === 1 ? "400px" : number === 2 ? "350px" : "280px";

  return (
    <div
      className={`rounded-full flex items-center justify-center flex-col gap-5 p-5 w-[${size}] h-[${size}] relative overflow-hidden ${
        number !== 2
          ? "bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 shadow-lg"
          : "bg-transparent border-2 border-[#7752FE] hover:bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:text-white"
      }`}
    >
      {number === 2 && (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
          className="absolute bottom-0 left-0 w-full animate-bounce"
        >
          <path
            fill="#7752FE"
            fillOpacity="0.5"
            d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,96C672,64,768,32,864,53.3C960,75,1056,149,1152,186.7C1248,224,1344,224,1392,224L1440,224L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg>
      )}
      <div
        className={`flex items-center justify-center flex-col gap-1 transition-colors ${
          number === 2 ? "text-[#f9f9fb] hover:text-white" : "text-white"
        }`}
      >
        <p className="text-[15px] font-medium uppercase">{`Step 0${number}`}</p>
        <h2 className="font-semibold text-[22px]">{step.title}</h2>
        <p className="font-normal text-[14px] text-white leading-relaxed text-center">
          {step.description}
        </p>
      </div>
    </div>
  );
};

const HowItWorks = () => {
  return (
    <div className="h-[100%] w-full bg-black relative flex items-start justify-start  overflow-y-auto md:py-0 py-12">
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
      <BubbleAnimation></BubbleAnimation>

    </div>
  );
};

export default HowItWorks;