import React, { useContext } from 'react'
import { Box, Typography } from '@mui/material'

import headerLinkShop from '../../../assets/Header/HeaderShop.png'
import darkModeHeaderLinkShop from '../../../assets/Header/DarkMode/DarkModeShop.png'
import { DarkModeContext } from '../../../context'

const HeaderShop = () => {
  const { darkMode } = useContext(DarkModeContext)

  if (darkMode) {
    return (
      <Box
        sx={{
          marginTop: {
            md: '7px',
            xs: '6px'
          }
        }}
      >
        <a
          href='/Shop'
          style={{
            textDecoration: 'none'
          }}

        >
          <img src={darkModeHeaderLinkShop} alt='shop-home-link'
            style={{
              width: '45px',
              height: '45px',
            }}
          />
          <Typography
            color='#1CFBD3'
            fontWeight='bold'
            sx={{
              color: '#4B4B4B'
            }}
          >
            SHOP
          </Typography>
        </a>
      </Box>
    )
  }
  return (
    <Box
      sx={{
        marginTop: {
          md: '7px',
          xs: '6px'
        }
      }}
    >
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
          sx={{
            color: '#1CFBD3'
          }}
        >
          SHOP
        </Typography>
      </a>
    </Box>
  )
}

export default HeaderShop