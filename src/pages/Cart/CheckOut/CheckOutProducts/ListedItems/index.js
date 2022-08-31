import React from 'react'
import { Box, Typography } from '@mui/material'

const ListedItems = ({ product, getTotal }) => {
  return (
    <Box
      product={product}
      width='100%'
      display='flex'
      justifyContent='space-between'
    >
      <Box
        backgroundColor='#1CFBD3'
        sx={{
          width: {
            lg: '',
            md: '45%',
            xs: '',
          },
          padding: {
            lg: '',
            md: '5px',
            xs: '',
          }
        }}
      >
        <Typography
          fontWeight='bold'
          sx={{
            fontSize: {
              lg: '',
              md: '13px',
              xs: '',
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
              lg: '',
              md: '45px',
              xs: '',
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
                xs: '',
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
                  xs: '',
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
              xs: '',
            },
            marginRight: {
              lg: '',
              md: '5px',
              xs: '',
            }
          }}
        >
          <Typography
            color='#4B4B4B'
            sx={{
              fontSize: {
                lg: '',
                md: '8px',
                xs: '',
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
              lg: '',
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