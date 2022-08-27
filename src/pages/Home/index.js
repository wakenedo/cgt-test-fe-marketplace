import React, { useState } from 'react'
import { Box, Stack } from '@mui/material'


//Inner Components
import Welcome from './Welcome'
import NewestProduct from './NewestProduct'
import UserInterest from './UserInterest'
import IntroImage from './IntroImage'

import { api } from '../../api'

const Home = () => {
  const [newest, setNewest] = useState()
  const fetchNewestProduct = async () => {
    await api.get().then((response) => {
      const products = response.data[0].title
      setNewest(products)
      console.log(newest)

    })

  }


  console.log(newest)
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
                <NewestProduct newest={newest} />
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
                <UserInterest />
              </Box>
            </Stack>
          </Box>
        </Box>
      </Box>
    </Box>
  )
}

export default Home