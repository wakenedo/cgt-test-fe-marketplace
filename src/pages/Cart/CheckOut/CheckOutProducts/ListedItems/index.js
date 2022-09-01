import React, { useContext } from 'react'
import { Box, Typography } from '@mui/material'
import { DarkModeContext } from '../../../../../context'

const ListedItems = ({ product, getTotal }) => {
  const { darkMode } = useContext(DarkModeContext)
  return (
    <Box
      product={product}
      width='100%'
      display='flex'
      justifyContent='space-between'
    >
      <Box
        sx={{
          backgroundColor: darkMode ? '#E4E4E4' : '#1CFBD3',
          width: {
            lg: '45%',
            md: '45%',
            xs: '45%',
          },
          padding: {
            lg: '8px',
            md: '5px',
            xs: '2px',
          }
        }}
      >
        <Typography
          fontWeight='bold'
          sx={{
            fontSize: {
              lg: '15px',
              md: '13px',
              xs: '12px',
            }
          }}
        >
          {product?.product.title}
        </Typography>
      </Box>
      <Box
        display='flex'
        alignItems='center'
      >
        <Box
          sx={{
            width: {
              lg: '55px',
              md: '45px',
              xs: '35px',
            }
          }}
        >
          <Box
            sx={{
              marginTop: {
                lg: '',
                md: '5px',
                xs: '',
              },
              marginRight: {
                lg: '',
                md: '40px',
                xs: '80px',
              }
            }}
          >
            <Typography
              fontWeight='bold'
              color='#4B4B4B'
              textAlign='center'
              sx={{
                fontSize: {
                  lg: '',
                  md: '12px',
                  xs: '10px',
                }
              }}
            >
              x{product.quantity}
            </Typography>
          </Box>
        </Box>
        <Box
          sx={{
            marginTop: {
              lg: '',
              md: '5px',
              xs: '5px',
            },
            marginRight: {
              lg: '',
              md: '5px',
              xs: '5px',
            }
          }}
        >
          <Typography
            color='#4B4B4B'
            sx={{
              fontSize: {
                lg: '10px',
                md: '8px',
                xs: '9px',
              }
            }}
          >
            TOTAL:
          </Typography>
        </Box>
        <Typography
          fontWeight='bold'
          color='#4B4B4B'
          sx={{
            fontSize: {
              lg: '15px',
              md: '12px',
              xs: '',
            }
          }}
        >
          {getTotal()},00 USD
        </Typography>
      </Box>

    </Box>
  )
}

export default ListedItems