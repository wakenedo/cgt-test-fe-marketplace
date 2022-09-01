import React from 'react'
import { Box } from '@mui/material'
import HomeImage from '../../../assets/Home/HomeImage.png'

const IntroImage = () => {
  return (
    <Box
      margin='20px'
    >
      <img
        src={HomeImage}
        alt='Intro'
        style={{
          width: '100%',
        }}
      />
    </Box>
  )
}

export default IntroImage