import React, { useEffect, useState } from 'react'
import { Box, Stack } from '@mui/material'
import { useParams } from 'react-router-dom'
import { api } from '../../api'

//InnerComponents
import ProductName from './ProductName'
import ProductImage from './ProductImage'
import ProductInfo from './ProductInfo'
import ProductText from './ProductText'

const Product = () => {
  const { id } = useParams()
  const [products, setProducts] = useState([])

  useEffect(() => {
    api.get().then((response) => {
      const productsData = response.data
      setProducts(productsData)
    })
  }, [])

  console.log(id, products)
  return (
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
        <ProductName products={products} id={id} />
      </Box>
      <Box>
        <Stack
          direction='column'
        >
          <ProductImage products={products} id={id} />
          <ProductText products={products} id={id} />
          <ProductInfo products={products} id={id} />
        </Stack>

      </Box>
    </Box>
  )
}

export default Product