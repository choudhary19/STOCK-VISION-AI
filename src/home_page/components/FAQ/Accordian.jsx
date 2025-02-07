import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion.jsx"
  
  export  default function FAQAccordion() {
    return (
      <Accordion type="single" collapsible className="w-full mt-12 ">
        <AccordionItem value="item-1">
          <AccordionTrigger className=" text-2xl">What stocks do your predictions cover?</AccordionTrigger>
          <AccordionContent className="font-light font-mono text-slate-300">
          Our predictions cover the following stocks: AAPL, AMZN, GOOG, TSLA, and MSFT.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-2">
          <AccordionTrigger className=" text-2xl">What timeframes are available for predictions?</AccordionTrigger>
          <AccordionContent className="font-light font-mono text-slate-300">
          We provide predictions for two timeframes: 5 days and 75 minutes with intervals of 5 minutes.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-3">
          <AccordionTrigger className=" text-2xl">What data is displayed on the charts?</AccordionTrigger>
          <AccordionContent className="font-light font-mono text-slate-300">
          The left chart displays the last 10 days or last 150 minutes' price of the selected stock, while the right chart shows the next predictions respectively.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-4">
          <AccordionTrigger className=" text-2xl">How accurate are your predictions?</AccordionTrigger>
          <AccordionContent className="font-light font-mono text-slate-300">
          Our models are trained with utmost accuracy and backed by extensive research and effort to provide the most reliable predictions possible.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-5">
          <AccordionTrigger className=" text-2xl">Why does loading take time?</AccordionTrigger>
          <AccordionContent className="font-light font-mono text-slate-300">
          Loading can take some time due to the complexity of our prediction algorithms and the amount of data processed. We ensure it's worth the wait for accurate predictions.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-6">
          <AccordionTrigger className=" text-2xl">How can I view the current market status?</AccordionTrigger>
          <AccordionContent className="font-light font-mono text-slate-300">
          You can view the status of the market by opening the sidebar from the button on the right sidebar.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-7">
          <AccordionTrigger className=" text-2xl">Can I use the prediction service for day trading?</AccordionTrigger>
          <AccordionContent className="font-light font-mono text-slate-300">
          Yes, our 75-minute predictions with 5-minute intervals are ideal for day trading.
          </AccordionContent>
        </AccordionItem>
        
        <AccordionItem value="item-8">
          <AccordionTrigger className=" text-2xl">How often are the prediction models updated?</AccordionTrigger>
          <AccordionContent className="font-light font-mono text-slate-300">
          Our prediction models are regularly updated to incorporate the latest data and improve accuracy.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-9">
          <AccordionTrigger className=" text-2xl">Is there a mobile app for your prediction service?</AccordionTrigger>
          <AccordionContent className="font-light font-mono text-slate-300">
          Currently, our prediction service is accessible via web application. We are working on a mobile app to enhance user convenience.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-10">
          <AccordionTrigger className=" text-2xl">What makes your prediction service unique?</AccordionTrigger>
          <AccordionContent className="font-light font-mono text-slate-300">
          Our prediction service is unique due to its high accuracy, extensive research, and detailed interval predictions for both short and long-term timeframes.
          </AccordionContent>
        </AccordionItem>

      </Accordion>
    )
  }
  