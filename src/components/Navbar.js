import React, { useState } from 'react'
import { Route, Link, Switch } from 'react-router-dom'
import LoginForm from './Login'
import SignupForm from './Signup'
import '../App.css'


const Navbar = () => {
    return (

        <div className={'navbar'}>
            <Link className={'links'} to="/">Home</Link>
            <div style={{ display: 'flex', flexDirection: 'row' }}>
                <LoginForm buttonLabel={'Login'} />

                <SignupForm buttonLabel={'Sign Up'} />
            </div>

        </div>

    )





}

export default Navbar