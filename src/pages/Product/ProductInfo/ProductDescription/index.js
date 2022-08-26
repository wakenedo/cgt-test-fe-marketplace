import React from 'react'
import { Box, Typography } from '@mui/material'

const ProductDescription = () => {
  return (
    <Box
      margin='15px'
      padding='15px'
      backgroundColor='#fdfdfd'
      borderRadius='5px'
    >
      <Typography
        sx={{
          fontSize: {
            lg: '16.8px',
            md: '',
            xs: '11px',
          }
        }}

      >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean sit amet nunc suscipit, finibus enim egestas, tempus turpis. Donec malesuada nec urna vitae fermentum. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nullam at nisl dignissim, venenatis enim eu, dignissim nunc. In hac habitasse platea dictumst. Sed maximus ornare ante, a egestas urna faucibus quis. Aliquam erat volutpat. Duis ut massa justo. Aliquam ac sapien blandit, commodo sem at, vestibulum ante. Suspendisse bibendum, eros ac pellentesque fermentum, nisl arcu malesuada lorem, id fringilla odio lacus imperdiet tellus. Cras ultrices quam justo, at commodo libero rutrum ut. Vivamus a ante sed velit pharetra porttitor et eget enim. Praesent porttitor, mi non varius dapibus, nibh magna sagittis mauris, condimentum elementum est ex et mi. Mauris sit amet ligula risus. Sed eget sapien sed tellus porttitor suscipit rhoncus ut nulla.
      </Typography>
    </Box>
  )
}

export default ProductDescription