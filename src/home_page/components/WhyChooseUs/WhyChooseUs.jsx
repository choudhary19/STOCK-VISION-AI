import BubbleAnimation from '@/Animations/BubbleAnimation';
import React from 'react';

const WhyChooseUs = () => {
  return (
    <div className="relative pt-10 pb-52 text-center justify-center bg-black">
      <h1 className='text-6xl lg:text-7xl font-bold text-white'>
        Our code of <span className='bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500'>honor</span>
      </h1>
      <p className='text-xl lg:text-3xl font-semibold text-white p-5 mt-5'>
        To live up to that mission, we've made 3 principles that<br/>
        all our teams swear by
      </p>

      <div className="flex items-center justify-center w-full">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-8 max-w-7xl mx-auto mt-10 bg-black text-white">
  <div className="p-6 bg-black border border-gray-800 rounded-lg text-center">
    <div className="flex justify-center mb-4">
      <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>
    </div>

    <h3 className="text-xl font-semibold mb-2">Community First</h3>
    <p className="text-gray-400">
      Our users are at the heart of everything we do
    </p>
  </div>
  <div className="p-6 bg-black border border-gray-800 rounded-lg text-center">
    <div className="flex justify-center mb-4">
      <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 2C13.1046 2 14 2.89543 14 4V6H16C17.1046 6 18 6.89543 18 8V20C18 21.1046 17.1046 22 16 22H8C6.89543 22 6 21.1046 6 20V8C6 6.89543 6.89543 6 8 6H10V4C10 2.89543 10.8954 2 12 2Z" />
      </svg>
    </div>
    <h3 className="text-xl font-semibold mb-2">Empowerment</h3>
    <p className="text-gray-400">
     Enabling traders and investors to take control of their financial journey.
    </p>
  </div>
  <div className="p-6 bg-black border border-gray-800 rounded-lg text-center">
    <div className="flex justify-center mb-4">
      <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" /></svg>
    </div>
    <h3 className="text-xl font-semibold mb-2">Transparency</h3>
    <p className="text-gray-400">
     Commitment to openness and integrity in every action
    </p>
  </div>
</div>

      </div>
    </div>
  );
};

export default WhyChooseUs;

