import React, { createContext, useState } from 'react'

const DarkModeContext = createContext()

function DarkModeProvider(props) {
  const [darkMode, setDarkMode] = useState(localStorage.getItem('darkModeToggle') || false)
  const toggleDarkMode = () => {
    localStorage.setItem('darkModeToggle', !darkMode)
    setDarkMode(!darkMode)
  }

  console.log('Context', darkMode)

  return (
    <div>
      <DarkModeContext.Provider value={{ darkMode, toggleDarkMode }} >
        {props.children}
      </DarkModeContext.Provider>
    </div>
  )
}

export { DarkModeContext, DarkModeProvider }