import React from 'react'
import googleIcon from "../images/google.png"
import { Link } from 'react-router-dom'
import queryString from 'query-string';

export default function GoogleLogin() {
    
    // const stringifiedParams = stringify({

    //     client_id:486648881123-nlahhgei1cgt735o8rda8hu4t7prb6rp.apps.googleusercontent.com,
    //     redirect_uri: 'https://www.example.com/authenticate/google',
    //     scope: [
    //         'https://www.googleapis.com/auth/userinfo.email',
    //         'https://www.googleapis.com/auth/userinfo.profile',
    //     ].join(' '), // space seperated string
    //     response_type: 'code',
    //     access_type: 'offline',
    //     prompt: 'consent',
    // });

    // const googleLoginUrl = `https://accounts.google.com/o/oauth2/v2/auth?${stringifiedParams}`;

    return (
        <>
            <div className='googleButton'>

                    <img src={googleIcon}></img>
                    <div className='googleBtnText'>Signin with google</div>

            </div>
        </>

    )
}
