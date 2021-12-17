import React from 'react'
import { Form, Col, Row, InputGroup, FormControl, Button } from 'react-bootstrap';
import classes from '../../CssComponents/Register.module.css'

const Register = (props) => {
    return (
        <div className={classes['form']}>
             <Form className={classes['form-search']} onSubmit={props.onSubmit}>
                <Row className="align-items-center">
                    <Col xs="auto" className={classes['email-input']}>
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
                        <div className={classes['password-input']}>
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
                        </div>
                    </Col>
                    <Button className={classes['button-submit']} type="submit">
                        Register
                    </Button>   
                </Row>
            </Form>  
        </div>
    )
}

export default Register;
