import React, { useContext } from 'react'
import { Box, Typography } from '@mui/material'
import { DarkModeContext } from '../../../context'



const ProductName = ({ products, id }) => {
  const { darkMode } = useContext(DarkModeContext)
  return (
    <Box
      sx={{
        margin: {
          lg: '10px',
          md: '10px',
          xs: '5px',
        },
        padding: {
          lg: '10px',
          md: '10px',
          xs: '5px',
        }
      }}
    >
      <Typography
        fontWeight='bold'
        color='#4B4B4B'
        sx={{
          color: darkMode ? '#E4E4E4' : '#4B4B4B',
          fontSize: {
            lg: '55px',
            md: '45px',
            xs: '25px',
          }
        }}
      >
        {products[id]?.title}
      </Typography>
    </Box>
  )

}

export default ProductName