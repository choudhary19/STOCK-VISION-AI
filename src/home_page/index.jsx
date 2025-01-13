import React from 'react'
import NavBar from '../components/Navbar'
import Footer from '../components/Footer'
import Banner from './components/Banner'
import WhoWeAre from './components/WhoWeAre'
import WhyChooseUs from './components/WhyChooseUs/WhyChooseUs'
import Team from './components/Team/Team'
import CommentSection from './components/CommentSection'
import WhyChooseUs2 from './components/WhyChooseUs/WhyChooseUs2'

const HomePage = () => {
  return (
    <section className="relative overflow-hidden" style={{ backgroundImage: "url('pblic/img/Banner/banner_bg.jpg')" }}>
     <div className="absolute left-0 bottom-0 w-full h-full bg-gradient-to-t from-opacity-0 via-opacity-0 to-opacity-100" style={{ backgroundImage: 'url(public/img/Banner/banner_bg02.jpg)' }}></div>
        <div className='relative z-10 padding-top-120'>
         <NavBar /> 

         <Banner/>

         <WhoWeAre
        //  heading='Trading Platiform'
        //  subHeading='. Who We are .'
        //  title="Build By <span>Traders</span>, For <span>Traders</span>."
        //  content={""}
        //  image={"public/img/About/who-we-are-chart.png"}
         />

         <WhyChooseUs/>
         <WhyChooseUs2/>

        {/* <WhoWeAre
         heading=''
         subHeading=''
         title="<span>StockVision</span> Ai"
         content={"StockVision Ai use the Deep learning based Algorithms to take decision and predict NSDAQ stock market’s prices and help you to grow up your funds with absolute precision.  "}
         image={"public/img/About/robot.png"} 
         /> */}

         <Team/>

         <CommentSection/>
         <Footer/>         
        </div>
    </section>
  )
}

export default HomePage
