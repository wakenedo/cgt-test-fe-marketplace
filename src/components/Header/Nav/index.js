import React, { useContext } from 'react'
import { Typography, Box } from '@mui/material'
import { useSelector } from 'react-redux'
import { DarkModeContext } from '../../../context'

import HeaderCart from '../../../assets/Header/HeaderCart.png'
import darkModeHeaderCart from '../../../assets/Header/DarkMode/DarkModeHeaderCart.png'

const Nav = () => {
  const { darkMode } = useContext(DarkModeContext)
  const { cart } = useSelector((state) => state)

  const getTotalQuantity = () => {
    let total = 0
    cart.forEach(item => {
      total += item.quantity
    })
    return total
  }

  if (darkMode) {
    return (
      <nav>
        <a
          href="/Cart">
          <Box
            display="flex"
            alignItems='center'
          >
            <img
              src={darkModeHeaderCart}
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
  } else {
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
}

export default Nav