import React, { useState, useRef } from 'react'
import { Form, Navbar, Row, Col, InputGroup, FormControl, Button, Alert} from 'react-bootstrap';
import classes from '../../CssComponents/Login.module.css'
import { Link, useHistory} from 'react-router-dom'

// Login context 
import { useAuth } from '../../Contexts/AuthContext';

const Login = props => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');
    const { login, currentUser } = useAuth();

    // input refs
    const email = useRef();
    const password = useRef();

    // useHistory hook to redirect after login
    const history = useHistory();

     const loginHandler = async (event) => {
        event.preventDefault();
        try {
            setError('')
            setIsLoading(true);
            await login(email.current.value, password.current.value);
            history.push('/searches')
        } catch (error) {
            setIsLoggedIn(false);
            setError('login failed')
        }
        setIsLoading(false);
        setIsLoggedIn(true);
        console.log('login successful')
    }

    return (
        <div>
            <h2>Welcome Back</h2>
            <p>Pick up where you left off. Sign in to search for jobs that fit your values.</p>
            {error && <Alert variant='danger'>{error}</Alert>}
            <Form className={classes['form-search']} onSubmit={loginHandler}>
                <Row className="align-items-center">
                    <Col xs="auto" className={classes['email-input']}>
                        <Form.Label htmlFor="inlineFormInput" visuallyHidden>
                        Email
                        </Form.Label>
                        <Form.Control id="inlineFormInput"
                        placeholder="Email"
                        onChange={props.onChangeJob}
                        className={`mb-2 ${classes['input1']}`} 
                        ref={email}
                        />
                    </Col>
                    <Col xs="auto" className={classes['password-input']}>
                        <Form.Label htmlFor="inlineFormInputGroup" visuallyHidden>
                            Password
                        </Form.Label>
                        <InputGroup className="mb-2">
                        <FormControl id="inlineFormInputGroup"
                        placeholder="Password"
                        onChange={props.onChangeValue}
                        className={`mb-2 ${classes['input2']}`}
                        ref={password}
                        />
                        </InputGroup>
                    </Col>
                    <Button className={classes['button-submit']} type="submit">
                        Login
                    </Button>   
                </Row>
            </Form>  
            <div className={classes['register-text']}>
                New to valueSearch<br/><Link to='/register'>Register here</Link>
            </div>
        </div>
        )
}

export default Login;
