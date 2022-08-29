import React from 'react'
import { Box, Typography } from '@mui/material'
import arrowDown from '../../../../assets/Products/ProductInfo/down-arrow-svgrepo-com(square).png'

const LessDetail = ({ toggleIsClosing, products, id }) => {
  return (
    <Box>
      <Box
        sx={{
          borderBottom: '1px solid #4B4B4B',
          margin: {
            lg: '5px',
            md: '',
            xs: '',
          },
          padding: {
            lg: '5px',
            md: '',
            xs: '',
          },
        }}
      >
        <Box
          onClick={() => toggleIsClosing()}
          sx={{
            width: {
              lg: '100%',
              md: '100%',
              xs: '100%',
            }
          }}
        >

          <Box
            sx={{
              marginLeft: {
                lg: '42.5%',
                md: '45.5%',
                xs: '39%',
              }
            }}
          >
            <Box
              sx={{
                marginLeft: {
                  lg: '22px',
                  md: '25px',
                  xs: '21px',
                }
              }}
            >
              <img src={arrowDown} alt='arrow-down'
                style={{
                  width: '25px',
                }}
              />
            </Box>
            <Typography
              sx={{
                color: '#4B4B4B',
                fontSize: {
                  lg: '12px',
                  md: '',
                  xs: '12px',
                }
              }}
            >
              Less Details
            </Typography>
          </Box>

        </Box>
      </Box>
      <Box
        sx={{
          width: {
            lg: '100%',
            md: '100%',
            xs: '100%',
          }
        }}
      >
        <Typography
          sx={{
            textAlign: 'center',
            color: '#4B4B4B',
            fontSize: {
              lg: '22px',
              md: '20px',
              xs: '18px',
            }
          }}
        >
          {products[id]?.title}
        </Typography>

      </Box>
    </Box>
  )
}

export default LessDetail