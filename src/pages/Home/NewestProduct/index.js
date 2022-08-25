import React from 'react'
import { Box, Stack, Typography } from '@mui/material'

const NewestProduct = () => {
  return (
    <Box>
      <Stack>
        <Typography>
          Check out the newest product
          <a href="/products/b">
            <Typography>
              B
            </Typography>
          </a>!
        </Typography>
        <Box>
          <img
            src=''
            alt=''
            style={{

            }}

          />

        </Box>
        <Box>
          <Typography>

          </Typography>
        </Box>
      </Stack>
    </Box>
  )
}

export default NewestProduct