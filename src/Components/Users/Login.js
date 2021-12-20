import React from 'react'
import { Form, Navbar, Row, Col, InputGroup, FormControl, Button } from 'react-bootstrap';
import classes from '../../CssComponents/Login.module.css'

const Login = props => {
    return (
        <div>
            <h2>Welcome Back</h2>
            <p>Pick up where you left off. Sign in to search for jobs that fit your values.</p>
            <Form className={classes['form-search']} onSubmit={props.onSubmit}>
                <Row className="align-items-center">
                    <Col xs="auto" className={classes['email-input']}>
                        <Form.Label htmlFor="inlineFormInput" visuallyHidden>
                        Email
                        </Form.Label>
                        <Form.Control id="inlineFormInput"
                            placeholder="Email"
                            onChange={props.onChangeJob}
                            className={`mb-2 ${classes['input1']}`} 
                            value={props.resetJob}
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
                        value={props.resetValue}  
                        />
                        </InputGroup>
                    </Col>
                    <Button className={classes['button-submit']} type="submit">
                        Login
                    </Button>   
                </Row>
            </Form>  
            <div className={classes['register-text']}>
                New to valueSearch?<br></br><a href="/register">Register here</a>
            </div>
        </div>
        )
}

export default Login;
