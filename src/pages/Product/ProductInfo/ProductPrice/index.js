import React from 'react'
import { Typography } from '@mui/material'

import products from '../../../../constants/products'

const ProductPrice = () => {
  return (
    <Typography
      display='flex'
      alignItems='center'
      fontWeight='bold'
      sx={{
        fontSize: {
          lg: '45px',
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
      {products[1].price},00
      <Typography
        fontWeight='bold'
        sx={{
          marginTop: {
            lg: '30px',
            md: '15px',
            xs: '10px',
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
    </Typography>
  )
}

export default ProductPrice