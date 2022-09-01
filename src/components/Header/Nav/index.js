import React from 'react'
import { Typography, Box } from '@mui/material'
import { useSelector } from 'react-redux'
import HeaderCart from '../../../assets/Header/HeaderCart.png'

const Nav = () => {
  const { cart } = useSelector((state) => state)

  const getTotalQuantity = () => {
    let total = 0
    cart.forEach(item => {
      total += item.quantity
    })
    return total
  }


  return (
    <nav>
      <a
        href="/Cart">
        <Box
          display="flex"
          alignItems='center'
        >
          <img
            src={HeaderCart}
            alt='cart'
            width='45px'
          />
          <Typography>
            ({getTotalQuantity() || 0})
          </Typography>
        </Box>
      </a>
    </nav>
  )
}

export default Nav