import React from 'react'
import { Box, Typography } from '@mui/material'
import { useDispatch } from 'react-redux'
import { removeAllItems } from '../../../../redux/cartSlice'
import removeItems from '../../../../assets/Cart/CartItem/RemoveItems.png'
import { toast } from 'react-toastify'

const RemoveItems = ({ product }) => {
  const dispatch = useDispatch()

  const handleClick = () => {
    dispatch(removeAllItems(product))
    toast.success('Removed Successfully!')
  }

  return (
    <Box
      onClick={handleClick}
      display='flex'
      alignItems='center'
      position='absolute'
      right='0'
      sx={{
        cursor: 'pointer',
        marginRight: {
          lg: '',
          md: '45px',
          xs: '38px',
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
            xs: '5px',
          }
        }}
      >
        <Typography
          color='#E53535'
          sx={{
            fontSize: {
              lg: '12px',
              md: '10px',
              xs: '10px',
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