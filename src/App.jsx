import React, {useState} from 'react';
import './App.css';
import Header from './Layout/Header';
import SearchFormContainer from './Components/SearchFormContainer';
import RecentSearchesContainer from './Components/RecentSearchesContainer';
// import AlertDismissibleExample from './UI/Error';

const App =  props => {

const [jobTitleInput, setJobTitleInput] = useState('');
const [valueInput, setValueInput] = useState('');
const [isFormValid, setIsFormValid] = useState(false);

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
  if (!jobTitleInput || !valueInput) {
    console.log('invalid')
    setIsFormValid(false);
    return;
  }
  const finalizedInput = {
    jobTitleInput: jobTitleInput,
    valueInput: valueInput
  }
  setIsFormValid(true);
  console.log(finalizedInput);
  setJobTitleInput('');
  setValueInput('');
}

  return (
    <div>
      <Header />
      <SearchFormContainer 
      onChangeJob={onJobTitleChange} 
      onChangeValue={onValueChange} 
      onSubmit={onSubmitHandler} 
      resetJob={jobTitleInput} 
      resetValue={valueInput}/>
      {isFormValid ? <p>Both fields must be required!</p> : ''}
      <RecentSearchesContainer/>
    </div>
  );
}


export default App;
