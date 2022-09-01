import React from 'react'
import { useDispatch } from 'react-redux'
import { addToCart } from '../../../../redux/cartSlice'
import { Box, Button } from '@mui/material'
import { toast } from 'react-toastify'

//Assets
import buyCart from '../../../../assets/Products/Cart.png'

const AddToCartButton = ({ products, id }) => {
  const dispatch = useDispatch()
  const product = products[id]

  const handleClick = () => {
    dispatch(addToCart({
      product, id
    }))
    toast.success('You added to the cart !')

  }

  return (
    <Button
      variant='contained'
      onClick={handleClick}
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