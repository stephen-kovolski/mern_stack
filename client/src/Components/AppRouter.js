import React from 'react'

import { Switch, Route } from 'react-router-dom'

import Home from './Home'
import Register from './Register'
import Login from './Login'

export default function AppRouter() {
    return (
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

            </Route>


        </Switch>
    )
}
