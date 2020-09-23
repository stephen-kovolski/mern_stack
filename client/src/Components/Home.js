import React from 'react';
import Button from './Button';
import {useTheme} from '../hooks/ThemeContext'



export default function Home() {

    const loginLink = window.location.origin + "/login";
    const regLink = window.location.origin + "/register";

    return (
        <div>

        

            <h1>
                Welcome To The Site
            </h1>
            <h2>
                {useTheme() ? 'Light Mode' : 'Dark Mode'}
            </h2>
            <br/>
            <Button
                onClick= {()=> {window.location = loginLink}}
                text='Login to your Account'
                style={{color: 'pink', background: 'black'}}
                />
                 
                <br/>
            <Button
                onClick= {()=> {window.location = regLink}}
                text='Register your Account'
                style={{color: 'pink', background: 'black'}}
                />
                
            
        </div>
    )

}
