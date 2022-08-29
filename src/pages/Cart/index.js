import React from 'react'
import { useSelector } from 'react-redux'
import { Box, Typography } from '@mui/material'

import CartItem from './CartItem'

const Cart = () => {
  const cart = useSelector((state) => state.cart)

  console.log('Cart Log', cart)

  return (
    <Box>

      <Typography>
        Are you ready to purchase these?
      </Typography>


      {cart?.map((product, id) => (
        <CartItem product={product} id={id} />
      ))}

    </Box>
  )
}

export default Cart