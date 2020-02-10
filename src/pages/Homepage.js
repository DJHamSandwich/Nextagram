import axios from 'axios'
import React, { useState, useEffect } from 'react'
import '../App.css'
import '../App.js'
import UserImages from '../containers/UserImages'
import LoadingIndicator from '../components/LoadingIndicator'
import { Route, Link, Switch } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Login from '../components/Login'
// import { Navbar } from 'reactstrap'





const Homepage = ({ users }) => {

    return (
        <>


            <div className={`background`} >



                {users.map(user => {
                    // console.log(user)
                    return (


                        <div className={`accountbox`} key={user.id}>
                            <div className={`accountinfo`}>
                                <img className={`profileimage`} src={user.profileImage}></img>
                                <div className={`username`}>{user.username}</div>
                                <Link to={`/users/${user.id}/${user.username}`}>My Profile</Link>
                            </div>

                            <UserImages userId={user.id} />
                        </div>

                    )
                })}

            </div>

        </>
    )

}


export default Homepage;
