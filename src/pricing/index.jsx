import React from 'react'
import NavBar from '../components/Navbar'
import Footer from '../components/Footer'
import PriceHeader from './components/PriceHeader'
import PricingCards from './components/PriceCard/PriceCard'

const PricePage = () => {
  return (
    <section className="relative overflow-hidden" 
    style={{ backgroundImage: "url('public/img/Banner/banner_bg.jpg')" }}>
      <NavBar/>
      <PriceHeader></PriceHeader>
      <PricingCards/>
      <Footer/>
    </section>
  )
}

export default PricePage
