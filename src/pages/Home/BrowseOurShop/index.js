import React, { useContext } from 'react'
import { Box, Typography } from '@mui/material'
import browseOurShop from '../../../assets/Home/BrowseShop.png'
import homeLinkShop from '../../../assets/Home/Shop.png'
import shopHomeImage from '../../../assets/Home/ShopHomeImage.jpg'
import { DarkModeContext } from '../../../context'

const BrowseOurShop = () => {
  const { darkMode } = useContext(DarkModeContext)
  return (
    <Box
      sx={{
        margin: {
          lg: '10px',
          md: '10px',
          xs: '5px',
        },
        padding: {
          lg: '10px',
          md: '10px',
          xs: '5px'
        }
      }}
    >
      <Box
        sx={{
          marginTop: {
            lg: '',
            md: '25px',
            xs: '25px'
          },
          marginBottom: {
            lg: '45px',
            md: '45px',
            xs: '45px'
          }
        }}
      >
        <img
          style={{
            width: '100%'
          }}
          src={browseOurShop} alt='' />
      </Box>
      <Box
        display='flex'
        backgroundColor='#1CFBD3'
        borderBottom='1px solid #4B4B4B'
        alignItems='center'
        justifyContent='space-between'
        sx={{
          backgroundColor: darkMode ? '#E4E4E4' : '#1CFBD3',
          marginBottom: {
            lg: '',
            md: '15px',
            xs: '',
          }
        }}
      >
        <Box
          sx={{
            margin: {
              lg: '10px',
              md: '10px',
              xs: '',
            },
            padding: {
              lg: '10px',
              md: '10px',
              xs: '5px',
            },
          }}
          margin='10px'
          padding='10px'
        >
          <Box>
            <Typography
              color='#4B4B4B'
              sx={{
                fontSize: {
                  lg: '22px',
                  md: '18px',
                  xs: '',
                }
              }}
            >
              Fresh models, straight out of the oven !
            </Typography>
          </Box>
          <Box>
            <Typography
              color='#4B4B4B'
              sx={{
                fontSize: {
                  lg: '18px',
                  md: '16px',
                  xs: '',
                }
              }}
            >
              Find all types of models, to use on your projects and products
            </Typography>
          </Box>
          <Box
            display='flex'
          >
            <Typography
              color='#4B4B4B'
              sx={{
                fontSize: {
                  lg: '18px',
                  md: '16px',
                  xs: '',
                }
              }}
            >
              Ready to browse our shop?
            </Typography>

          </Box>
        </Box>
        <Box
          sx={{
            marginRight: {
              lg: '5%',
              md: '5%',
              xs: '3%',
            }
          }}
        >
          <Box
            sx={{
              marginTop: {
                lg: '',
                md: '5px',
                xs: '5px',
              }
            }}
          >
            <a
              href='/Shop'
            >
              <img src={homeLinkShop} alt='shop-home-link'
                style={{
                  width: '50px',
                  height: '50px',
                }}
              />
            </a>
            <Typography
              textAlign='center'
              color='#4B4B4B'
              fontWeight='bold'
            >
              SHOP
            </Typography>
          </Box>
        </Box>
      </Box>
      <Box
        sx={{
          marginLeft: {
            lg: '20%',
            md: '20%',
            xs: '20%',
          },
          marginTop: {
            xs: '10px'
          }
        }}
      >
        <img src={shopHomeImage} alt='shop-home'
          style={{
            width: '70%'
          }}
        />
      </Box>
    </Box>
  )
}

export default BrowseOurShop