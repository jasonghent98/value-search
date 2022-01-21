import React, {useState, useRef} from 'react'
import { Form, Col, Row, InputGroup, FormControl, Button, NavLink, Alert } from 'react-bootstrap';
import classes from '../../CssComponents/Register.module.css'
import { Link, useHistory } from 'react-router-dom';
import { ref, uploadBytes } from 'firebase/storage';
import { storageRef } from '../../API/Firebase';

// import signup functionality to pass in to onSubmit handler 
import { useAuth} from '../../Contexts/AuthContext'

const Register = (props) => {  
    // state for listening to input fields
    
    // const [email, setEmail] = useState('')
    // const [password, setPassword] = useState('')
    // const [confirmPassword, setConfirmPassword] = useState('')
    const firstName = useRef();
    const lastName = useRef();
    const email = useRef();
    const password = useRef();
    const confirmPassword = useRef();
    const img = useRef();
    const values = useRef();
    const description = useRef();
    const title = useRef();
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    // pull signUp function from the useAuth export
    const { signUp, currentUser } = useAuth();

    // useHistory hook to redirect after register
    const history = useHistory();

    // listen handler for /register
    const onRegister = async (event) => {
        event.preventDefault();
        if (password.current.value !== confirmPassword.current.value) {
            return setError('Passwords do not match!')
        }
        try {
            setError('')
            setIsLoading(true);
            await signUp(
                firstName.current.value, 
                lastName.current.value, 
                email.current.value, 
                password.current.value, 
                img.current.value,
                values.current.value,
                description.current.value,
                title.current.value
                )
            const reference = ref(storageRef, img.current.value);
            await uploadBytes(reference, img.current.value);
            history.push('/searches')
            console.log(currentUser)
        } catch (error) {
            setError('Failed to create an account');
            console.log(error)
        }

    setIsLoading(false);
  }

    return (
        <div>
            <div>
                <h2>ValueSearch</h2>
            </div>
            <div className={classes['card']}>
            {error && <Alert variant='danger'>{error}</Alert>}
            
            <Form onSubmit={onRegister} className={classes['form']}>
                <div className={`mb-3 ${classes['firstname']}`}>
                <Form.Group controlId="formBasicFirstName">
                    <Form.Label>First Name</Form.Label>
                    <Form.Control 
                    type="text" 
                    ref={firstName}
                    placeholder="First Name" 
                    onChange={props.onEmailChange} />
                </Form.Group>
                </div>
                <div className={`mb-3 ${classes['lastname']}`} >
                <Form.Group controlId="formBasicLastName">
                    <Form.Label>Last Name </Form.Label>
                    <Form.Control 
                    type="text" 
                    ref={lastName}
                    placeholder="Last Name" 
                    onChange={props.onEmailChange} />
                </Form.Group>
                </div>
                <div className={`mb-3 ${classes['emailaddress']}`} >
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control 
                    type="email" 
                    ref={email}
                    placeholder="Enter email" 
                    onChange={props.onEmailChange} />
                    <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>
                </div>
                <div className={`mb-3 ${classes['image']}`} >
                <Form.Group controlId="image">
                    <Form.Label>Profile Image</Form.Label>
                    <Form.Control 
                    type="file" 
                    ref={img}
                    placeholder="Profile image" 
                    onChange={props.onEmailChange} />
                </Form.Group>
                </div>
                <div className={`mb-3 ${classes['values']}`} >
                <Form.Group controlId="values">
                    <Form.Label>What are your core values?</Form.Label>
                    <Form.Control 
                    type="text" 
                    ref={values}
                    placeholder="Enter your values here" 
                    onChange={props.onEmailChange} />
                </Form.Group>
                </div>
                <div className={`mb-3 ${classes['description']}`} >
                <Form.Group controlId="description">
                    <Form.Label>Tell me a bit about your experience 🤔</Form.Label>
                    <Form.Control 
                    type="text" 
                    ref={description}
                    placeholder="Experience?" 
                    onChange={props.onEmailChange} />
                </Form.Group>
                </div>
                <div className={`mb-3 ${classes['title']}`} >
                <Form.Group controlId="title">
                    <Form.Label>What is your current title?</Form.Label>
                    <Form.Control 
                    type="text" 
                    ref={title}
                    placeholder="Current Title" 
                    onChange={props.onEmailChange} />
                </Form.Group>
                </div>
                <div className={`mb-3 ${classes['password']}`} >
                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control 
                    ref={password}
                    type="password" 
                    placeholder="Password" 
                    onChange={props.onPasswordChange} />
                </Form.Group>
                </div>
                <div className={`mb-3 ${classes['confirm-password']}`} >
                <Form.Group controlId="formBasicConfirmPassword">
                 <Form.Label>Confirm Password</Form.Label>
                    <Form.Control 
                    type="password" 
                    ref={confirmPassword}
                    placeholder="Password" 
                    onChange={props.onPasswordChange} />
                </Form.Group>
                </div>
                <div className={classes['button-submit']}>
                    <Button className={classes['actual-button']} disabled={isLoading} type="submit">
                        Register 
                    </Button>
                </div>
                <div className={classes['login-link']}>
                    <Link to='/login'>Already have an account? Login here</Link>
                </div>
            </Form>
            </div>
        </div>
    )
}

export default Register;
