import React from 'react'
import NavBar from '../components/Navbar'
import StockPriceHeader from './components/StockPriceHeader'
import TradeChart from './components/Chart/TradeChart'
import OrderForm from './components/OrderForm/OrderForm'
import MarketActivities from './components/MarketActivities'
import Footer from '../components/Footer'
import OrderViewArea from './components/OrderView/OrderViewArea'
import StockNews from './components/StockTradeNews'

function TradePage() {
  return (
    <section className="min-h-screen"
    style={{ backgroundImage: "url('public/img/Banner/banner_bg.jpg')" }}>
      <NavBar></NavBar>
      <div className="w-full mb-3">
        <div className="h-full flex">
          {/* Left Section */}
          <div className="flex flex-col w-4/5">
            {/* Top Subsection */}
            <div className="flex justify-center items-center">
              <StockPriceHeader></StockPriceHeader>
            </div>
            {/* Middle Subsection */}
            <div className="flex w-full">
              <TradeChart></TradeChart>
            </div>
            {/* Bottom Subsection */}
            <div className="h-2/5 flex">
              <div className="w-1/2 flex justify-center items-center">
                <OrderForm buttonType="Buy" />
              </div>
              <div className="w-1/2 flex justify-center items-center">
                <OrderForm buttonType="Sell" />
              </div>
            </div>
          </div>
          {/* Right Section */}
          <div className="flex flex-col w-1/5">
            {/* Upper Subsection */}
            <div >
              <MarketActivities />
            </div>
            <div >
              {/* <OrderBook /> */}
              <StockNews/>
            </div>
            {/* Bottom Subsection */}
          </div>
        </div>
      </div>

      <div className="h-1/3 w-full">
        <OrderViewArea />
      </div>

      <Footer className="fixed bottom-0" />
    </section>
  )
}

export default TradePage;

