import React from 'react'
import NavBar from '../components/Navbar'
import Footer from '../components/Footer'
import Banner from './components/Banner'

const HomePage = () => {
  return (
    <section className="relative overflow-hidden" style={{ backgroundImage: "url('pblic/img/Banner/banner_bg.jpg')" }}>
     <div className="absolute left-0 bottom-0 w-full h-full bg-gradient-to-t from-opacity-0 via-opacity-0 to-opacity-100" style={{ backgroundImage: 'url(public/img/Banner/banner_bg02.jpg)' }}></div>
        <div className='relative z-10 padding-top-120'>
         <NavBar />

         <Banner/>





         <Footer/>         
        </div>
    </section>
  )
}

export default HomePage
