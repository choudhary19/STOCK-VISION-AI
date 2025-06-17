import React, { useEffect, useState } from 'react';
import axios from 'axios';
import OrderHeader from './Components/OrderHeader';
import OrdersData from './Components/OrderData';

const OrderViewArea = () => {
  const [order, setOrder] = useState([]);

  useEffect(() => {
     const fetchOrders = async () => {
      
      const apiKey = localStorage.getItem('alpacaApiKey');
      const secretKey = localStorage.getItem('alpacaSecretKey');

      if (!apiKey || !secretKey) {
        console.error("API Key or Secret Key is missing.");
        return;
      }

      try {
        const response = await axios.post('http://localhost:5000/api/get-allOrders', {
          apikey: apiKey,
          secretKey: secretKey,
        });

        if (response.data.status === 'OK') {
          setOrder(response.data.orders);
        } else {
          console.error("Error fetching orders:", response.data.message);
        }
      } catch (error) {
        console.error("Error fetching orders:", error);
      }
    };

    const interval = setInterval(fetchOrders, 2000);
        return () => clearInterval(interval);
  }, []);

  return (
    <div>
      {/* <OrderHeader /> */}
      <OrdersData orders={order} />
    </div>
  );
};

export default OrderViewArea;
