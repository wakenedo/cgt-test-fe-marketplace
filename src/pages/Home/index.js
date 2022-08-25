import React from 'react'
import { Box, Typography } from '@mui/material'

const Home = () => {
  return (
    <Box>


      <div>

        <Typography
          fontWeight='bold'
          sx={{
            fontSize: {
              lg: '',
              md: '65px',
              xs: ''
            }
          }}
        >
          WELCOME TO OUR SHOP !
        </Typography>

        <p>
          You are probably interested in <a href="/products/a">A</a>.
        </p>

        <p>
          Check out the newest product <a href="/products/b">B</a>!
        </p>
      </div>

    </Box>
  )
}

export default Home