import React from 'react';

export default function Home() {

    const loginLink = window.location.origin + "/login";
    const regLink = window.location.origin + "/register";

    return (
        <div>
            <h1>
                Welcome
            </h1>
            <br/>
            <Button
                onClick= {()=> {window.location = loginLink}}
                text='Login to your Account'
                style={{color: 'pink', background: 'black'}}
                />
                Login 
            
            <a
                href={regLink}
            >
                Register
            </a>
        </div>
    )

}
