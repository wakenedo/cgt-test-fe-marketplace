import React from 'react'
import { Box, Typography } from '@mui/material'

const ItemPricing = ({ product }) => {

  const getTotal = () => {
    const result = product.quantity * product.product.price
    return result
  }

  return (
    <Box
      sx={{
        display: {
          xs: 'flex'
        },
        marginBottom: {
          xs: '10px'
        }
      }}
    >
      <Box
        marginBottom='10px'
      >
        <Typography
          color='#4B4B4B'
          fontWeight='bold'
          sx={{
            fontSize: {
              lg: '12px',
              md: '10px',
              xs: '8px',
            },

          }}
        >
          EACH ITEM :
        </Typography>
        <Typography
          color='#4B4B4B'
          fontWeight='bold'
          sx={{
            fontSize: {
              lg: '16px',
              md: '12px',
              xs: '12px',

            }
          }}
        >
          {product.product.price},00 USD
        </Typography>
      </Box>
      <Box
        sx={{
          marginLeft: {
            xs: '90px'
          }
        }}
      >
        <Box
          sx={{
            marginRight: {
              lg: '',
              md: '5px',
              xs: '',
            },

          }}
        >
          <Typography
            color='#4B4B4B'
            fontWeight='bold'
            sx={{
              fontSize: {
                lg: '16px',
                md: '13px',
                xs: '12px',
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
              lg: '24px',
              md: '22px',
              xs: '16px',
            }
          }}
        >
          {getTotal()},00 USD
        </Typography>
      </Box>
    </Box>
  )
}

export default ItemPricing