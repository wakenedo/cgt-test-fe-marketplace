import React from 'react'
import { useDispatch } from 'react-redux'
import { addToCart } from '../../../../redux/cartSlice'
import { Box, Button } from '@mui/material'

//Assets
import buyCart from '../../../../assets/Products/Cart.png'
import callApi from '../../../../api'

const AddToCartButton = () => {
  const dispatch = useDispatch()

  console.log(callApi())
  return (
    <Button
      variant='contained'
      onClick={() =>
        dispatch(addToCart({

        }))
      }
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