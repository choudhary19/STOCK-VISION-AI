import React from 'react'
import NavBar from '../components/Navbar'
import Footer from '../components/Footer'
import NewsMarketpage from './components/NewsMarketpage'

const MarketPage = () => {
  return (
    <section className="relative overflow-hidden" style={{ backgroundImage: "url('public/img/Banner/banner_bg.jpg')" }}>
    <NavBar/>
    <NewsMarketpage></NewsMarketpage>
    <Footer/>
  </section>
  )
}

export default MarketPage
