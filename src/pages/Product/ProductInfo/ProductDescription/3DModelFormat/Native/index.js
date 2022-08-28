import React from 'react'
import { Box, Typography } from '@mui/material'

const Native = () => {
  return (
    <Box>
      <Box>
        <Typography
          fontWeight='bold'
          color='#4B4B4B'
          sx={{
            fontSize: {
              lg: '',
              md: '18px',
              xs: '',
            }
          }}
        >
          Native
        </Typography>
      </Box>
      <Box>
        <Box
          justifyContent='space-between'
          sx={{
            display: {
              lg: '',
              md: 'flex',
              xs: '',
            }
          }}
        >
          <Typography
            sx={{
              fontSize: {
                lg: '',
                md: '14px',
                xs: '',
              }
            }}
          >
            Blender (.blend) (2 files)
          </Typography>
          <Typography
            fontWeight='bold'
            color='#4B4B4B'
          >
            6.79MB
          </Typography>
        </Box>
        <Box>
          <Typography
            sx={{
              fontSize: {
                lg: '',
                md: '14px',
                xs: '',
              }
            }}
          >
            Version: 2.8
          </Typography>
          <Typography
            sx={{
              fontSize: {
                lg: '',
                md: '14px',
                xs: '',
              }
            }}
          >
            Renderer: Cycles
          </Typography>
          <Typography
            sx={{
              fontSize: {
                lg: '',
                md: '14px',
                xs: '',
              }
            }}
          >
            Version: 2.79
          </Typography>
          <Typography
            sx={{
              fontSize: {
                lg: '',
                md: '14px',
                xs: '',
              }
            }}
          >
            Renderer: Cycles
          </Typography>
        </Box>
      </Box>
    </Box>
  )
}

export default Native