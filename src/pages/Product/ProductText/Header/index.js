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
              lg: isActive === 'Description' ? '2px solid #4B4B4B' : null,
              md: isActive === 'Description' ? '2px solid #4B4B4B' : null,
              xs: isActive === 'Description' ? '2px solid #4B4B4B' : null,
            },
            backgroundColor: {
              lg: isActive === 'Description' ? '#e0e0e0' : null,
              md: isActive === 'Description' ? '#e0e0e0' : null,
              xs: isActive === 'Description' ? '#e0e0e0' : null,
            },
            color: {
              lg: isActive === 'Description' ? '#4B4B4B' : '#c9c9c9',
              md: isActive === 'Description' ? '#4B4B4B' : '#c9c9c9',
              xs: isActive === 'Description' ? '#4B4B4B' : '#c9c9c9',
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
              lg: isActive === 'Comments' ? '2px solid #4B4B4B' : null,
              md: isActive === 'Comments' ? '2px solid #4B4B4B' : null,
              xs: isActive === 'Comments' ? '2px solid #4B4B4B' : null,
            },
            backgroundColor: {
              lg: isActive === 'Comments' ? '#e0e0e0' : null,
              md: isActive === 'Comments' ? '#e0e0e0' : null,
              xs: isActive === 'Comments' ? '#e0e0e0' : null,
            },
            color: {
              lg: isActive === 'Comments' ? '#4B4B4B' : '#c9c9c9',
              md: isActive === 'Comments' ? '#4B4B4B' : '#c9c9c9',
              xs: isActive === 'Comments' ? '#4B4B4B' : '#c9c9c9',
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
              lg: isActive === 'Reviews' ? '2px solid #4B4B4B' : null,
              md: isActive === 'Reviews' ? '2px solid #4B4B4B' : null,
              xs: isActive === 'Reviews' ? '2px solid #4B4B4B' : null,
            },
            backgroundColor: {
              lg: isActive === 'Reviews' ? '#e0e0e0' : null,
              md: isActive === 'Reviews' ? '#e0e0e0' : null,
              xs: isActive === 'Reviews' ? '#e0e0e0' : null,
            },
            color: {
              lg: isActive === 'Reviews' ? '#4B4B4B' : '#c9c9c9',
              md: isActive === 'Reviews' ? '#4B4B4B' : '#c9c9c9',
              xs: isActive === 'Reviews' ? '#4B4B4B' : '#c9c9c9',
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