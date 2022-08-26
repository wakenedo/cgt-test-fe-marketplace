import React from 'react'
import { Box } from '@mui/material'

import products from '../../../constants/products.jsx'

const ProductImage = () => {
  return (
    <Box>
      <img
        src={products[1].image}
        alt='product'
        width='100%'

      />
    </Box>
  )
}

export default ProductImage