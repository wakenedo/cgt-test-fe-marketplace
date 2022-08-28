import React from 'react'
import { Box, Stack, Typography } from '@mui/material'

import UserInterestImage from '../../../assets/Home/UserInterestImage.png'

const UserInterest = ({ userInterest }) => {
  return (
    <Box
      backgroundColor='#1CFBD3'
      sx={{
        width: {
          lg: '750px',
          md: '450px',
          xs: '360px',
        }
      }}
    >
      <Stack>
        <Box
          margin='10px 15px'

        >
          <img src={UserInterestImage} alt='user-interest'
            style={{
              width: '100%'
            }}
          />

        </Box>
        <Box
          margin='0px auto'
        >
          <img
            src={userInterest?.image}
            alt=''
            style={{
              width: '410px',
              height: '240px'
            }}
          />

        </Box>
        <Box
          backgroundColor='#fdfdfd'
          borderRadius='5px'
          sx={{
            margin: {
              lg: '10px',
              md: '15px',
              xs: '10px',
            },
            padding: {
              lg: '20px',
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
              color='#4B4B4B'
              sx={{
                fontSize: {
                  lg: '24px',
                  md: '22px',
                  xs: '18px',
                }
              }}
            >
              {userInterest?.title}
              <a href={`/Product/${userInterest?.id}`}>
                <Box
                  sx={{
                    marginLeft: {
                      lg: '345px',
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
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean sit amet nunc suscipit, finibus enim egestas, tempus turpis. Donec malesuada nec urna vitae fermentum. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nullam at nisl dignissim, venenatis enim eu, dignissim nunc.
          </Typography>
        </Box>
      </Stack >
    </Box >
  )
}

export default UserInterest