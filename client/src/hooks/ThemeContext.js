import React, {useState, useEffect, useContext, createContext} from 'react';

const {get, set} = require('../utils/localStorage');

const ThemeContext = createContext();

const ThemeUpdateContext = createContext();

export function useTheme(){
    return useContext(ThemeContext)
}

export function useThemeUpdate() {
    return useContext(ThemeUpdateContext)
}

export function ThemeProvider({children}) {

    const [theme, setTheme] = useState( () => {
        return get('theme', true)
    })


    useEffect( () => {
        set('theme', JSON.stringify(theme))

        document.getElementById('root').style.backgroundColor = theme ? 'white' : 'black';

        console.log("the theme changed")

    }, [theme])

    const themeToggle = () => {
        setTheme(curTheme => !curTheme)
    }

    return (
        <>
        <ThemeContext.Provider value={theme}>
            <ThemeUpdateContext.Provider value={themeToggle}>
                {children}
            </ThemeUpdateContext.Provider>
        </ThemeContext.Provider>

        </>
    )

}