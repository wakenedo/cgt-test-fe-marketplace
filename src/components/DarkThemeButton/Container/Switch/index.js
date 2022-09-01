import React, { useContext } from 'react';
import { DarkModeContext } from '../../../../context'
import { Box, Typography } from '@mui/material'

import on from '../../../../assets/Header/on.png'
import off from '../../../../assets/Header/off.png'



function Switch() {
  const { darkMode, toggleDarkMode } = useContext(DarkModeContext);
  const handleClick = () => {
    toggleDarkMode();
  }
  console.log('Switch', darkMode, toggleDarkMode, DarkModeContext)
  return (
    <Box>
      <img
        width='45px'
        height='55px'
        src={darkMode ? off : on}
        alt='lightswitch-on'
        onClick={handleClick}
      />
      <Typography
        fontWeight='bold'
        textAlign='center'
        color='#1CFBD3'
        sx={{
          color: darkMode ? '#4B4B4B' : '#1CFBD3'
        }}
      >
        {darkMode ? 'DARK' : 'LIGHT'}
      </Typography>
    </Box>
  )

}

export default Switch;