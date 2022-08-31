import React from 'react'
import { Box } from '@mui/material'

import ModelFormat from './3DModelFormat'
import ModelDetail from './3DModelDetail'

const Product3DModal = () => {
  return (
    <Box
      margin='15px'
      padding='15px'
      backgroundColor='#fdfdfd'
      borderRadius='5px'
    >
      <Box
        sx={{
          display: {
            lg: 'flex',
            md: 'flex',
            xs: '',
          },
          flexDirection: {
            lg: 'column',
          }
        }}
      >

        <ModelFormat />
        <ModelDetail />

      </Box>
    </Box>
  )
}

export default Product3DModal