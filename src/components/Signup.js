import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import axios from 'axios'
import App from '../App';




const Signup = (props) => {

    const [username, setUsername] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [ConfirmPassword, setConfirmPassword] = useState("")



    const handleUserChange = (e) => {
        let user = e.target.value
        setUsername(user)
    }

    const handleEmailChange = (e) => {
        let email = e.target.value
        setEmail(email)
    }

    const handlePasswordChange = (e) => {
        let password = e.target.value
        setPassword(password)
    }

    const handleConfirmPasswordChange = (e) => {
        let ConfirmPassword = e.target.value
        setConfirmPassword(ConfirmPassword)
    }

    axios({
        method: 'POST',
        url: 'https://insta.nextacademy.com/api/v1/users/',
        data: {
            username: username,
            email: email,
            password: password
        }
    })
        .then(response => {
            console.log(response)
        })
        .catch(error => {
            console.error(error.response) // so that we know what went wrong if the request failed
        })



    const {
        buttonLabel,

    } = props;

    const [modal, setModal] = useState(false);

    const toggle = (e) => {
        setModal(!modal)
        e.preventDefault()
    };







    return (
        <div>
            <Button color="danger" onClick={toggle}>{buttonLabel}</Button>
            <Modal isOpen={modal} toggle={toggle} >
                <ModalHeader toggle={toggle}>Signup</ModalHeader>
                <ModalBody>
                    <form>
                        <label>
                            Username:
             <input onChange={handleUserChange} type="text" name="username" />
                        </label>
                        <label>
                            Email:
                <input onChange={handleEmailChange} type="text" name="email" />
                        </label>
                        <label>
                            Password:
                <input onChange={handlePasswordChange} type='text' name='password' />
                        </label>
                        <label>
                            Confirm password:
                <input onChange={handleConfirmPasswordChange} type='text' name='ConfirmPassword' />
                        </label>
                        <input type="submit" value="Submit" onClick={toggle} />
                    </form>
                    <ModalFooter>
                    </ModalFooter>
                </ModalBody>
            </Modal>


        </div>
    )
}

export default Signup