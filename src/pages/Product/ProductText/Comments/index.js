import React, { useContext } from 'react'
import { Box, Typography } from '@mui/material'
import { DarkModeContext } from '../../../../context'


const Comments = ({ isActive }) => {
  const { darkMode } = useContext(DarkModeContext)
  if (isActive === 'Comments') {
    return (
      <Box
        borderRadius='2px'
        margin='10px'
        sx={{
          border: darkMode ? '1px solid #E4E4E4' : '1px solid #4B4B4B'
        }}
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
                This is the Product Comments Section
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

export default Comments