import React from 'react'
import { Box } from '@mui/material'
import CheckOutNow from './CheckOutNow'
import CheckOutProducts from './CheckOutProducts'

const CheckOut = ({ cart }) => {
  console.log('CheckOut Log', cart)
  return (
    <Box
      backgroundColor='#1CFBD3'
      justifyContent='center'
      sx={{
        display: {
          lg: '',
          md: 'flex',
          xs: '',
        },
        position: {
          lg: '',
          md: 'sticky',
          xs: '',
        },
        bottom: {
          lg: '0',
          md: '0',
          xs: '0',
        },

      }}
    >

      <CheckOutProducts />
      <CheckOutNow cart={cart} />
    </Box>
  )
}

export default CheckOut