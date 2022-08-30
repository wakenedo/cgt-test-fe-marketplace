import React from 'react'
import { Box, Typography } from '@mui/material'

const Greeting = () => {
  return (
    <Box
      backgroundColor='#1CFBD3'
      borderBottom='1px solid #4B4B4B'
      sx={{
        marginBottom: {
          lg: '',
          md: '15px',
          xs: '',
        }
      }}
    >
      <Box
        sx={{
          margin: {
            lg: '',
            md: '10px',
            xs: '',
          },
          padding: {
            lg: '',
            md: '10px',
            xs: '',
          },
        }}
        margin='10px'
        padding='10px'
      >
        <Box>
          <Typography
            color='#4B4B4B'
            sx={{
              fontSize: {
                lg: '',
                md: '18px',
                xs: '',
              }
            }}
          >
            Hello, user
          </Typography>
        </Box>
        <Box>
          <Typography
            color='#4B4B4B'
            sx={{
              fontSize: {
                lg: '',
                md: '16px',
                xs: '',
              }
            }}
          >
            We've noticed you have 6 products in your cart.
          </Typography>
        </Box>
        <Box>
          <Typography
            color='#4B4B4B'
            sx={{
              fontSize: {
                lg: '',
                md: '16px',
                xs: '',
              }
            }}
          >
            Are you ready to purchase these?
          </Typography>
        </Box>
      </Box>
    </Box>
  )
}

export default Greeting