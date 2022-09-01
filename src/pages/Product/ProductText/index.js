import React, { useContext, useState } from 'react'

import { Box } from '@mui/material'

//Inner Components
import Description from './Description'
import Header from './Header'
import Comments from './Comments'
import Reviews from './Reviews'
import { DarkModeContext } from '../../../context'

const ProductText = () => {
  const { darkMode } = useContext(DarkModeContext)
  const [isActive, setIsActive] = useState(false)

  if (isActive === false) {
    setIsActive('Description')
  }

  const toggleActive = (e) => {
    setIsActive(e.target.innerHTML)
  }
  return (
    <Box
      sx={{
        backgroundColor: darkMode ? '#261729' : '#F7F7F7',
      }}
    >
      <Header isActive={isActive} toggleActive={toggleActive} />
      <Description isActive={isActive} />
      <Comments isActive={isActive} />
      <Reviews isActive={isActive} />
    </Box>
  )
}

export default ProductText