import React from 'react'
import OrderHeader from './Components/OrderHeader';
import OrdersData from './Components/OrderData';
    const dummyOrders = [
      {
        date: '2025-01-24',
        pair: 'AAPL/USDT',
        type: 'Market',
        side: 'Buy',
        price: '100',
        amount: '5',
        filled: '2',
        total: 'price * amount = 500',
        triggerConditions: 'Stop-loss',
      },
        {
        date: '2025-01-24',
        pair: 'AMZN/USDT',
        type: 'Market', 

        //  Market Order: Executes the trade immediately at the current market price.
        //  Limit Order: Sets a specific price at which the trade will execute.
        //  Stop Order: Triggers a trade when a specific price is reached.

        side: 'Buy',
        price: '100',
        amount: '5',
        //Refers to the quantity of the asset being traded. 
        // For example, the number of shares, contracts, or units of a cryptocurrency.
    
        filled: '3', // mean 3 out of 5 shares are filled
        total: 'price * amount = 500',
        triggerConditions: 'Take-profit',
        },

    ];

const OrderViewArea = () => {
  return (
    <div>
        <OrderHeader/>
        <OrdersData orders={dummyOrders} />
    </div>
  )
}


export default OrderViewArea


