'use client'
import React, { useState } from 'react'
import ThemeContext from './theme.context'

const Provider = ({children}:{children: any}) => {
    const [contextValue, setContextValue] = useState<string>('dark')
  return (
    <ThemeContext.Provider value={{contextValue, setContextValue}}>
        {children}    
    </ThemeContext.Provider>
  )
}

export default Provider
