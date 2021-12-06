import React, {useState} from 'react';
import './App.css';
import Header from './Layout/Header';
import SearchFormContainer from './Components/SearchFormContainer';
import RecentSearchesContainer from './Components/RecentSearchesContainer';
import AlertDismissibleExample from './UI/Error';

const App =  props => {

const [jobTitleInput, setJobTitleInput] = useState('');
const [valueInput, setValueInput] = useState('');
const [formInput, setFormInput] = useState({});
const [isFormValid, setIsFormValid] = useState(true);

// function that listens for changes in the the job input and when the 
// user clicks search, log those changes to the console.

const onJobTitleChange = event => {
  const jobTitleInput = event.target.value;
  setJobTitleInput(jobTitleInput);
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
  if (!jobTitleInput || !valueInput) {
    console.log('invalid')
    setIsFormValid(false);
    return;
  }
  setIsFormValid(true);
  const finalizedInput = {
    jobTitleInput: jobTitleInput,
    valueInput: valueInput
  }
  setFormInput(finalizedInput);
  console.log(formInput);
  
}

  return (
    <div>
      <Header />
      <SearchFormContainer onChangeJob={onJobTitleChange} onChangeValue={onValueChange} onSubmit={onSubmitHandler}/>
      {!isFormValid ? AlertDismissibleExample : ''}
      <RecentSearchesContainer/>
    </div>
  );
}


export default App;
