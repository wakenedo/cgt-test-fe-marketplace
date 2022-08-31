import React from 'react'
import { Box } from '@mui/material'


//Inner components
import ItemPricing from './ItemPricing'
import ItemQuantity from './ItemQuantity'
import Item from './Item'
import RemoveItems from './RemoveItems'


const CartItem = ({ product, id }) => {


  return (
    <Box
      borderBottom='1px solid #4B4B4B'
      backgroundColor='#fdfdfd'
      margin='20px'
      padding='10px 20px 20px'
      justifyContent='space-between'
      display='flex'
      alignItems='center'
      sx={{
        flexDirection: {
          lg: 'row',
          md: 'row',
          xs: 'column'
        }
      }}
    >
      <Item product={product} />
      <ItemPricing product={product} />
      <ItemQuantity product={product} />
      <RemoveItems product={product} />
    </Box >
  )
}

export default CartItem