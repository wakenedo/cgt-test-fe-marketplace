import React from 'react'
import { useSelector } from 'react-redux'
import { Box } from '@mui/material'

import CartItem from './CartItem'
import Greeting from './Greeting'
import CheckOut from './CheckOut'

const Cart = () => {
  const cart = useSelector((state) => state.cart)

  console.log('Cart Log', cart)

  return (
    <Box>
      <Greeting />

      <Box
        border='1px solid #4B4B4B'
      >
        {cart?.map((product, id) => (
          <CartItem product={product} id={id} />
        ))}
      </Box>

      <CheckOut cart={cart} />
    </Box>
  )
}

export default Cart