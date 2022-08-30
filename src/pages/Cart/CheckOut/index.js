import React from 'react'
import { Box } from '@mui/material'
import CheckOutNow from './CheckOutNow'
import CheckOutProducts from './CheckOutProducts'

const CheckOut = ({ cart }) => {
  return (
    <Box
      backgroundColor='#1CFBD3'
      justifyContent='center'
      sx={{
        display: {
          lg: '',
          md: 'flex',
          xs: '',
        }
      }}
    >

      <CheckOutProducts />
      <CheckOutNow />
    </Box>
  )
}

export default CheckOut