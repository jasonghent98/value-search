import React, {useState, useRef} from 'react'
import { Form, Row, Col, InputGroup, FormControl, Button, Alert} from 'react-bootstrap';
import classes from '../CssComponents/SearchFormContainer.module.css'
import Header from '../Layout/Header';
import RecentSearchesContainer from './RecentSearchesContainer';
import { useHistory } from 'react-router-dom';

// import current user context to be able to display current user email in a welcome alert
import { useAuth, AuthProvider } from '../Contexts/AuthContext';

const SearchFormContainer = props => {
    const { currentUser, hideAlert } = useAuth();

    const jobInputRef = useRef();
    const valueInputRef = useRef();
    const [jobInputTouched, setJobInputTouched] = useState(false);
    const [valueInputTouched, setValueInputTouched] = useState(false);
    const [isJobValid, setIsJobValid] = useState(false);
    const [isValueValid, setIsValueValid] = useState(false);
    const history = useHistory();

    // const notValidJobInput = !jobInputRef.current.value && jobInputTouched
    // const notValidValueInput = !valueInputRef.current.value && valueInputTouched

    // const inputClasses = notValidJobInput || notValidValueInput ? 'form-control-invalid' : '';
    

    // Define a matchValues function that will take in finalizedObject user input. Ultimately, this function will be called inside 
    // the onSearchHandler function with the finalizedObject data
    
    // matchValues function:
    // query companies collection in firestore and loop over every document in the collection
        // if any document contains values in its "jobTitle" or "values" field that match the valueInputRef or jobInputRef
            // populate the document and all of its fields as a <PopulatedSearchResult> component

// when the form to search for a position is submitted, it needs save input in an object, and call matchValues function
// 

    const onSearchHandler = event => {
        event.preventDefault();
        setJobInputTouched(true);
        setValueInputTouched(true);
        if (!jobInputRef.current.value) {
          return;
        }
        if (!valueInputRef.current.value) {
          return;
        }
        const finalizedInput = {
          jobInput: jobInputRef.current.value,
          valueInput: valueInputRef.current.value
        }
        console.log(finalizedInput)
       
        setIsJobValid(true)
        setIsValueValid(true)
        history.push('/results')
    
      }


    return (
    <div>
        <Header/>
        {currentUser && <Alert variant='success' dismissible={true} >Welcome back, {currentUser.email}</Alert>}

        <Form className={classes['form-search']} onSubmit={onSearchHandler}>
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
                    ref={jobInputRef}
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
                ref={valueInputRef}
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
