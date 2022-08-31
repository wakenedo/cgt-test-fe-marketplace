import React from 'react'
import { Box, Button, Typography } from '@mui/material'
import { useSelector } from 'react-redux'

const CheckOutNow = ({ cart }) => {
  const { totalCartPrice } = useSelector((state) => state)
  console.log('CheckOutNow Log', cart, totalCartPrice)

  if (cart.length === 0) {
    return (
      <Box
        padding='20px'
      >
        <Box
          display='flex'
          alignItems='center'
        >
        </Box>
        <Typography>
          Check out some awesome products !
        </Typography>
      </Box>
    )
  } else {
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
                md: '22px',
                xs: '',
              }
            }}
          >
            {totalCartPrice},00 USD
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
}

export default CheckOutNow