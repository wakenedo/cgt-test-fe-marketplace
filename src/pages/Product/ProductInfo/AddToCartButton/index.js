import React from 'react'
import { Box, Button } from '@mui/material'
import buyCart from '../../../../assets/Products/Cart.png'

const AddToCartButton = () => {
  return (
    <Button
      variant='contained'
      onClick={() => console.warn('Not implemented!')}
      sx={{
        fontSize: {
          lg: '13px',
          md: '18px',
          xs: '14px',
        }
      }}
    >
      <Box
        sx={{
          marginTop: {
            lg: '',
            md: '5px',
            xs: '',
          },
          marginRight: {
            lg: '',
            md: '10px',
            xs: '',
          }
        }}
      >
        <img
          src={buyCart}
          alt='cart'
          width='25px'
        />
      </Box>
      Add to Cart
    </Button>
  )
}

export default AddToCartButton