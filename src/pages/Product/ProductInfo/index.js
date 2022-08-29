import React, { useState } from 'react'
import { Box, Typography } from '@mui/material'

import AddToCartButton from './AddToCartButton/index.js'
import ProductPrice from './ProductPrice/index.js'
import ProductDescription from './ProductDescription/index.js'

import arrowUp from '../../../assets/Products/ProductInfo/up-arrow-svgrepo-com(square).png'
import arrowDown from '../../../assets/Products/ProductInfo/down-arrow-svgrepo-com(square).png'

const ProductInfo = ({ products, id }) => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleIsOpen = () => {
    setIsOpen(true)
  }
  const toggleIsClosing = () => {
    setIsOpen(false)
  }

  if (isOpen === true) {
    return (
      <Box
        backgroundColor='#1CFBD3'
        sx={{
          width: {
            lg: '500px'
          },
          marginLeft: {
            lg: '73.25%'
          },
          bottom: {
            lg: '0',
            md: '0',
            xs: '0',
          },
          position: {
            lg: 'fixed',
            md: 'sticky',
            xs: 'sticky',
          }
        }}
      >
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
              marginLeft: {
                lg: '215px',
                md: '395px',
                xs: '150px',
              }
            }}
          >
            <Box
              sx={{
                marginLeft: {
                  lg: '22px',
                  md: '27px',
                  xs: '21px',
                }
              }}
            >
              <img src={arrowDown} alt='arrow-up'
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
        <Box
          sx={{
            marginLeft: {
              lg: '135px',
              md: '330px',
              xs: '80px',
            }
          }}
        >
          <Typography
            sx={{
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
        <ProductDescription products={products} id={id} />

        <Box
          display='flex'
          alignItems='center'
          justifyContent='space-between'
          margin='0 auto'
          sx={{
            width: {
              lg: '350px',
              md: '80%',
              xs: '80%',
            }
          }}
        >
          <ProductPrice products={products} id={id} />
          <AddToCartButton products={products} id={id} />
        </Box>

      </Box>
    )
  } else {
    return (
      <Box
        backgroundColor='#1CFBD3'
        sx={{
          width: {
            lg: '500px'
          },
          marginLeft: {
            lg: '73.25%'
          },
          bottom: {
            lg: '0',
            md: '0',
            xs: '0',
          },
          position: {
            lg: 'fixed',
            md: 'sticky',
            xs: 'sticky',
          }
        }}
      >
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
            onClick={() => toggleIsOpen()}
            sx={{
              marginLeft: {
                lg: '215px',
                md: '395px',
                xs: '150px',
              }
            }}
          >
            <Box
              sx={{
                marginLeft: {
                  lg: '22px',
                  md: '27px',
                  xs: '21px',
                }
              }}
            >
              <img src={arrowUp} alt='arrow-up'
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
              More Details
            </Typography>
          </Box>
        </Box>
        <Box
          sx={{
            marginLeft: {
              lg: '135px',
              md: '330px',
              xs: '80px',
            }
          }}
        >
          <Typography
            sx={{
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
        <Box
          display='flex'
          alignItems='center'
          justifyContent='space-between'
          margin='0 auto'
          sx={{
            width: {
              lg: '350px',
              md: '80%',
              xs: '80%',
            }
          }}
        >
          <ProductPrice products={products} id={id} />
          <AddToCartButton products={products} id={id} />
        </Box>

      </Box>

    )
  }
}

export default ProductInfo