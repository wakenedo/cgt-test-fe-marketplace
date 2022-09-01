import React, { useContext } from 'react'
import { Box } from '@mui/material'


//Inner Components
import Nav from './Nav'
import HeaderLogo from './HeaderLogo'
import HeaderShop from './HeaderShop'
import DarkThemeButton from '../DarkThemeButton'
import { DarkModeContext } from '../../context'


const Header = () => {
  const { darkMode } = useContext(DarkModeContext)
  return (
    <Box
      display='flex'
      alignItems='center'
      marginBottom='45px'
      justifyContent='space-between'
      padding='10px'
      sx={{
        backgroundColor: darkMode ? '#E4E4E4' : '#fdfdfd',
        borderBottom: '1px solid #4B4B4B',
        marginBottom: {
          lg: '10px',
          md: '10px',
          xs: '5px',
        }
      }}
    >
      <Box
        marginLeft='25px'
      >
        <HeaderLogo />
      </Box>
      <DarkThemeButton />

      <HeaderShop />
      <Box>
        <Nav />
      </Box>

    </Box>
  )
}

export default Header