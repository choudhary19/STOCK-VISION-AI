import React from 'react'
import NavBar from '@/components/Navbar'
import HeroSection from './components/HeroSection'
import PerformAutoTrade from './components/AutoTrade'
import HowItWork from './components/HowItWork'

function AutoTrade() {
  return (
    <>
    <NavBar></NavBar>
    <section className = "relative overflow-hidden" style={{ backgroundImage: "url('public/img/Banner/banner_bg.jpg')" ,backgroundRepeat:"no-repeat" , backgroundSize:"cover"}}>
     <HeroSection
       title="Welcome to our Trading Bot"
        subtitle="Automate your trading strategies with ease"
     />
     {/* <AutoTrade></AutoTrade> */}
     <PerformAutoTrade></PerformAutoTrade>
     <HowItWork></HowItWork>

    </section>
    </>
  )
}

export default AutoTrade
