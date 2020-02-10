import axios from 'axios'
import React, { useState, useEffect } from 'react'
import './App.css'
import UserImages from './containers/UserImages'
import Homepage from './pages/Homepage'
import LoadingIndicator from './components/LoadingIndicator'
import UserProfilePage from './pages/UserProfilePage'
import { Route, Link, Switch } from 'react-router-dom'
import Signup from './components/Signup'
import Login from './components/Login'
import Navbar from './components/Navbar'

const App = () => {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true)


  useEffect(() => {
    axios.get('https://insta.nextacademy.com/api/v1/users')
      .then(result => {
        // console.log(result)
        setUsers(result.data)
        setIsLoading(false)
      })
      .catch(error => {
        console.log('ERROR: ', error)
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

        <div>
          <Navbar />


          <Route exact path='/'>
            <Homepage users={users} />
          </Route>

          <Route path="/users/:userId/:username">
            <UserProfilePage />
          </Route>


        </div>

      </>
    )
  }
}

//   return (
//     <>

//       <div>
//         <div>
//           <Link to="/">Home</Link>
//           <Link to="/users/1">My Profile</Link>
//         </div>


//         <Route exact path='/'>
//           <Homepage users={users} />
//         </Route>
//         <Route path="/users/:id" component={UserProfilePage} />

//       </div>

//     </>
//   )
// }




export default App;
