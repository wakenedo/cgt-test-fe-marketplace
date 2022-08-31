import React from 'react'
import { Box } from '@mui/material'

import noItemInCart from '../../../assets/Cart/NoItemInCart.png'

import CartItem from '../CartItem'

const CartItemMap = ({ cart }) => {

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
            lg: '100%',
            md: '100%',
            xs: '100%',
          },
        }}
      >
        <Box
          border='9px solid #4B4B4B'
          borderRadius='15px'
          sx={{
            width: {
              lg: '430px',
              md: '420px',
              xs: '150px',
            },
            height: {
              lg: '',
              md: '350px',
              xs: '150px',
            },
            margin: {
              lg: '100px 35%',
              md: '100px 250px',
              xs: '100px',
            },
            padding: {
              lg: '',
              md: '20px 20px',
              xs: '',
            }
          }}
        >
          <Box
            sx={{
              margin: {
                lg: '',
                md: '100px 140px',
                xs: '10px auto',
              }
            }}
          >
            <img src={noItemInCart} alt='no-item-in-cart'
              style={{
                width: '150px'
              }}
            />
          </Box>
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
            lg: '100%',
            md: '100%',
            xs: '100%',
          },
        }}
      >
        {cart?.map((product, id) => (
          <CartItem key={id} product={product} id={id} />
        ))}
      </Box>
    )
  }
}

export default CartItemMap