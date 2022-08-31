import React from 'react'
import { Box, Typography } from '@mui/material'

const Greeting = ({ cart }) => {
  console.log('Greeting log', cart)

  const getTotalQuantity = () => {
    let total = 0
    cart.forEach(item => {
      total += item.quantity
    })
    return total
  }
  if (getTotalQuantity() === 0) {
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
              We've noticed you have no products in your cart.
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
              Are you ready to browse some?
            </Typography>
          </Box>
        </Box>
      </Box>
    )
  }
  if (getTotalQuantity() === 1) {
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
              We've noticed you have {getTotalQuantity()} product in your cart.
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
              Are you ready to purchase?
            </Typography>
          </Box>
        </Box>
      </Box>
    )
  }
  else {
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
              We've noticed you have {getTotalQuantity() || 0} products in your cart.
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
}

export default Greeting