import React from 'react'
import { Box, Typography } from '@mui/material'

const ItemPricing = ({ product }) => {

  const getTotal = () => {
    const result = product.quantity * product.product.price
    return result
  }

  return (
    <Box>
      <Box
        marginBottom='10px'
      >
        <Typography
          color='#4B4B4B'
          fontWeight='bold'
          sx={{
            fontSize: {
              lg: '',
              md: '10px',
              xs: '',
            },

          }}
        >
          EACH ITEM:
        </Typography>
        <Typography
          color='#4B4B4B'
          fontWeight='bold'
          sx={{
            fontSize: {
              lg: '',
              md: '12px',
              xs: '',

            }
          }}
        >
          {product.product.price},00 USD
        </Typography>
      </Box>
      <Box
        sx={{
          marginRight: {
            lg: '',
            md: '5px',
            xs: '',
          }
        }}
      >
        <Typography
          color='#4B4B4B'
          fontWeight='bold'
          sx={{
            fontSize: {
              lg: '',
              md: '13px',
              xs: '',
            },

          }}
        >
          TOTAL :
        </Typography>
      </Box>
      <Typography
        color='#4B4B4B'
        fontWeight='bold'
        sx={{
          fontSize: {
            lg: '',
            md: '22px',
            xs: '',
          }
        }}
      >
        {getTotal()},00 USD
      </Typography>
    </Box>
  )
}

export default ItemPricing