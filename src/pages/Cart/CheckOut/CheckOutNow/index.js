import React from 'react'
import { Box, Button, Typography } from '@mui/material'
import { useSelector } from 'react-redux'

const CheckOutNow = ({ cart }) => {
  const { totalCartPrice } = useSelector((state) => state)

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
          Check out some awesome products in the Shop!
        </Typography>
      </Box>
    )
  } else {
    return (
      <Box
        sx={{
          padding: {
            lg: '20px',
            md: '20px',
            xs: '10px',
          },
          display: {
            xs: 'flex'
          }
        }}
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
              },
              marginRight: {
                xs: '5px'
              }
            }}
          >
            <Typography
              color='#4B4B4B'
              sx={{
                fontSize: {
                  lg: '14px',
                  md: '12px',
                  xs: '10px',
                }
              }}
            >
              TOTAL:
            </Typography>
          </Box>
          <Box
            sx={{
              width: {
                xs: '155px'
              }
            }}
          >
            <Typography
              fontWeight='bold'
              color='#4B4B4B'
              sx={{
                fontSize: {
                  lg: '23.5px',
                  md: '22px',
                  xs: '18px',
                }
              }}
            >
              {totalCartPrice},00 USD
            </Typography>

          </Box>
        </Box>
        <Box
          sx={{
            marginLeft: {
              xs: '38.5px'
            }
          }}
        >
          <Button
            variant='contained'
            sx={{
              fontSize: {
                xs: '12px',
              }
            }}
          >
            Check Out Now !
          </Button>
        </Box>
      </Box>
    )
  }
}

export default CheckOutNow