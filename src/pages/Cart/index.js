import React from 'react'
import { useSelector } from 'react-redux'
import { Box, Typography } from '@mui/material'

import CartItem from './CartItem'

const Cart = () => {
  const cart = useSelector((state) => state.cart)


  return (
    <Box>

      <Typography>
        Are you ready to purchase these?
      </Typography>


      {cart?.map((item) => (
        <CartItem />
      ))}

    </Box>
  )
}

export default Cart