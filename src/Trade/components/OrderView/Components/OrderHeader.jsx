import React from 'react'

const OrderHeader = () => {
  return (

<ul className="flex flex-wrap  bg-blue-950 text-sm font-medium text-center text-gray-500 dark:text-gray-400">
    <li className="me-2">
        <a href="#" className="inline-block px-4 py-3 text-yellow-200 rounded-lg active" aria-current="page">Open Orders</a>
    </li>
    <li className="me-2">
        <a href="#"  className="inline-block px-4 py-3 rounded-lg hover:text-gray-900 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-white">Order History</a>
    </li>
  
</ul>

  )
}

export default OrderHeader
