import React from 'react'
import { Typography } from '@mui/material'



const ProductName = ({ products, id }) => {
  console.log('ProductName', products, id)
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
      {products[id]?.title}
    </Typography>
  )
}

export default ProductName