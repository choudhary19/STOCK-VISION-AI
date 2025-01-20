
import React from "react";
import GetInTouch from "./GetInTouch";
import FAQAccordion from "./Accordian";

const Faq = () => {

  return (
    <div className="flex items-start bg-black   overflow-y-auto relative overflow-x-hidden text-white  px-4 md:px-24 lg:px-40 md:py-0 py-12">
      <div
        className="flex items-center lg:justify-between  gap-4 w-full lg:flex-row flex-col m-auto"
        id="faqs"
      >
        <div className="flex flex-col items-start gap-3 w-2/5 mt-24">
          <h1 className="text-xl sm:text-3xl md:text-4xl font-semibold capitalize">
            Frequently asked{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
              questions
            </span>{" "}
          </h1>
          <p className="text-[13px] md:text-md leading-normal font-light w-[95%] md:w-[100%] opacity-80">
            Here are some of the most frequently asked questions <br /> about
            our trading bot and prediction project.
          </p>
          <GetInTouch />
		  <div className="relative w-full  h-auto flex justify-center items-center">
          <img
            src="public/img/About/faqs.jpg"
            alt=""
            className="w-full h-auto rounded-lg shadow-lg mt-4 "
            width={100}
            height={100}
            quality={100}
          />
        </div>
        </div>
        
        <div className="flex flex-col gap-3 w-full lg:w-[36rem]">

            {/*  */}
            <FAQAccordion></FAQAccordion>
          
        </div>
      </div>
    </div>
  );
};

export default Faq;
