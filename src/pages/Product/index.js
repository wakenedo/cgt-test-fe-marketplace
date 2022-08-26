import React from 'react'
import { Box, Typography, Stack, Button } from '@mui/material'

//Constants
import products from '../../constants/products'
//Assets
import buyCart from '../../assets/Products/Cart.png'

const Product = () => {
  return (
    <Box>
      <Box>
        <Box
          sx={{
            marginBottom: {
              lg: '',
              md: '25px',
              xs: '',
            }
          }}
        >
          <Typography
            fontWeight='bold'
            sx={{
              fontSize: {
                lg: '55px',
                md: '45px',
                xs: '25px',
              }
            }}
          >
            {products[1].name}
          </Typography>
        </Box>
        <Box>
          <Stack
            direction='column'
          >
            <Box>
              <img
                src={products[1].image}
                alt='product'
                width='100%'

              />
            </Box>

            <Box
              backgroundColor='#1CFBD3'
              sx={{
                bottom: {
                  lg: '',
                  md: '0',
                  xs: '0',
                },
                position: {
                  lg: '',
                  md: 'sticky',
                  xs: 'sticky',
                }
              }}
            >
              <Box
                margin='15px'
                padding='15px'
                backgroundColor='#fdfdfd'
              >
                <Typography
                  sx={{
                    fontSize: {
                      lg: '',
                      md: '',
                      xs: '11px',
                    }
                  }}

                >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean sit amet nunc suscipit, finibus enim egestas, tempus turpis. Donec malesuada nec urna vitae fermentum. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nullam at nisl dignissim, venenatis enim eu, dignissim nunc. In hac habitasse platea dictumst. Sed maximus ornare ante, a egestas urna faucibus quis. Aliquam erat volutpat. Duis ut massa justo. Aliquam ac sapien blandit, commodo sem at, vestibulum ante. Suspendisse bibendum, eros ac pellentesque fermentum, nisl arcu malesuada lorem, id fringilla odio lacus imperdiet tellus. Cras ultrices quam justo, at commodo libero rutrum ut. Vivamus a ante sed velit pharetra porttitor et eget enim. Praesent porttitor, mi non varius dapibus, nibh magna sagittis mauris, condimentum elementum est ex et mi. Mauris sit amet ligula risus. Sed eget sapien sed tellus porttitor suscipit rhoncus ut nulla.
                </Typography>
              </Box>

              <Box
                display='flex'
                alignItems='center'
                justifyContent='space-between'
                width='80%'
                margin='0 auto'
              >
                <Typography
                  display='flex'
                  alignItems='center'
                  fontWeight='bold'
                  sx={{
                    fontSize: {
                      lg: '',
                      md: '45px',
                      xs: '30px',
                    },
                    marginTop: {
                      lg: '',
                      md: '15px',
                      xs: '5px',
                    },
                  }}
                >
                  {products[1].price},00
                  <Typography
                    fontWeight='bold'
                    sx={{
                      marginTop: {
                        lg: '',
                        md: '15px',
                        xs: '10px',
                      },
                      marginLeft: {
                        lg: '',
                        md: '5px',
                        xs: '5px',
                      }
                    }}
                  >
                    USD
                  </Typography>
                </Typography>
                <Button
                  variant='contained'
                  onClick={() => console.warn('Not implemented!')}
                  sx={{
                    fontSize: {
                      lg: '',
                      md: '18px',
                      xs: '14px',
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
                        md: '10px',
                        xs: '',
                      }
                    }}
                  >
                    <img
                      src={buyCart}
                      alt='cart'
                      width='25px'
                    />
                  </Box>
                  Add to Cart
                </Button>
              </Box>

            </Box>

          </Stack>

        </Box>

      </Box>
    </Box>
  )
}

export default Product