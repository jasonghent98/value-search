import React from 'react'
import { Form, Navbar, Row, Col, InputGroup, FormControl, Button } from 'react-bootstrap';
import classes from '../CssComponents/Login.module.css'

const Login = props => {
    return (
        <div>
            <h2>Welcome Back</h2>
            <p>Pick up where you left off. Sign in to search for jobs that fit your values.</p>
            <Form className={classes['form-search']} onSubmit={props.onSubmit}>
            <Row className="align-items-center">
                <Col xs="auto">
                    <Form.Label htmlFor="inlineFormInput" visuallyHidden>
                    Email
                    </Form.Label>
                    <Form.Control
                        className={`mb-2 ${classes['input1']}`} 
                        id="inlineFormInput"
                        placeholder="Email"
                        value={props.resetJob}
                        onChange={props.onChangeJob}
                    />
                </Col>
                <Col xs="auto">
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
                    Search Jobs
                </Button>   
            </Row>
        </Form>  
        <div className={classes['register-text']}>
            New to valueSearch? <a href="">Register here</a>
        </div>
        </div>
    )
}

export default Login;
