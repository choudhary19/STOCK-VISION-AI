import React from 'react'
import chartviedo from '../../assets/videos/Chart.mp4'
import '../../index.css'
import BubbleAnimation from '@/Animations/BubbleAnimation'

const WhoWeAre = () => {
  return (
    <div className="relative pt-10 pb-52 text-center justify-center bg-black"
    // style={{
    //   backgroundImage: " url('public/img/Banner/banner_bg02.jpg')",
    //   backgroundSize: 'cover',
    //   backgroundPosition: 'center',
    // }}
    >
      <h1 className='text-6xl lg:text-8xl font-bold  p-5  text-white'>Where the World <br/> <span className='bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500'>does markets</span> </h1>
      <p className='text-xl lg:text-3xl  font-semibold text-white p-10 mt-5'>
        Look first / Then leap. It's what you'd call our philosophy,<br/> that it doesn't matter who you are or what you trade,<br/> preparing then committing is the best way of maximizing life's returns.
      </p>
      <button className='mt-10 px-20 py-4 text-white bg-transparent font-semibold hover:bg-gray-500 hover:text-white border border-gray-500 rounded-full transition-colors duration-300'>Get Started</button>
      <h1 className='text-6xl lg:text-8xl font-bold  p-5  text-white'>Hello<span style={{fontFamily: 'Pacifico, cursive'}}>,</span><span ><span className='bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500'>Traders</span></span> </h1>
      <p className='text-xl lg:text-2xl  font-semibold text-white p-10 mt-5'>
       StockVision is a comprehensive trading bot that automates stock market analysis and trades. <br/>It leverages advanced algorithms to monitor market trends and execute trades <br/> efficiently for optimal results
      aslo add we aslo provide <br/> charting platform and social network used by<br/>  traders and investors worldwide to spot <br/>opportunities across global markets.
      </p>
      <div className='relative mt-10 flex justify-center'>
        <div className='relative  rounded-3xl border-4 border-purple-500' style={{height:520 , width:800}}>
          <video className='w-full h-[300px] lg:h-[500px] rounded-3xl' autoPlay  loop>
            <source src={chartviedo} type="video/mp4" />
          </video>
        </div>
      </div>
      <BubbleAnimation></BubbleAnimation>

    </div>
  )
}

export default WhoWeAre
