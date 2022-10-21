import React, { useContext, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Context/UserContext';

const LogIn = () => {
    const navigate = useNavigate('')
    const [error, setError]=useState('')
    const {userLogin} = useContext(AuthContext)
    const handelSignIn = (event)=>{
        event.preventDefault()
        const form = event.target ;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);
        form.reset()
        setError()
        userLogin(email, password)
        navigate('/')
        .then(result=>{
            const user = result.user
            console.log(user)
        })
        .catch(error => {
            console.error(error)
        setError(error.message)
        })
    } 
    return (
        <Form onSubmit={handelSignIn}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" name='email' placeholder="Enter email" required />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" name='password' placeholder="Password" required />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Check me out" />
            </Form.Group>
            <Form.Text className='text-danger'>
            {error}
            </Form.Text>
            <Button variant="primary" type="submit">
               Log In
            </Button>
        </Form>
    );
};

export default LogIn;