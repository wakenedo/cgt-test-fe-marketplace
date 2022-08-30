import React from 'react'
import { Box, Typography } from '@mui/material'

const Item = ({ product }) => {
  return (
    <Box
      sx={{
        padding: {
          lg: '',
          md: '20px',
          xs: '',
        }
      }}
    >
      <Box
        sx={{
          marginBottom: {
            lg: '',
            md: '10px',
            xs: '',
          },
          maxWidth: {
            lg: '',
            md: '300px',
            xs: ''
          }
        }}
      >
        <Typography

          borderRadius='3px'
          backgroundColor='#1CFBD3'
          color='#4B4B4B'
          fontWeight='bold'
          sx={{
            fontSize: {
              lg: '',
              md: '18px',
              xs: '',
            },
            padding: {
              lg: '',
              md: '10px',
              xs: '',
            }
          }}
        >
          {product.product.title.toUpperCase()}
        </Typography>
      </Box>
      <img src={product.product.image} alt=''
        style={{
          width: '250px',
          maxHeight: '150px'
        }}
      />
    </Box>
  )
}

export default Item