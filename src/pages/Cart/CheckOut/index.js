import React, { useContext } from 'react'
import { Box } from '@mui/material'
import CheckOutNow from './CheckOutNow'
import CheckOutProducts from './CheckOutProducts'
import { DarkModeContext } from '../../../context'

const CheckOut = ({ cart }) => {
  const { darkMode } = useContext(DarkModeContext)
  return (
    <Box
      justifyContent='center'
      sx={{
        backgroundColor: darkMode ? '#E4E4E4' : '#1CFBD3',
        display: {
          lg: 'flex',
          md: 'flex',
          xs: 'flex',
        },
        flexDirection: {
          lg: 'row',
          md: 'row',
          xs: 'column',
        },
        position: {
          lg: 'sticky',
          md: 'sticky',
          xs: 'sticky',
        },
        bottom: {
          lg: '0',
          md: '0',
          xs: '0',
        },

      }}
    >

      <CheckOutProducts />
      <CheckOutNow cart={cart} />
    </Box>
  )
}

export default CheckOut