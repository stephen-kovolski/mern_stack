import React from 'react'

import { Switch, Route } from 'react-router-dom'

import Home from './Home'
import Register from './Register'
import Login from './Login'
import useTheme from '../hooks/useTheme'



export default function AppRouter() {

    const [ theme, setTheme] = useTheme(true);

    return (
        <div>
            <h1>
                {theme ? 'Light Mode' : 'Dark Mode'}
            </h1>
            <button
            onClick={() => {
                setTheme(prevTheme => {return != prevTheme})
            }}
            >
                {!theme ? 'Switch to Light Mode' : 'Switch to Dark Mode'}

            </button>
        <Switch>
            <Route
                Route path='/' exact
            >
                <Home />
            </Route>
            <Route
                Route path='/login' exact
            >

                <Login />
            </Route>
            <Route
                Router path='/register' exact
            >

                <Register />
            </Route>

            <Route
            path='/'
            >
                <div>
                    <h1>
                        Error: 404
                    </h1>
                </div>
                </div>

            </Route>


        </Switch>
    )
}
