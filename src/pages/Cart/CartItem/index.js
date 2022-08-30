import React from 'react'
import { Box, Typography } from '@mui/material'
import ItemPricing from './ItemPricing'
import ItemQuantity from './ItemQuantity'
import Item from './Item'


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
      <Item product={product} />
      <ItemPricing product={product} />
      <ItemQuantity product={product} />
    </Box >
  )
}

export default CartItem