import React from 'react'
import { Box, Typography, Button } from '@mui/material'
import { useDispatch } from 'react-redux'
import { addToCart, removeFromCart } from '../../../../redux/cartSlice'

const ItemQuantity = ({ product }) => {
  const dispatch = useDispatch()

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
            xs: '55px',
          },
          marginLeft: {
            xs: '15px'
          }
        }}
      >
        <Typography
          sx={{
            fontSize: {
              lg: '12px',
              md: '10px',
              xs: '10px',
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
            lg: 'flex',
            md: 'flex',
            xs: 'flex',
          },
          flexDirection: {
            lg: 'column',
            md: 'column',
            xs: 'row',
          },
          marginLeft: {
            xs: '10px'
          }
        }}
      >
        <Button
          onClick={() => dispatch(addToCart(product))}
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
              lg: '25px',
              md: '25px',
              xs: '15px',
            }
          }}
        >
          <Typography
            textAlign='center'
            sx={{
              fontSize: {
                lg: '15px',
                md: '15px',
                xs: '',
              }
            }}
          >
            {product.quantity}
          </Typography>
        </Box>
        <Button
          onClick={() => dispatch(removeFromCart(product.id))}
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