import React from 'react'
import { Typography } from '@mui/material'

import products from '../../../constants/products.jsx'

const ProductName = () => {
  return (
    <Typography
      fontWeight='bold'
      sx={{
        fontSize: {
          lg: '55px',
          md: '45px',
          xs: '25px',
        }
      }}
    >
      {products[1].name}
    </Typography>
  )
}

export default ProductName