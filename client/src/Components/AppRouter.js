import React from 'react'

import { Switch, Route } from 'react-router-dom'

import Home from './Home'
import Register from './Register'
import Login from './Home'

export default function AppRouter() {
    return (
        <Switch>
            <Route
                exact path='/'
            >
                <Home />
            </Route>
            <Route
                exact path='/login'
            >

                <Login />
            </Route>
            <Route
                exact path='Register'
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

            </Route>


        </Switch>
    )
}
