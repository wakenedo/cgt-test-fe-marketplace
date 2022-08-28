import React from 'react'
import { Box, Typography, Table, TableContainer } from '@mui/material'
import Native from './Native'
import Exchange from './Exchange'

const _3DModelFormat = () => {
  return (
    <Table
      sx={{
        width: 'fit-content'
      }}
    >
      <TableContainer
        sx={{
          height: {
            lg: '',
            md: '465px',
            xs: '',
          }
        }}
      >
        <Box

          sx={{
            width: {
              lg: '',
              md: '405px',
              xs: '',
            },
            margin: {
              lg: '',
              md: '10px',
              xs: '',
            },
            padding: {
              lg: '',
              md: '10px',
              xs: '',
            }
          }}
        >
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
            3D Model Format
          </Typography>
          <Box
            sx={{
              margin: {
                lg: '',
                md: '5px',
                xs: '',
              },
              padding: {
                lg: '',
                md: '2px',
                xs: '',
              }
            }}
          >
            <Native />
          </Box>
          <Box
            sx={{
              margin: {
                lg: '',
                md: '5px',
                xs: '',
              },
              padding: {
                lg: '',
                md: '2px',
                xs: '',
              }
            }}
          >
            <Exchange />
          </Box>
        </Box>
      </TableContainer>

    </Table>
  )
}

export default _3DModelFormat