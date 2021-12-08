import React, {useState} from 'react';
import './App.css';
import Header from './Layout/Header';
import SearchFormContainer from './Components/SearchFormContainer';
import RecentSearchesContainer from './Components/RecentSearchesContainer';
import classes from '../src/CssComponents/SearchFormContainer.module.css';
// import AlertDismissibleExample from './UI/Error';
import firebase from './Firebase';


const App =  props => {

const [jobTitleInput, setJobTitleInput] = useState('');
const [jobInputTouched, setJobInputTouched] = useState(false);
const [valueInput, setValueInput] = useState('');
const [valueInputTouched, setValueInputTouched] = useState(false);
const [isJobValid, setIsJobValid] = useState(false);
const [isValueValid, setIsValueValid] = useState(false);

// function that listens for changes in the the job input and when the 
// user clicks search, log those changes to the console.



const onJobTitleChange = event => {
  setJobTitleInput(event.target.value);
  console.log(jobTitleInput);
}


// function that listens for changes in the the value input and when the 
// user clicks search, log those changes to the console.

const onValueChange = event => {
setValueInput(event.target.value);
console.log(valueInput);

}

// when user submits, create an object out of both of the inputs and push the object onto the 
// formInput array

const onSubmitHandler = event => {
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

  setIsJobValid(true)
  setIsValueValid(true)
  console.log(finalizedInput);
  setJobTitleInput('');
  setValueInput('');

}

  const notValidJobInput = !jobTitleInput && jobInputTouched
  const notValidValueInput = !valueInput && valueInputTouched

  const inputClasses = notValidJobInput || notValidValueInput ? 'form-control-invalid' : '';
 
  return (
    <div className={classes[inputClasses]}>
      <Header />
      <SearchFormContainer 
      onChangeJob={onJobTitleChange} 
      onChangeValue={onValueChange} 
      onSubmit={onSubmitHandler} 
      resetJob={jobTitleInput} 
      resetValue={valueInput}/>
      {notValidJobInput || notValidValueInput ? <p className={classes['error-text']}>Both fields must be required!</p> : ''}
      <RecentSearchesContainer/>
    </div>
  );
}


export default App;
