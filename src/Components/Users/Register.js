import React from 'react'
import { Form, Col, Row, InputGroup, FormControl, Button, NavLink } from 'react-bootstrap';
import classes from '../../CssComponents/Register.module.css'

const Register = (props) => {
    return (
        <div>
            <div>
                <h2>ValueSearch</h2>
            </div>
            <div className={classes['card']}>
            <Form onSubmit={props.onRegister} className={classes['form']}>
                <div className={classes['first-last']}>
                <Form.Group className={`mb-3 ${classes['firstname']}`}  controlId="formBasicPassword">
                <Form.Label>First Name</Form.Label>
                <Form.Control 
                type="password" 
                placeholder="First Name" 
                value={props.resetPassword}
                onChange={props.onPasswordChange} />
            </Form.Group>
            <Form.Group className={`mb-3 ${classes['lastname']}`}  controlId="formBasicPassword">
                <Form.Label>Last Name</Form.Label>
                <Form.Control 
                type="password" 
                placeholder="Last Name" 
                value={props.resetPassword}
                onChange={props.onPasswordChange} />
            </Form.Group>
            </div>
            <Form.Group className={`mb-3 ${classes['emailaddress']}`} controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control 
                type="email" 
                placeholder="Enter email" 
                value={props.resetEmail}
                onChange={props.onEmailChange} />
                <Form.Text className="text-muted">
                We'll never share your email with anyone else.
                </Form.Text>
            </Form.Group>
            <Form.Group className={`mb-3 ${classes['password']}`}  controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control 
                type="password" 
                placeholder="Password" 
                value={props.resetPassword}
                onChange={props.onPasswordChange} />
            </Form.Group>
            <Form.Group className={`mb-3 ${classes['confirm-password']}`}  controlId="formBasicPassword">
                <Form.Label>Confirm Password</Form.Label>
                <Form.Control 
                type="password" 
                placeholder="Password" 
                value={props.resetPassword}
                onChange={props.onPasswordChange} />
            </Form.Group>
            <Button className={classes['button-submit']} variant="primary" type="submit">
                Register 
            </Button>
            <div className={classes['link-login']}></div>
            <NavLink className={classes['login-link']} href="/login">Already have an account? Login here</NavLink>
            </Form>
            </div>
        </div>
    )
}

export default Register;
