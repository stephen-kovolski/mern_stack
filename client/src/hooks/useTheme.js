import React, {useState, useEffect} from 'react';
import {get, set} from '../utils/localStorage';

export default useTheme = (initialVal) => {

    const [theme, setTheme] = useState( () => {

        return get ['theme', setTheme]

    })

    useEffect(() => {
        console.log(`Theme changed to: `, theme);

        set('theme', theme)
    }, [theme])

    return [theme, setTheme]
    

}

function get (key) {

}

function set (key, value) {

}