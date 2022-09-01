import React from 'react'
import { Box } from '@mui/material'


//Inner Components
import Nav from './Nav'
import HeaderLogo from './HeaderLogo'
import HeaderShop from './HeaderShop'

const Header = () => {
  return (
    <Box
      display='flex'
      alignItems='center'
      marginBottom='45px'
      justifyContent='space-between'
      padding='10px'
      sx={{

        backgroundColor: '#fdfdfd',
        borderBottom: '1px solid #4B4B4B'
      }}
    >
      <Box
        marginLeft='25px'
      >
        <HeaderLogo />
      </Box>
      <HeaderShop />
      <Box>
        <Nav />
      </Box>

    </Box>
  )
}

export default Header