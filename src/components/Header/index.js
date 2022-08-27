import React from 'react'
import { Box } from '@mui/material'


//Inner Components
import Nav from './Nav'
import HeaderLogo from './HeaderLogo'

const Header = () => {
  return (
    <Box
      display='flex'
      alignItems='center'
      marginBottom='45px'
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
      <Box
        sx={{
          marginLeft: {
            lg: '85%',
            md: '72%',
            xs: '80px'
          }
        }}
      >
        <Nav />
      </Box>
    </Box>
  )
}

export default Header