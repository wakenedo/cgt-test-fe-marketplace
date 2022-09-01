import React, { useContext, useState } from 'react'
import { Box } from '@mui/material'

import AddToCartButton from './AddToCartButton/index.js'
import ProductPrice from './ProductPrice/index.js'
import ProductDescription from './ProductDescription/index.js'
import LessDetail from './LessDetail/index.js'
import MoreDetail from './MoreDetail/index.js'
import { DarkModeContext } from '../../../context/index.js'


const ProductInfo = ({ products, id }) => {
  const { darkMode } = useContext(DarkModeContext)
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
        sx={{
          backgroundColor: darkMode ? '#E4E4E4' : '#1CFBD3',
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
        <LessDetail toggleIsClosing={toggleIsClosing} products={products} id={id} />

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
        sx={{
          backgroundColor: darkMode ? '#E4E4E4' : '#1CFBD3',
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
        <MoreDetail toggleIsOpen={toggleIsOpen} products={products} id={id} />

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