import React from 'react'
import { Box, Stack, Typography } from '@mui/material'

const UserInterest = () => {
  return (
    <Box>
      <Stack>
        <Typography>
          Your probably interested in
          <a href="/products/a">
            <Typography>
              A
            </Typography>
          </a>!
        </Typography>
        <Box>
          <img />

        </Box>
        <Box>
          <Typography>

          </Typography>
        </Box>
      </Stack>
    </Box>
  )
}

export default UserInterest