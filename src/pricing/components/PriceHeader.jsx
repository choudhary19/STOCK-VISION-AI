import React from 'react';

const Header = () => {
  return (
    <section className="relative pt-10 pb-40">
      <div className="container mx-auto px-4 relative">
        {/* First Image */}
        <img
          src="public/img/Banner/banner_shape01.png"
          alt="Banner Shape 01"
          className="absolute top-0 left-10 transform -translate-x-1/2 -translate-y-1/2"
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
              <h1 className="text-4xl font-bold leading-none tracking-tight md:text-5xl lg:text-6xl text-white">
                We Keep <span className='bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500'>Trading</span> <br />
              </h1>
              <h1 className="text-2xl p-6 font-bold leading-none tracking-tight text-white">
                Unbeatable Prices! Get the Industry's Leading Trading Tool at a Price that Fits Your Wallet
              </h1>
              <h1 className="text-2xl my-10 p-6 font-bold leading-none tracking-tight text-white">
                <br />Select the Plan that Fits Your Trading Goals
              </h1>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Header;
