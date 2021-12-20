import React from 'react'
import { Form, Col, Row, InputGroup, FormControl, Button, NavLink } from 'react-bootstrap';
import classes from '../../CssComponents/Register.module.css'

const Register = (props) => {
    return (
        <div className={classes['form']}>
            <Form onSubmit={props.onRegister}>
            <Form.Group className={`mb-3 ${classes['input1']}`} controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control 
                type="email" 
                placeholder="Enter email" 
                value={props.emailInput}
                onChange={props.onEmailChange} />
                <Form.Text className="text-muted">
                We'll never share your email with anyone else.
                </Form.Text>
            </Form.Group>

            <Form.Group className={`mb-3 ${classes['input2']}`}  controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control 
                type="password" 
                placeholder="Password" 
                value={props.passwordInput}
                onChange={props.onPasswordChange} />
            </Form.Group>
            <Button className={classes['button-submit']} variant="primary" type="submit">
                Register 
            </Button>
            <div className={classes['link-login']}>
                <a>Have an account</a>
            </div>
            <NavLink className={classes['login-link']} href="/login">Already have an account? Login here</NavLink>
            </Form>
        </div>
    )
}

export default Register;
