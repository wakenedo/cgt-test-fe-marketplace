import React from 'react'
import { Box } from '@mui/material'

import _3DModelFormat from './3DModelFormat'
import _3DModelDetail from './3DModelDetail'

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

        <_3DModelFormat />
        <_3DModelDetail />

      </Box>
    </Box>
  )
}

export default Product3DModal