import React from 'react'

//Assets
import Logo from '../../../assets/Header/Logo.png'

const HeaderLogo = () => {
  return (
    <a
      href="/">
      <img
        src={Logo}
        alt='logo'
        style={{
          width: '100px'
        }}
      />

    </a>
  )
}

export default HeaderLogo