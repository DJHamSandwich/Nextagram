import React, { useState, useEffect } from 'react'
import { useParams } from "react-router-dom";
import axios from "axios";
import { Route, Link, Switch } from 'react-router-dom'
import Navbar from '../components/Navbar';
// import { Navbar } from 'reactstrap'
import LoadingIndicator from '../components/LoadingIndicator'




const UserProfilePage = () => {
    const { userId, username } = useParams()
    const [images, setImages] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        axios.get(`https://insta.nextacademy.com/api/v1/images?userId=${userId}`)
            .then(result => {
                console.log(result.data)
                setImages(result.data)
                setIsLoading(false)

            })
    }, [])
    if (isLoading) {
        return (
            <div>
                <LoadingIndicator />
            </div>
        )
    } else {
        return (
            <>
                <div className={`background`}>


                    <div className={`accountbox`}>
                        <div className={`accountinfo`}>
                            <h1>PROFILE</h1>
                            <p>User ID {userId}</p>
                            <p>Username:{username}</p>
                        </div>

                        {images.map(user => {
                            return <img className={`userimages`} src={user} />
                        })}

                    </div>
                </div>
            </>
        )
    }
}

export default UserProfilePage