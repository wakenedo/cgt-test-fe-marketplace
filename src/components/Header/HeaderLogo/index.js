import React from 'react'

//Assets
import Logo from '../../../assets/Header/Logo.png'

const HeaderLogo = () => {
  return (
    <img
      src={Logo}
      alt='logo'
      style={{
        width: '100px'
      }}
    />
  )
}

export default HeaderLogo