import React from 'react'
import { Box, Stack, Typography } from '@mui/material'
import ProductBImage from '../../../assets/Products/b.jpg'


const NewestProduct = () => {
  return (
    <Box
      backgroundColor='#1CFBD3'
      sx={{
        width: {
          lg: '',
          md: '450px',
          xs: '',
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
                xs: '',
              }
            }}
          >
            Check out the newest product !

          </Typography>
        </Box>
        <Box
          margin='0px auto'
        >
          <img
            src={ProductBImage}
            alt=''
            style={{
              width: '350px',
              height: '200px'
            }}
          />

        </Box>
        <Box
          margin='15px'
          padding='15px'
          backgroundColor='#fdfdfd'
        >
          <Box
            marginBottom='10px'
            alignContent='space-between'
          >

            <Typography
              alignItems='center'
              display='flex'
              fontWeight='bold'
              sx={{
                fontSize: {
                  lg: '',
                  md: '22px',
                  xs: '',
                }
              }}
            >
              Alien Model
              <a href="/products/b">
                <Box
                  sx={{
                    marginLeft: {
                      lg: '',
                      md: '180px',
                      xs: '',
                    }
                  }}
                >
                  <Typography>
                    See More

                  </Typography>
                </Box>
              </a>
            </Typography>

          </Box>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean sit amet nunc suscipit, finibus enim egestas, tempus turpis. Donec malesuada nec urna vitae fermentum. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nullam at nisl dignissim, venenatis enim eu, dignissim nunc.
          </Typography>
        </Box>
      </Stack>
    </Box>
  )
}

export default NewestProduct