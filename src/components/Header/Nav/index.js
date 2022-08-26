import React from 'react'
import { Typography } from '@mui/material'

//Utils
import cartItems from '../../../utils/cartItems'

const Nav = () => {
  return (
    <nav>
      <ul style={{ listStyleType: 'none', display: 'flex' }}>
        <li>
          <a
            href="/cart">
            <Typography>
              Cart ({cartItems().length})
            </Typography>
          </a>
        </li>
      </ul>
    </nav>
  )
}

export default Nav