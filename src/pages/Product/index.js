import React from 'react'
import { Box, Stack } from '@mui/material'

//InnerComponents
import ProductName from './ProductName'
import ProductImage from './ProductImage'
import ProductInfo from './ProductInfo'

const Product = () => {
  return (
    <Box>
      <Box>
        <Box
          sx={{
            marginBottom: {
              lg: '',
              md: '25px',
              xs: '',
            }
          }}
        >
          <ProductName />
        </Box>
        <Box>
          <Stack
            direction='column'
          >
            <ProductImage />
            <ProductInfo />

          </Stack>

        </Box>

      </Box>
    </Box>
  )
}

export default Product