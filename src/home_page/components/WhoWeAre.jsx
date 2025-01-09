import React from "react";

const WhoWeAre = ({ 
  heading, 
  subHeading, 
  title, 
  content, 
  image 
}) => (
  <section 
    id="about" 
    className=" lg:py-32 bg-gray-100 relative" 
    style={{ 
      backgroundImage: "url('public/img/Banner/banner_bg.jpg')", 
      backgroundSize: "cover", 
      backgroundPosition: "center" 
    }}
  >
     <div className="absolute text-center py-5 top-0 left-0 w-full justify-center">
          <h1 className="text-3xl lg:text-4xl font-extrabold text-white">
            {heading}
          </h1>
        </div>

    <div className="container mx-auto px-6">
      <div className="flex pl-10 flex-col lg:flex-row items-center justify-between">
        <div className="w-full lg:w-1/2 mb-8 lg:mb-0 lg:mr-12">
          <div className="text-center lg:text-left mb-6">
            <span className="text-lg font-semibold text-yellow-200 uppercase">
              {subHeading}
            </span>
            <h2 
              className="text-3xl lg:text-4xl font-bold text-white" 
              dangerouslySetInnerHTML={{ __html: title }} 
            />
          </div>
          <p className="text-gray-300 text-lg">{content}</p>
        </div>

        <div className="w-full lg:w-1/2">
          <div className="about-img text-center lg:text-right" data-wow-delay=".2s">
            <img 
              src={image} 
              alt="" 
              className="w-4/5 h-auto rounded-lg shadow-lg" 
            />
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default WhoWeAre;
