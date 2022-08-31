import React from 'react'
import { Box, Typography } from '@mui/material'
import { useDispatch } from 'react-redux'
import { removeAllItems } from '../../../../redux/cartSlice'
import removeItems from '../../../../assets/Cart/CartItem/RemoveItems.png'

const RemoveItems = ({ product }) => {
  const dispatch = useDispatch()
  return (
    <Box
      onClick={() => dispatch(removeAllItems(product))}
      display='flex'
      alignItems='center'
      position='absolute'
      right='0'
      sx={{
        cursor: 'pointer',
        marginRight: {
          lg: '',
          md: '45px',
          xs: '',
        },
        marginBottom: {
          lg: '',
          md: '240px',
          xs: '',
        }
      }}
    >
      <Box
        sx={{
          marginRight: {
            lg: '',
            md: '5px',
            xs: '',
          }
        }}
      >
        <Typography
          color='#E53535'
          sx={{
            fontSize: {
              lg: '',
              md: '10px',
              xs: '',
            }
          }}
        >
          REMOVE FROM CART
        </Typography>
      </Box>
      <img src={removeItems} alt='remove-items'
        style={{
          width: '7px',
          height: '7px'
        }}
      />
    </Box>
  )
}

export default RemoveItems