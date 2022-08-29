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
            lg: '225px',
            md: '465px',
            xs: '185px',
          },
          width: {

            md: 'auto',

          }
        }}
      >
        <Box

          sx={{
            width: {
              lg: '410px',
              md: '405px',
              xs: '300px',
            },
            margin: {
              lg: '5px',
              md: '10px',
              xs: '2px',
            },
            padding: {
              lg: '5px',
              md: '10px',
              xs: '5',
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
                lg: '5px',
                md: '5px',
                xs: '',
              },
              padding: {
                lg: '2px',
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
                lg: '5px',
                md: '5px',
                xs: '',
              },
              padding: {
                lg: '2px',
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