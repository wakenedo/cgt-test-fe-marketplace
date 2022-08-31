import React from 'react'
import { Box, Typography } from '@mui/material'
import crossNull from '../../../../../assets/Products/Exchange/crossnull.png'
import rightGreen from '../../../../../assets/Products/Exchange/rightgreen.png'
import approvedRight from '../../../../../assets/Products/Exchange/approvedright.png'

const ModelDetail = () => {
  return (
    <Box
      borderRadius='5px'
      backgroundColor='#D9D9D9'
      sx={{
        width: {
          lg: '380px',
          md: '405px',
          xs: '285px',
        },
        margin: {
          lg: '',
          md: '10px',
          xs: '',
        },
        padding: {
          lg: '',
          md: '20px',
          xs: '10px',
        }
      }}
    >
      <Typography
        fontWeight='bold'
        color='#4B4B4B'
        sx={{
          fontSize: {
            lg: '15px',
            md: '18px',
            xs: '',
          }
        }}
      >
        3D Model Details
      </Typography>
      <Box
        justifyContent='space-between'
        sx={{
          display: {
            lg: '',
            md: 'flex',
            xs: 'flex',
          },
          margin: {
            lg: '',
            md: '5px auto 5px',
            xs: '',
          }
        }}
      >
        <Typography
          sx={{
            fontSize: {
              lg: '12px',
              md: '14px',
              xs: '',
            }
          }}
        >
          Publish date
        </Typography>
        <Typography
          fontWeight='bold'
          color='#4B4B4B'
        >
          2019-01-07
        </Typography>

      </Box>
      <Box
        justifyContent='space-between'
        sx={{
          display: {
            lg: '',
            md: 'flex',
            xs: 'flex',
          },
          margin: {
            lg: '',
            md: '5px auto 5px',
            xs: '',
          }
        }}
      >
        <Typography
          sx={{
            fontSize: {
              lg: '12px',
              md: '14px',
              xs: '',
            }
          }}
        >
          Model ID
        </Typography>
        <Typography
          fontWeight='bold'
          color='#4B4B4B'
        >
          #1865888
        </Typography>

      </Box>
      <Box
        justifyContent='space-between'
        sx={{
          display: {
            lg: '',
            md: 'flex',
            xs: 'flexflex',
          },
          margin: {
            lg: '',
            md: '5px auto 5px',
            xs: '',
          }
        }}
      >
        <Typography
          sx={{
            fontSize: {
              lg: '12px',
              md: '14px',
              xs: '',
            }
          }}
        >
          Animated
        </Typography>
        <img src={crossNull} alt=''
          width='10px'
          height='10px'
        />

      </Box>
      <Box
        justifyContent='space-between'
        sx={{
          display: {
            lg: '',
            md: 'flex',
            xs: 'flex',
          },
          margin: {
            lg: '',
            md: '5px auto 5px',
            xs: '',
          }
        }}
      >
        <Typography
          sx={{
            fontSize: {
              lg: '12px',
              md: '14px',
              xs: '',
            }
          }}
        >
          Rigged
        </Typography>
        <img src={crossNull} alt=''
          width='10px'
          height='10px'
        />

      </Box>
      <Box
        justifyContent='space-between'
        sx={{
          display: {
            lg: '',
            md: 'flex',
            xs: 'flex',
          },
          margin: {
            lg: '',
            md: '5px auto 5px',
            xs: '',
          }
        }}
      >
        <Typography
          sx={{
            fontSize: {
              lg: '12px',
              md: '14px',
              xs: '',
            }
          }}
        >
          VR / AR / Low-poly
        </Typography>
        <img src={crossNull} alt=''
          width='10px'
          height='10px'
        />

      </Box>
      <Box
        justifyContent='space-between'
        sx={{
          display: {
            lg: '',
            md: 'flex',
            xs: 'flex',
          },
          margin: {
            lg: '',
            md: '5px auto 5px',
            xs: '',
          }
        }}
      >
        <Typography
          sx={{
            fontSize: {
              lg: '12px',
              md: '14px',
              xs: '',
            }
          }}
        >
          PBR
        </Typography>
        <img src={approvedRight} alt=''
          width='85px'
          height='18px'
        />

      </Box>
      <Box
        justifyContent='space-between'
        sx={{
          display: {
            lg: '',
            md: 'flex',
            xs: 'flex',
          },
          margin: {
            lg: '',
            md: '5px auto 5px',
            xs: '',
          }
        }}
      >
        <Typography
          sx={{
            fontSize: {
              lg: '12px',
              md: '14px',
              xs: '',
            }
          }}
        >
          Geometry
        </Typography>
        <Typography
          fontWeight='bold'
          color='#4B4B4B'
        >
          -
        </Typography>

      </Box>
      <Box
        justifyContent='space-between'
        sx={{
          display: {
            lg: '',
            md: 'flex',
            xs: 'flex',
          },
          margin: {
            lg: '',
            md: '5px auto 5px',
            xs: '',
          }
        }}
      >
        <Typography
          sx={{
            fontSize: {
              lg: '12px',
              md: '14px',
              xs: '',
            }
          }}
        >
          Polygons
        </Typography>
        <Typography
          fontWeight='bold'
          color='#4B4B4B'
        >
          223,649
        </Typography>

      </Box>
      <Box
        justifyContent='space-between'
        sx={{
          display: {
            lg: '',
            md: 'flex',
            xs: 'flex',
          },
          margin: {
            lg: '',
            md: '5px auto 5px',
            xs: '',
          }
        }}
      >
        <Typography
          sx={{
            fontSize: {
              lg: '12px',
              md: '14px',
              xs: '',
            }
          }}
        >
          Vertices
        </Typography>
        <Typography
          fontWeight='bold'
          color='#4B4B4B'
        >
          228,424
        </Typography>

      </Box>
      <Box
        justifyContent='space-between'
        sx={{
          display: {
            lg: '',
            md: 'flex',
            xs: 'flex',
          },
          margin: {
            lg: '',
            md: '5px auto 5px',
            xs: '',
          }
        }}
      >
        <Typography
          sx={{
            fontSize: {
              lg: '12px',
              md: '14px',
              xs: '',
            }
          }}
        >
          Textures
        </Typography>
        <img src={rightGreen} alt=''
          width='10px'
          height='10px'
        />

      </Box>
      <Box
        justifyContent='space-between'
        sx={{
          display: {
            lg: '',
            md: 'flex',
            xs: 'flex',
          },
          margin: {
            lg: '',
            md: '5px auto 5px',
            xs: '',
          }
        }}
      >
        <Typography
          sx={{
            fontSize: {
              lg: '12px',
              md: '14px',
              xs: '',
            }
          }}
        >
          Materials
        </Typography>
        <img src={rightGreen} alt=''
          width='10px'
          height='10px'
        />

      </Box>
      <Box
        justifyContent='space-between'
        sx={{
          display: {
            lg: '',
            md: 'flex',
            xs: 'flex',
          },
          margin: {
            lg: '',
            md: '5px auto 5px',
            xs: '',
          }
        }}
      >
        <Typography
          sx={{
            fontSize: {
              lg: '12px',
              md: '14px',
              xs: '',
            }
          }}
        >
          UV Mapping
        </Typography>
        <img src={rightGreen} alt=''
          width='10px'
          height='10px'
        />

      </Box>
      <Box
        justifyContent='space-between'
        sx={{
          display: {
            lg: '',
            md: 'flex',
            xs: 'flex',
          },
          margin: {
            lg: '',
            md: '5px auto 5px',
            xs: '',
          }
        }}
      >
        <Typography
          sx={{
            fontSize: {
              lg: '12px',
              md: '14px',
              xs: '',
            }
          }}
        >
          Unwrapped UVs
        </Typography>
        <Typography
          fontWeight='bold'
          color='#4B4B4B'
        >
          Non-overlapping
        </Typography>

      </Box>
      <Box
        justifyContent='space-between'
        sx={{
          display: {
            lg: '',
            md: 'flex',
            xs: 'flex',
          },
          margin: {
            lg: '',
            md: '5px auto 5px',
            xs: '',
          }
        }}
      >
        <Typography
          sx={{
            fontSize: {
              lg: '12px',
              md: '14px',
              xs: '',
            }
          }}
        >
          Plugins used
        </Typography>
        <img src={crossNull} alt=''
          width='10px'
          height='10px'
        />

      </Box>
    </Box>
  )
}

export default ModelDetail