import React from 'react';
import Button from './Button';

import Form from './Form';

import userInputs from '../utils/userInputs'
import {loginReq} from '../utils/userRequests'



export default function Login() {

    const regLink = "/register";

    return (
        <div>
            <h1>
                Login to your account
            </h1>
            <br/>

            <Form
            id='loginForm'
            input={userInputs}
            title='Login'
            submitFunc={loginReq}
            />
            


            <Button
                onCLick= {() => (window.location = regLink)}
                text='Need an account an accout? Register Today'
                style={{color: 'white', background: 'black'}}
                />
            
        </div>
    )

}
