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
            <Box>
              <NewestProduct />
            </Box>
            <Box
              sx={{
                marginLeft: {
                  lg: '',
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
  )
}

export default Home