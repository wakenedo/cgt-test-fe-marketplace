import React, { useEffect, useState } from 'react'
import { Box, Stack } from '@mui/material'


//Inner Components
import Welcome from './Welcome'
import NewestProduct from './NewestProduct'
import UserInterest from './UserInterest'
import IntroImage from './IntroImage'


import { fetchProducts } from '../../api/products'
import BrowseOurShop from './BrowseOurShop'

const Home = () => {
  const [newestProduct, setNewestProduct] = useState()
  const [userInterest, setUserInterest] = useState()

  const getProducts = async () => {
    const data = await fetchProducts()
    setNewestProduct(data[0])
    setUserInterest(data[1])
  }

  useEffect(() => {
    getProducts()
  }
    , [])


  return (
    <Box>
      <Box>
        <IntroImage />

        <Box>
          <Box
            marginTop='25px'
            marginBottom='45px'
          >
            <Welcome />
          </Box>
          <Box>
            <Stack
              sx={{
                flexDirection: {
                  lg: '',
                  md: 'row',
                  xs: 'column'
                }
              }}
              direction='row'
            >
              <Box
                sx={{
                  marginLeft: {
                    lg: '170px',
                    md: '9px'

                  }
                }}
              >
                <NewestProduct newestProduct={newestProduct} />
              </Box>
              <Box
                sx={{
                  marginLeft: {
                    lg: '50px',
                    md: '10px',
                    xs: '',
                  }
                }}
                marginLeft='22px'
              >
                <UserInterest userInterest={userInterest} />
              </Box>
            </Stack>
            <BrowseOurShop />
          </Box>
        </Box>
      </Box>
    </Box>
  )
}

export default Home