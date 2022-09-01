import React, { useContext } from 'react'
import { Box } from '@mui/material'

import noItemInCart from '../../../assets/Cart/NoItemInCart.png'

import CartItem from '../CartItem'
import { DarkModeContext } from '../../../context'

const CartItemMap = ({ cart }) => {
  const { darkMode } = useContext(DarkModeContext)

  if (cart.length === 0) {
    return (
      <Box
        sx={{
          backgroundColor: darkMode ? '#7E4D88' : '#FFADFC',
          border: darkMode ? '1px solid #7E4D88' : '1px solid #FFADFC',
          height: {
            lg: '750px',
            md: '660px',
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
              lg: '350px',
              md: '350px',
              xs: '150px',
            },
            margin: {
              lg: '145px 37%',
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
        sx={{
          backgroundColor: darkMode ? '#7E4D88' : '#FFADFC',
          border: darkMode ? '0px solid #7E4D88' : '0px solid #FFADFC',
          minHeight: {
            lg: '668px',
            md: '664px',
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