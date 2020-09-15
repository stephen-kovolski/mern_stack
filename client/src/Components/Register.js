import React from 'react';
import Button from './Button'

import Form from './Form';
import {reqInputs} from '../utils/userInputs'
import {regReq} from '../utils/userRequests'

export default function Register() {

    const loginLink = "/login";

    return (
        <div>
            <h1>
                Register Today
            </h1>
            <br/>

            <Form 
                id='registerForm'
                title='Register'
                inputs={reqInputs}
                submitFunc={regReq}
            />


            <Button
                onCLick= {() => (window.location) = loginLink}
                text='Already have an accout? Log In'
                style={{color: 'purple', background: 'grey'}}
                />
        </div>
    )

}


