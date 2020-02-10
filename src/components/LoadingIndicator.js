import React, { useState } from 'react'
import Spinner from '../Images/Spinner.gif'

const LoadingIndicator = () => {
    // const [isLoading, setIsLoading] = useState(true)

    // if (isLoading) {
    //     return (
    //         <div id={`Spinner`}>
    //             <img src={Spinner} />
    //         </div>
    //     )
    // } else {
    //     setIsLoading(false)
    // }

    return (

        <img id={`Spinner`} src={Spinner} />

    )
}
export default LoadingIndicator