import React, { useContext } from 'react'
import { Box, Typography } from '@mui/material'
import { DarkModeContext } from '../../../../context'


const Reviews = ({ isActive }) => {
  const { darkMode } = useContext(DarkModeContext)
  if (isActive === 'Reviews') {
    return (
      <Box
        border='1px solid #4B4B4B'
        borderRadius='2px'
        margin='10px'
      >
        <Box
          sx={{
            margin: {
              lg: '',
              md: '20px',
              xs: '',
            }
          }}
        >
          <Box
            sx={{
              fontSize: {
                lg: '',
                md: '12px',
                xs: '',
              }
            }}
          >
            <Box
              sx={{
                marginBottom: {
                  lg: '',
                  md: '10px',
                  xs: '',
                }
              }}
            >
              <Typography
                sx={{
                  color: darkMode ? '#E4E4E4' : '#4B4B4B'
                }}
              >
                This is the Product Review Section
              </Typography>
            </Box>
            <Box
              sx={{
                marginBottom: {
                  lg: '',
                  md: '10px',
                  xs: '',
                }
              }}
            >
              <Typography
                sx={{
                  color: darkMode ? '#E4E4E4' : '#4B4B4B'
                }}
              >
                Not implemented
              </Typography>
            </Box>
            <Box
              sx={{
                marginBottom: {
                  lg: '',
                  md: '10px',
                  xs: '',
                }
              }}
            >
            </Box>
          </Box>
        </Box>
      </Box>
    )
  } else {
    return null
  }
}

export default Reviews