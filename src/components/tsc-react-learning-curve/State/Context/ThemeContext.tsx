
import React, { createContext, ReactNode } from 'react'
import { theme } from './theme'

type ThemeContextProp = {
    children: ReactNode
}

export const ThemeContext = createContext(theme)

export default function ThemeContextProvider({children}: ThemeContextProp) {

  return (
    <ThemeContext.Provider value={theme}>
     {children}
    </ThemeContext.Provider>
  )
}
