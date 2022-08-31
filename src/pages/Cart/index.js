import React from 'react'
import { useSelector } from 'react-redux'
import { Box } from '@mui/material'

import Greeting from './Greeting'
import CheckOut from './CheckOut'
import CartItemMap from './CartItemMap'

const Cart = () => {
  const cart = useSelector((state) => state.cart)

  console.log('Cart Log', cart)

  return (
    <Box>
      <Greeting cart={cart} />
      <CartItemMap cart={cart} />

      <CheckOut cart={cart} />
    </Box>
  )
}

export default Cart