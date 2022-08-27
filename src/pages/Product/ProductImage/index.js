import React from 'react'
import { Box } from '@mui/material'


const ProductImage = ({ products, id }) => {
  return (
    <Box>
      <img
        src={products[id]?.image}
        alt='product'
        width='100%'

      />
    </Box>
  )
}

export default ProductImage