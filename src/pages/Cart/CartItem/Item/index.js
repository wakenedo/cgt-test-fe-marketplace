import React, { useContext } from 'react'
import { Box, Typography } from '@mui/material'

import magGlass from '../../../../assets/Cart/CartItem/MagGlass.png'
import { DarkModeContext } from '../../../../context'

const Item = ({ product }) => {
  const { darkMode } = useContext(DarkModeContext)
  return (
    <Box
      sx={{
        padding: {
          lg: '20px',
          md: '20px',
          xs: '10px',
        },
        marginBottom: {
          xs: '10px',
        },
        marginTop: {
          xs: '10px'
        }

      }}
    >
      <Box
        sx={{
          marginBottom: {
            lg: '',
            md: '10px',
            xs: '5px',
          },
          maxWidth: {
            lg: '400px',
            md: '300px',
            xs: '400px'
          },
          width: {
            lg: '250px',
            md: '250px',
            xs: '250px',
          }
        }}
      >
        <Typography

          borderRadius='3px'
          color='#4B4B4B'
          fontWeight='bold'
          sx={{
            backgroundColor: darkMode ? '#E4E4E4' : '#1CFBD3',
            fontSize: {
              lg: '22px',
              md: '18px',
              xs: '16px',
            },
            padding: {
              lg: '',
              md: '10px',
              xs: '5px',
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
              xs: '5px',
            },
            marginTop: {
              lg: '',
              md: '2px',
              xs: '1px',
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