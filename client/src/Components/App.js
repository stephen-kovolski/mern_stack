import React, { useState, useEffect } from 'react';

import { BrowserRouter } from 'react-router-dom';

import AppRouter from './AppRouter';


function App() {

  const[theme, setTheme] = useState(true)

  useEffect( () => {
    console.log(theme)
  }, [])


  return (
    <BrowserRouter>
    {<button
    onClick={() => {
      setTheme( prevTheme => {return !prevTheme})
    }}
      >
        Change Theme
      </button>}
    <AppRouter />
    </BrowserRouter>
  );
}

export default App;



