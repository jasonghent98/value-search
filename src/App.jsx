import React, {useState, useEffect} from 'react';
import appClasses from './App.module.css';
import Header from './Layout/Header';
import SearchFormContainer from './Components/SearchFormContainer';
import RecentSearchesContainer from './Components/RecentSearchesContainer';
import Login from './Components/Users/Login';
import classes from '../src/CssComponents/SearchFormContainer.module.css';
// import AlertDismissibleExample from './UI/Error';

// Import route object from react-router-dom to enable routing features
import { Route } from 'react-router-dom';


import { getUserData, getCompanyData, addData, dummyDataToFirebase } from './Utils/Firebase';
import dummyData from './Utils/CompanyDataSet';

const App =  props => {

const [jobTitleInput, setJobTitleInput] = useState('');
const [jobInputTouched, setJobInputTouched] = useState(false);
const [valueInput, setValueInput] = useState('');
const [valueInputTouched, setValueInputTouched] = useState(false);
const [isJobValid, setIsJobValid] = useState(false);
const [isValueValid, setIsValueValid] = useState(false);
const [isLoggedIn, setIsLoggedIn] = useState(false);

const [userSearches, setUserSearches] = useState([])


const onJobTitleChange = event => {
  setJobTitleInput(event.target.value);
  console.log(event.target.value);
}


useEffect(() => {
  // addData();
  // dummyDataToFirebase();
  // getCompanyData();
}, [])



// function that listens for changes in the the value input and when the 
// user clicks search, log those changes to the console.
const onValueChange = event => {
setValueInput(event.target.value);
console.log(event.target.value);

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

  setUserSearches((prevState) => {
    return [finalizedInput, ...prevState]
  })
  console.log(userSearches);
  setIsJobValid(true)
  setIsValueValid(true)
  setJobTitleInput('');
  setValueInput('');

}


  const notValidJobInput = !jobTitleInput && jobInputTouched
  const notValidValueInput = !valueInput && valueInputTouched

  const inputClasses = notValidJobInput || notValidValueInput ? 'form-control-invalid' : '';
 
  return (
    <div className={classes[inputClasses]}>
          <Route path='/login'>
            <div className={appClasses['login']}>
            <Login/>  
            </div>  
          </Route>
          <div>
            <Route path='/searches' className={appClasses['searches']}>
              <div className={classes['searches']}>
              <Header />
              <SearchFormContainer 
              onChangeJob={onJobTitleChange} 
              onChangeValue={onValueChange} 
              onSubmit={onSubmitHandler} 
              resetJob={jobTitleInput} 
              resetValue={valueInput}/>
              {notValidJobInput || notValidValueInput ? <p className={classes['error-text']}>Both fields must be required!</p> : ''}
              <RecentSearchesContainer userSearches={userSearches}/>
              </div>
            </Route>
          </div>
    </div>
  );
}


export default App;
