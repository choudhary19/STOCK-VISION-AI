import React from 'react'
import OrderViewArea from './components/OrderViewArea'
import NavBar from '@/components/Navbar'
import Footer from '@/components/Footer'
import StockPriceHeader from '@/Trade/components/StockPriceHeader'
const OrderPage = () => {
  return (

    
    <section className="relative min-h-screen  " style={{ backgroundImage: "url('public/img/Banner/banner_bg.jpg')" }}>
      <NavBar></NavBar>
       
       {/* <div className='justify-center w-full ml-52'>
       <StockPriceHeader></StockPriceHeader>
       </div> */}
       <div className='pl-10 pr-10 mb-24'>
       <OrderViewArea></OrderViewArea>

       </div>
        <Footer />

     </section>   
  )
}

export default OrderPage
