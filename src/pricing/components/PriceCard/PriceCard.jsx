import React from 'react';
import FreeCard from './FreeCard';
import ProCard from './ProCard';
import Pluscard from './PLusCard';
import Fade from 'react-reveal/Fade';

const PricingCards = () => {
  return (
    <div className="flex  justify-center mb-20 -mt-14 ">
      {/* Left card */}
      <div className="relative">
        <Fade left duration={4000}>
        <div className=" rounded-lg shadow-md p-4">
          <FreeCard/>
        </div>
        </Fade>
      </div>
      {/* Center card */}
      <div className="flex -mt-20">
        <Fade top duration={4000}>
        <div className=" rounded-lg shadow-md p-4">
          <Pluscard/>
        </div>
        </Fade>
      </div>
      {/* Right card */}
      <div className="relative">
        <Fade right duration={4000}>
        <div className=" rounded-lg shadow-md p-4">
          <ProCard/>
        </div>
        </Fade>
      </div>
    </div>
    
  );
};

export default PricingCards;
