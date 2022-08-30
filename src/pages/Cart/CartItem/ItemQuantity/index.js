import React from 'react'
import { Box, Typography, Button } from '@mui/material'

const ItemQuantity = ({ product }) => {
  return (
    <Box
      display='flex'
      alignItems='center'
    >
      <Box
        sx={{
          marginRight: {
            lg: '',
            md: '10px',
            xs: '',
          }
        }}
      >
        <Typography
          sx={{
            fontSize: {
              lg: '',
              md: '10px',
              xs: '',
            }
          }}
        >
          QUANTITY :
        </Typography>
      </Box>
      <Box

        alignItems='center'
        sx={{
          display: {
            lg: '',
            md: 'flex',
            xs: '',
          },
          flexDirection: {
            lg: '',
            md: 'column',
            xs: '',
          }
        }}
      >
        <Button
          variant='contained'
          sx={{
            backgroundColor: '#1CFBD3',
            color: '#4B4B4B',
            minWidth: {
              lg: '',
              md: '30px',
              xs: '',
            }
          }}
        >
          +
        </Button>
        <Box
          margin='15px'
          sx={{
            width: {
              lg: '',
              md: '25px',
              xs: '',
            }
          }}
        >
          <Typography
            textAlign='center'
            sx={{
              fontSize: {
                lg: '',
                md: '15px',
                xs: '',
              }
            }}
          >
            {product.quantity}
          </Typography>
        </Box>
        <Button
          variant='contained'
          sx={{
            backgroundColor: '#1CFBD3',
            color: '#4B4B4B',
            minWidth: {
              lg: '',
              md: '30px',
              xs: '',
            },
          }}
        >
          -
        </Button>
      </Box>
    </Box>
  )
}

export default ItemQuantity