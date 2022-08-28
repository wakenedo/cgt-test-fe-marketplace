import React, { useState } from 'react'
import { Box, Typography, Stack } from '@mui/material'

const Header = () => {
  const [isActive, setIsActive] = useState(false)

  const toggleActive = (e) => {
    setIsActive(e.target.innerHTML)
  }

  return (
    <Box
      sx={{
        margin: {
          lg: '',
          md: '20px 20px 10px',
          xs: '',
        }
      }}
    >
      <Stack
        direction='row'
        spacing='24px'
      >
        <Box
          padding='10px'
          sx={{
            cursor: 'pointer',
            borderBottom: {
              lg: '',
              md: isActive === 'Description' ? '1px solid #4B4B4B' : null,
              xs: '',
            }
          }}
          onClick={toggleActive}

        >
          <Typography>
            Description
          </Typography>
        </Box>
        <Box
          padding='10px'
          sx={{
            cursor: 'pointer',
            borderBottom: {
              lg: '',
              md: isActive === 'Comments' ? '1px solid #4B4B4B' : null,
              xs: '',
            }
          }}
          onClick={toggleActive}
        >
          <Typography>
            Comments
          </Typography>
        </Box>
        <Box
          padding='10px'
          sx={{
            cursor: 'pointer',
            borderBottom: {
              lg: '',
              md: isActive === 'Reviews' ? '1px solid #4B4B4B' : null,
              xs: '',
            }
          }}
          onClick={toggleActive}
        >
          <Typography>
            Reviews
          </Typography>
        </Box>

      </Stack>
    </Box>
  )
}

export default Header