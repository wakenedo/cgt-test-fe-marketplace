import React from 'react'
import { Box, Stack } from '@mui/material'

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
      <Stack
        direction='row'
      >

        <_3DModelFormat />
        <_3DModelDetail />

      </Stack>
    </Box>
  )
}

export default Product3DModal