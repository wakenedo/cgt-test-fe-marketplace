import React from 'react'
import { Box, Stack, Typography } from '@mui/material'
import ProductAImage from '../../../assets/Products/a.jpg'

const UserInterest = () => {
  return (
    <Box
      backgroundColor='#1CFBD3'
      sx={{
        width: {
          lg: '',
          md: '450px',
          xs: '360px',
        }
      }}
    >
      <Stack>
        <Box
          margin='10px auto'

        >
          <Typography
            fontWeight='bold'
            sx={{
              fontSize: {
                lg: '',
                md: '28px',
                xs: '22px',
              }
            }}
          >
            Your probably interested in !

          </Typography>
        </Box>
        <Box
          margin='0px auto'
        >
          <img
            src={ProductAImage}
            alt=''
            style={{
              width: '350px',
              height: '200px'
            }}
          />

        </Box>
        <Box
          backgroundColor='#fdfdfd'
          borderRadius='5px'
          sx={{
            margin: {
              lg: '',
              md: '15px',
              xs: '10px',
            },
            padding: {
              lg: '',
              md: '15px',
              xs: '10px',
            }
          }}
        >
          <Box
            marginBottom='10px'
          >

            <Typography
              alignItems='center'
              display='flex'
              fontWeight='bold'
              sx={{
                fontSize: {
                  lg: '',
                  md: '22px',
                  xs: '18px',
                }
              }}
            >
              Space Suite Model XYZ
              <a href="/Product/Test">
                <Box
                  sx={{
                    marginLeft: {
                      lg: '',
                      md: '65px',
                      xs: '45px',
                    }
                  }}
                >
                  <Typography >
                    See More
                  </Typography>
                </Box>
              </a>
            </Typography>

          </Box>
          <Typography

          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean sit amet nunc suscipit, finibus enim egestas, tempus turpis. Donec malesuada nec urna vitae fermentum. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nullam at nisl dignissim, venenatis enim eu, dignissim nunc.
          </Typography>
        </Box>
      </Stack >
    </Box >
  )
}

export default UserInterest