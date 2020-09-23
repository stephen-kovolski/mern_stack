import React from 'react'
import {useTheme, useThemeUpdate} from '../hooks/ThemeContext'


export default function Control() { 

    const theme = useTheme()


    return (
        <div>
            
          <h1>
              {theme ? 'Light Mode' : 'Dark Mode'}
          </h1>

          <button
            onClick={useThemeUpdate()}
            
          >
              Toggle Theme
          </button>

        </div>
    )
}
