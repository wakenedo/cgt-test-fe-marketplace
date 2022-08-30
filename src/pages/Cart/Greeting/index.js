import React from 'react'
import { Box, Typography } from '@mui/material'

const Greeting = () => {
  return (
    <Box>
      <Typography
        color='#4B4B4B'
        sx={{
          fontSize: {
            lg: '',
            md: '26px',
            xs: '',
          }
        }}
      >
        Are you ready to purchase these?
      </Typography>
    </Box>
  )
}

export default Greeting