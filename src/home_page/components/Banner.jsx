import React from 'react';
import { useTypewriter, Cursor } from 'react-simple-typewriter';

const Banner = () => {
  // Typewriter effect
  const [text] = useTypewriter({
    words: ['StockVision', 'Ai Prediction', 'Automation'],
    loop: true, // Set loop to true for continuous animation
  });

  return (
    <section
      className="relative pt-10 pb-96"
      style={{
        backgroundImage: "url('public/img/About/about-us-chart.png'), url('public/img/Banner/banner_bg.jpg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="container mx-auto px-4 relative">
        {/* First Image */}
        <img
          src="public/img/Banner/banner_shape01.png"
          alt="Banner Shape 01"
          className="absolute left-0 transform -translate-x-1/2 -translate-y-1/2"
          style={{ width: '200px' }}
        />

        {/* Second Image */}
        <img
          src="public/img/Banner/banner_shape02.png"
          alt="Banner Shape 02"
          className="absolute bottom-0 right-0 transform translate-x-1/2 translate-y-1/2"
          style={{ width: '200px' }}
        />

        {/* Third Image */}
        <img
          src="public/img/Banner/banner_shape03.png"
          alt="Banner Shape 03"
          className="absolute top-1/2 right-1/2 transform translate-x-1/2 -translate-y-1/2"
          style={{ width: '200px' }}
        />

        <div className="flex justify-center">
          <div className="lg:col-span-10">
            <div className="text-center mx-5 relative z-10">
              <h1 className="text-4xl font-bold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
                Join Future Of Algorithmic{' '}
                <span className="text-blue-600 dark:text-blue-500">Stocks</span>
                <br />
                With <span className="text-blue-900 dark:text-green-500">{text}</span>
                <Cursor />
              </h1>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
