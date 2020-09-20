import React from 'react';
import Button from './Button'
import Form from './Form';
import {regInputs} from '../utils/userInputs'
const baseURL = 'http://localhost:3000';
const beURL = 'http://localhost:5000'

const {default: axios} = require('axios');



export default function Register() {

    const loginLink = `${baseURL}/login`;

    return (
        <div>
            <h1>
                Register Today
            </h1>
            <br/>

            <Form 
                id='registerForm'
                title='Register'
                inputs={regInputs}
                submitFunc={regReq}
            />


            <Button
                onClick= {() => {window.location = loginLink}}
                text='Already have an accout? Log In'
                style={{color: 'purple', background: 'grey'}}
                />
        </div>
    )

}


function regReq(form) {
   
        let reqBody = {};

        for (const input of form) {

            const val = input.value
            if(val !== '') {
                reqBody[input.name] = val
            }
        }     
        
        
//frontend validation needed: [] make sure all fields are present, [] emailis an email, lengths of inputs (match schema)



            const regURL = `${beURL}/user/register`;

           console.log(reqBody)
        
    
    axios.post(regURL, reqBody)
    .then(res => {
        console.log(res)
    })
    .catch(err => {
        if (err) {
            console.log(err);
        }
    })
    



    
}


