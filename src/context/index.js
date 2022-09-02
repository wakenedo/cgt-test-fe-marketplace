import React, { createContext, useState } from 'react'

const DarkModeContext = createContext()

function DarkModeProvider(props) {
  const [darkMode, setDarkMode] = useState(localStorage.getItem('darkModeToggle') || false)
  const toggleDarkMode = () => {
    if (darkMode) {
      localStorage.removeItem('darkModeToggle')
    } else {
      localStorage.setItem('darkModeToggle', true)
    }
    setDarkMode(!darkMode)
  }
  return (
    <div>
      <DarkModeContext.Provider value={{ darkMode, toggleDarkMode }} >
        {props.children}
      </DarkModeContext.Provider>
    </div>
  )
}

export { DarkModeContext, DarkModeProvider }