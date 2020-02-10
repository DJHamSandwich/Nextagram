import React, { useState } from 'react';
import SignupForm from './Signup'
import { Route, Link, Switch } from 'react-router-dom'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import axios from 'axios'



const Login = (props) => {

    const {
        buttonLabel,

    } = props;

    const [modal, setModal] = useState(false);

    const toggle = () => setModal(!modal);

    // preventDefault()

    return (

        <div>
            <Button color="danger" onClick={toggle}>{buttonLabel}</Button>
            <Modal isOpen={modal} toggle={toggle} >
                <ModalHeader toggle={toggle}>Login</ModalHeader>
                <ModalBody>
                    <form>
                        <label>
                            Username:
             <input type="text" name="username" />
                        </label>
                        <label>
                            Password:
                <input type='text' name='password' />
                        </label>
                        <input type="submit" value="Submit" onClick={toggle} />
                    </form>
                    <ModalFooter>
                        {/* <Link to={`/signup`}>
                            Sign Up
                        </Link> */}
                    </ModalFooter>
                </ModalBody>
            </Modal>
        </div>


    )
}

export default Login