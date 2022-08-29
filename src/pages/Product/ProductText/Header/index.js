import React from 'react'
import { Box, Typography, Stack } from '@mui/material'

const Header = ({ isActive, toggleActive }) => {


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
          padding='15px'
          sx={{
            cursor: 'pointer',
            borderBottom: {
              lg: '',
              md: isActive === 'Description' ? '2px solid #4B4B4B' : null,
              xs: '',
            },
            backgroundColor: {
              lg: '',
              md: isActive === 'Description' ? '#e0e0e0' : null,
              xs: '',
            },
            color: {
              lg: '',
              md: isActive === 'Description' ? '#4B4B4B' : '#c9c9c9',
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
          padding='15px'
          sx={{
            cursor: 'pointer',
            borderBottom: {
              lg: '',
              md: isActive === 'Comments' ? '2px solid #4B4B4B' : null,
              xs: '',
            },
            backgroundColor: {
              lg: '',
              md: isActive === 'Comments' ? '#e0e0e0' : null,
              xs: '',
            },
            color: {
              lg: '',
              md: isActive === 'Comments' ? '#4B4B4B' : '#c9c9c9',
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
          padding='15px'
          sx={{
            cursor: 'pointer',
            borderBottom: {
              lg: '',
              md: isActive === 'Reviews' ? '2px solid #4B4B4B' : null,
              xs: '',
            },
            backgroundColor: {
              lg: '',
              md: isActive === 'Reviews' ? '#e0e0e0' : null,
              xs: '',
            },
            color: {
              lg: '',
              md: isActive === 'Reviews' ? '#4B4B4B' : '#c9c9c9',
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