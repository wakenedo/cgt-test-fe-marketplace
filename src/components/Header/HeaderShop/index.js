import React from 'react'
import { Box, Typography } from '@mui/material'

import headerLinkShop from '../../../assets/Header/HeaderShop.png'

const HeaderShop = () => {
  return (
    <Box>
      <a
        href='/Shop'
        style={{
          textDecoration: 'none'
        }}

      >
        <img src={headerLinkShop} alt='shop-home-link'
          style={{
            width: '45px',
            height: '45px',
          }}
        />
        <Typography
          color='#1CFBD3'
          fontWeight='bold'
        >
          SHOP
        </Typography>
      </a>
    </Box>
  )
}

export default HeaderShop