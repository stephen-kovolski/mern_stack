import React, {useState, useEffect} from 'react';
import {get, set} from '../utils/localStorage';

export default (initialVal) => {

    const [theme, setTheme] = useState( () => {

        return initialVal

    })

    useEffect(() => {
        console.log(`Theme changed to: `, theme);

        set('theme', theme)
    }, [theme])

    return [theme, setTheme]
    

}

