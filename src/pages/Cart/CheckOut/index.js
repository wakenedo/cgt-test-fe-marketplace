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
          lg: 'flex',
          md: 'flex',
          xs: 'flex',
        },
        flexDirection: {
          lg: 'row',
          md: 'row',
          xs: 'column',
        },
        position: {
          lg: 'sticky',
          md: 'sticky',
          xs: 'sticky',
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