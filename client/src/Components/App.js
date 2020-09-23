import React, { useState, useEffect } from 'react';

import { BrowserRouter } from 'react-router-dom';

import AppRouter from './AppRouter';

import {ThemeProvider} from '../hooks/ThemeContext'


function App() {

  const[theme, setTheme] = useState(true)

  useEffect( () => {
    console.log(theme)
  }, [])


  return (
    <BrowserRouter>
    <ThemeProvider>
    {<button
    onClick={() => {
      setTheme( prevTheme => {return !prevTheme})
    }}
      >
        Change Theme
      </button>}
    <AppRouter />
    </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;



