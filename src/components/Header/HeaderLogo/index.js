import React, { useContext } from 'react'

//Assets
import Logo from '../../../assets/Header/Logo.png'
import darkModeLogo from '../../../assets/Header/DarkMode/DarkModeLogo.png'
import { DarkModeContext } from '../../../context'

const HeaderLogo = () => {
  const { darkMode } = useContext(DarkModeContext)

  if (darkMode) {
    return (
      <a
        href="/">
        <img
          src={darkModeLogo}
          alt='logo'
          style={{
            width: '100px'
          }}
        />

      </a>
    )

  } else {
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
}

export default HeaderLogo