import React from 'react'
import { useSelector } from 'react-redux'
import { Box, Button, Typography } from '@mui/material'
import { useDispatch } from 'react-redux'
import { addToCart } from '../../redux/cartSlice'

import CartItem from './CartItem'

const Cart = () => {
  const dispatch = useDispatch()
  const cart = useSelector((state) => state.cart)


  return (
    <Box>
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
        </Box>
        Add to Cart
      </Button>

      <Typography>
        Are you ready to purchase these?
      </Typography>


      {cart?.map((item) => (
        <CartItem />
      ))}

    </Box>
  )
}

export default Cart