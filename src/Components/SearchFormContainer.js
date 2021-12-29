import React from 'react'
import { Form, Row, Col, InputGroup, FormControl, Button} from 'react-bootstrap';
import classes from '../CssComponents/SearchFormContainer.module.css'

// import current user context to be able to display current user email in a welcome alert
import { useAuth, AuthProvider } from '../Contexts/AuthContext';

const SearchFormContainer = props => {
    const { currentUser } = useAuth();

    return (
    <div>
        <Form className={classes['form-search']} onSubmit={props.onSubmit}>

            <Row className="align-items-center">
            <div className={classes['search-form-input']}>
                <Col xs="auto">
                <Form.Label htmlFor="inlineFormInput" visuallyHidden>
                 Position
                </Form.Label>
                <Form.Control
                    className={`mb-2 ${classes['input1']}`} 
                    id="inlineFormInput"
                    placeholder="Job Title"
                    value={props.resetJob}
                    onChange={props.onChangeJob}
                />
                </Col>
                <Col xs="auto">
                <Form.Label htmlFor="inlineFormInputGroup" visuallyHidden>
                Values
                </Form.Label>
                <InputGroup className="mb-2">
                   
                <FormControl id="inlineFormInputGroup"
                placeholder="Values/Keywords"
                onChange={props.onChangeValue}
                className={`mb-2 ${classes['input2']}`}
                value={props.resetValue}  
                />
                </InputGroup>
                </Col>
            </div>
                <Button className={classes['button-submit']} type="submit">
                    Search Jobs
                </Button>   
            </Row>
        </Form>         
    </div>
    )
}

export default SearchFormContainer;
