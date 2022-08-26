import React from 'react'
import { useSelector } from 'react-redux'

const Cart = () => {
  const cart = useSelector((state) => state.cart)

  return (
    <div>
      Are you ready to purchase these?

      <ul>
        {cart?.map((item) => <li key={item.id}>{item}</li>)}
      </ul>
    </div>
  )
}

export default Cart