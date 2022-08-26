import React from 'react'
import { Box, Stack } from '@mui/material'


//Inner Components
import Welcome from './Welcome'
import NewestProduct from './NewestProduct'
import UserInterest from './UserInterest'
import IntroImage from './IntroImage'


const Home = () => {
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
                    lg: '75px',
                    md: '12.5px'

                  }
                }}
              >
                <NewestProduct />
              </Box>
              <Box
                sx={{
                  marginLeft: {
                    lg: '50px',
                    md: '22px',
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