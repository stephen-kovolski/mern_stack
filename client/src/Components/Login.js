import React from 'react';

export default function Login() {

    const regLink = window.location.origin + "/register";

    return (
        <div>
            <h1>
                Login to your account
            </h1>
            <br/>
            <a
                href={regLink}
            
            >
                Need an account?Register today
            </a>
        </div>
    )

}
