import React from 'react'
import { Box, Button, Typography } from '@mui/material'

const CheckOutNow = () => {
  return (
    <Box
      padding='20px'
    >
      <Box
        display='flex'
        alignItems='center'
      >
        <Box
          sx={{
            marginTop: {
              lg: '',
              md: '8px',
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
            TOTAL:
          </Typography>
        </Box>
        <Typography
          fontWeight='bold'
          color='#4B4B4B'
          sx={{
            fontSize: {
              lg: '',
              md: '23px',
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
        Check Out Now !
      </Button>
    </Box>
  )
}

export default CheckOutNow