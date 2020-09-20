import React from 'react';
import Button from './Button';
import Form from './Form';
import {loginInputs} from '../utils/userInputs';

const baseURL = 'http://localhost:3000';
const beURL = 'http://localhost:5000'
const {default: axios} = require('axios');


export default function Login() {

    const regLink = `${baseURL}/register`;
console.log(loginInputs)
    return (
        <div>
            <h1>
                Login to your account
            </h1>
            <br/>

            <Form
            id='loginForm'
            title='Login'
            inputs={loginInputs}
            submitFunc={loginReq}
            />
            


            <Button
                onClick= {() => {window.location = regLink}}
                text='Need an account an accout? Register Today'
                style={{color: 'white', background: 'black'}}
                />
            
        </div>
    )

}


function loginReq(form) {
    let reqBody = {};

    //go through the form and get the UN
    for (const input of form) {
        const val = input.value
        if (val != '') {
            reqBody[input.name] = val
        }
    }




        const loginURL = `${beURL}/user/login`;


    axios.put(loginURL, reqBody)
    .then(res => {
        console.log(res)
    })
    .catch(err => {
        if (err) {
            console.log(err)
        }
    })

}