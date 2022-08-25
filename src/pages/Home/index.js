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
        <Welcome />
        <Stack
          direction='row'
        >
          <Box>
            <NewestProduct />
          </Box>
          <Box>
            <UserInterest />
          </Box>
        </Stack>
      </Box>
    </Box>
  )
}

export default Home