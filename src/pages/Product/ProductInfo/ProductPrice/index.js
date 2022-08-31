import React from 'react'
import { Box, Typography } from '@mui/material'

const ProductPrice = ({ products, id }) => {
  return (
    <Box
      display='flex'
    >
      <Typography
        display='flex'
        alignItems='center'
        fontWeight='bold'
        color='#4B4B4B'
        sx={{
          fontSize: {
            lg: '35px',
            md: '45px',
            xs: '30px',
          },
          marginTop: {
            lg: '0px',
            md: '15px',
            xs: '5px',
          },
        }}
      >
        {products[id]?.price},00
      </Typography>
      <Typography
        color='#4B4B4B'
        fontWeight='bold'
        sx={{
          marginTop: {
            lg: '21.5px',
            md: '45px',
            xs: '20px',
          },
          marginLeft: {
            lg: '5px',
            md: '5px',
            xs: '5px',
          }
        }}
      >
        USD
      </Typography>
    </Box>
  )
}

export default ProductPrice