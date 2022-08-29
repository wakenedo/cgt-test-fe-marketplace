import React from 'react'
import { Box, Typography } from '@mui/material'


const CartItem = ({ product, id }) => {

  console.log('Cart Item Log', product.product.title, id)
  return (
    <Box
      borderBottom='1px solid #4B4B4B'
      backgroundColor='#fdfdfd'
      margin='20px'
      padding='10px 20px 20px'
      justifyContent='space-between'
      display='flex'
      alignItems='center'
    >
      <Box>
        <Box
          sx={{
            marginBottom: {
              lg: '',
              md: '10px',
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
                md: '14px',
                xs: '',
              }
            }}
          >
            {product.product.title.toUpperCase()}
          </Typography>
        </Box>
        <img src={product.product.image} alt=''
          style={{
            width: '200px',
            maxHeight: '100px'
          }}
        />
      </Box>
      <Box>
        <Typography>
          {product.product.price},00 USD
        </Typography>
      </Box>
      <Typography>
        {product.quantity}
      </Typography>
    </Box >
  )
}

export default CartItem