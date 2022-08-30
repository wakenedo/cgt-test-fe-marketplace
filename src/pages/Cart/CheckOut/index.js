import React from 'react'
import { Box, Button, Typography } from '@mui/material'

const CheckOut = () => {
  return (
    <Box
      backgroundColor='#1CFBD3'
    >
      <Box>
        <Box
          display='flex'
          alignItems='center'
        >
          <Box
            sx={{
              marginTop: {
                lg: '',
                md: '6px',
                xs: '',
              }
            }}
          >
            <Typography
              color='#4B4B4B'
              sx={{
                fontSize: {
                  lg: '',
                  md: '12px',
                  xs: '',
                }
              }}
            >
              TOTAL :
            </Typography>
          </Box>
          <Typography
            fontWeight='bold'
            color='#4B4B4B'
            sx={{
              fontSize: {
                lg: '',
                md: '20px',
                xs: '',
              }
            }}
          >
            120,00 USD
          </Typography>
        </Box>
        <Button
          variant='contained'
        >
          Check Out Now
        </Button>
      </Box>
    </Box>
  )
}

export default CheckOut