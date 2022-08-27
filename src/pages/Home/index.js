import React, { useEffect, useState } from 'react'
import { Box, Stack } from '@mui/material'


//Inner Components
import Welcome from './Welcome'
import NewestProduct from './NewestProduct'
import UserInterest from './UserInterest'
import IntroImage from './IntroImage'

import { api } from '../../api'

const Home = () => {
  const [newestProduct, setNewestProduct] = useState()
  const [userInterest, setUserInterest] = useState()

  useEffect(() => {
    api.get().then((response) => {
      const dataNewest = response.data[0]
      setNewestProduct(dataNewest)
      console.log(dataNewest)
    })
  }, [])
  useEffect(() => {
    api.get().then((response) => {
      const dataUserInterest = response.data[1]
      setUserInterest(dataUserInterest)
      console.log(dataUserInterest)
    })
  }, [])


  return (
    <Box>
      <Box>
        <IntroImage />
        <Box
          sx={{
            position: {
              lg: 'sticky'
            },
            bottom: {
              lg: '0px'
            },
            backgroundColor: {
              lg: '#e890fa'
            }
          }}
        >
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
          </Box>
        </Box>
      </Box>
    </Box>
  )
}

export default Home