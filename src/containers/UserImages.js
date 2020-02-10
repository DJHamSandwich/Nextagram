import axios from 'axios'
import React, { useState, useEffect } from 'react'
import Homepage from '../pages/Homepage'
import LoadingIndicator from '../components/LoadingIndicator'
// import '../App.css'
// import '../App.js'

const UserImages = ({ userId }) => {
    const [images, setImages] = useState([])
    const [isLoading, setIsLoading] = useState(true)


    useEffect(() => {
        axios.get(`https://insta.nextacademy.com/api/v1/images?userId=${userId}`)
            .then(result => {
                // console.log(result)
                setImages(result.data)
                setIsLoading(false)

            })
            .catch(error => {
                console.log('ERROR: ', error)
            })
    }, [])




    return (
        <>

            {images.map((url, index) => {

                return (

                    <img key={index} className='userimages' src={url}></img>

                )

            })}

        </>
    )
}

//ADD LOADING IMAGES FOR EACH USERIMAGES SINCE YOU KNOW HOW TO NOW DUMBDUMB
//msg color pallette
export default UserImages;
