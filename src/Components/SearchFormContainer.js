import React, {useState} from 'react'
import { Form, Row, Col, InputGroup, FormControl, Button} from 'react-bootstrap';
import classes from '../CssComponents/SearchFormContainer.module.css'
import Header from '../Layout/Header';
import RecentSearchesContainer from './RecentSearchesContainer';

// import current user context to be able to display current user email in a welcome alert
import { useAuth, AuthProvider } from '../Contexts/AuthContext';

const SearchFormContainer = props => {
    const [userSearches, setUserSearches] = useState([])
    const { currentUser } = useAuth();

    const [jobTitleInput, setJobTitleInput] = useState('');
    const [jobInputTouched, setJobInputTouched] = useState(false);
    const [valueInput, setValueInput] = useState('');
    const [valueInputTouched, setValueInputTouched] = useState(false);
    const [isJobValid, setIsJobValid] = useState(false);
    const [isValueValid, setIsValueValid] = useState(false);

    const notValidJobInput = !jobTitleInput && jobInputTouched
    const notValidValueInput = !valueInput && valueInputTouched

    const inputClasses = notValidJobInput || notValidValueInput ? 'form-control-invalid' : '';

    // function that handles job searches

    const onSearchHandler = event => {
        event.preventDefault();
        setJobInputTouched(true);
        setValueInputTouched(true);
    
        if (jobTitleInput.trim() === '') {
          setIsJobValid(false);
          return;
        }
        if (valueInput.trim() === '') {
          setIsValueValid(false);
          return;
        }
        const finalizedInput = {
          jobTitleInput: jobTitleInput,
          valueInput: valueInput
        }
    
        setUserSearches((prevState) => {
          return [finalizedInput, ...prevState]
        })
        console.log(userSearches);
        setIsJobValid(true)
        setIsValueValid(true)
        setJobTitleInput('');
        setValueInput('');
    
      }

    //   listens for changes in the job position input

      const onJobTitleChange = event => {
        setJobTitleInput(event.target.value);
        console.log(event.target.value);
      }

    //   listens for changes in the value input

      const onValueChange = event => {
        setValueInput(event.target.value);
        console.log(event.target.value);
      
      }

    return (
    <div>
        <Header/>
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
        <div>
            <RecentSearchesContainer userSearches={userSearches}/>
        </div>         
    </div>
    )
}

export default SearchFormContainer;
