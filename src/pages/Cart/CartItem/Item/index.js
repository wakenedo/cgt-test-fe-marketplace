import React from 'react'
import { Box, Typography } from '@mui/material'

import magGlass from '../../../../assets/Cart/CartItem/MagGlass.png'

const Item = ({ product }) => {
  return (
    <Box
      sx={{
        padding: {
          lg: '',
          md: '20px',
          xs: '',
        }
      }}
    >
      <Box
        sx={{
          marginBottom: {
            lg: '',
            md: '10px',
            xs: '',
          },
          maxWidth: {
            lg: '',
            md: '300px',
            xs: ''
          }
        }}
      >
        <Typography

          borderRadius='3px'
          backgroundColor='#1CFBD3'
          color='#4B4B4B'
          fontWeight='bold'
          sx={{
            fontSize: {
              lg: '',
              md: '18px',
              xs: '',
            },
            padding: {
              lg: '',
              md: '10px',
              xs: '',
            }
          }}
        >
          {product.product.title.toUpperCase()}
        </Typography>
      </Box>
      <img src={product.product.image} alt=''
        style={{
          width: '250px',
          maxHeight: '150px'
        }}
      />

      <Box
        display='flex'
        justifyContent='end'
      >

        <Typography
          fontWeight='bold'
          color='#4B4B4B'
          sx={{
            textAlign: 'right',
            fontSize: {
              lg: '',
              md: '',
              xs: '',
            },
          }}
        >
          MORE INFO
        </Typography>
        <Box
          sx={{
            marginLeft: {
              lg: '',
              md: '5px',
              xs: '',
            },
            marginTop: {
              lg: '',
              md: '2px',
              xs: '',
            }
          }}
        >
          <a
            href={`/Product/${product.id}`}
            style={{
              textDecoration: 'none'
            }}
          >
            <img src={magGlass} alt='magnifying-glass'
              style={{
                width: '12px'
              }}
            />
          </a>
        </Box>
      </Box>


    </Box>
  )
}

export default Item