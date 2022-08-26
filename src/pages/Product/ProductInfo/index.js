import React from 'react'
import { Box, Typography } from '@mui/material'

import AddToCartButton from './AddToCartButton/index.js'
import ProductPrice from './ProductPrice/index.js'
import ProductDescription from './ProductDescription/index.js'

const ProductInfo = () => {
  return (
    <Box
      backgroundColor='#1CFBD3'
      sx={{
        width: {
          lg: '400px'
        },
        marginLeft: {
          lg: '78%'
        },
        bottom: {
          lg: '0',
          md: '0',
          xs: '0',
        },
        position: {
          lg: 'fixed',
          md: 'sticky',
          xs: 'sticky',
        }
      }}
    >
      <ProductDescription />

      <Box
        display='flex'
        alignItems='center'
        justifyContent='space-between'
        margin='0 auto'
        sx={{
          width: {
            lg: '350px',
            md: '80%',
            xs: '80%',
          }
        }}
      >
        <ProductPrice />
        <AddToCartButton />
      </Box>

    </Box>
  )
}

export default ProductInfo