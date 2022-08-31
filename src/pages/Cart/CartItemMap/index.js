import React from 'react'
import { Box } from '@mui/material'

import noItemInCart from '../../../assets/Cart/NoItemInCart.png'

import CartItem from '../CartItem'

const CartItemMap = ({ cart }) => {
  console.log('CartItemMap Log', cart)

  if (cart.length === 0) {
    return (
      <Box
        border='1px solid #FFADFC'
        backgroundColor='#FFADFC'
        sx={{
          height: {
            lg: '',
            md: '600px',
            xs: '',
          },
          width: {
            lg: '',
            md: '100%',
            xs: '',
          },
        }}
      >
        <Box
          border='9px solid #4B4B4B'
          borderRadius='15px'
          sx={{
            width: {
              lg: '',
              md: '420px',
              xs: '',
            },
            height: {
              lg: '',
              md: '350px',
              xs: '',
            },
            margin: {
              lg: '',
              md: '100px 250px',
              xs: '',
            },
            padding: {
              lg: '',
              md: '20px 20px',
              xs: '',
            }
          }}
        >
          <img src={noItemInCart} alt='no-item-in-cart' />
        </Box>
      </Box>
    )
  }
  else {
    return (
      <Box
        border='1px solid #FFADFC'
        backgroundColor='#FFADFC'
        sx={{
          minHeight: {
            lg: '',
            md: '600px',
            xs: '',
          },
          width: {
            lg: '',
            md: '100%',
            xs: '',
          },
        }}
      >
        {cart?.map((product, id) => (
          <CartItem key={product.id} product={product} id={id} />
        ))}
      </Box>
    )
  }
}

export default CartItemMap