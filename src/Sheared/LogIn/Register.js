import React, { useContext, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { AuthContext } from '../../Context/UserContext';

const Register = () => {
    const {userRegister} = useContext(AuthContext)
    // const [error , setError] = useState('')

    const handelRegister = (event)=>{
        event.preventDefault()
        const form = event.target;
        const name = form.name.value
        const photo = form.photo.value
        const email = form.email.value
        const password = form.password.value
        console.log(name, password, email)
        form.reset()
        userRegister(email, password)
        .then(result=>{
            const user = result.user
            console.log(user)
        })
        .catch(error => {
            console.error(error)
        //  setError(error.message)
         console.log(error)
        })
    }
    return (
        <Form onSubmit={handelRegister}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Your Name</Form.Label>
                <Form.Control type="text" name='name' placeholder="Enter Name" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Your Photo</Form.Label>
                <Form.Control type="text" name='photoURL' placeholder="Enter Photo" />
            </Form.Group>
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
        {/* {error} */}
        
            </Form.Text>
            <Button variant="primary" type="submit">
               Register
            </Button>
        </Form>
    );
};

export default Register;
