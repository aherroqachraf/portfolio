import React, { createContext } from 'react';

// Create a context with a default value
const ThemeContext = createContext<{ contextValue: string; setContextValue: (value: string) => void; }| null>(null);

export default ThemeContext;
