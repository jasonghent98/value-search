import React, {useState, useEffect} from 'react';
import appClasses from './App.module.css';
import Header from './Layout/Header';
import SearchFormContainer from './Components/SearchFormContainer';
import RecentSearchesContainer from './Components/RecentSearchesContainer';
import Home from './Components/Home';
import Login from './Components/Users/Login';
import Register from './Components/Users/Register';
import classes from '../src/CssComponents/SearchFormContainer.module.css';
// import AlertDismissibleExample from './UI/Error';

// Import route object from react-router-dom to enable routing features
import { Route } from 'react-router-dom';

// import private route component for protected routes
import PrivateRoute from './Utils/PrivateRoute';

// Import Auth Provider to provide access to global context for authorization
import { AuthProvider, useAuth } from './Contexts/AuthContext';


import { getUserData, getCompanyData, addData, dummyDataToFirebase } from './API/Firebase';
import dummyData from './Utils/CompanyDataSet';

const App =  props => {

  const { currentUser } = useAuth();


  // state for register page
  // const [emailInput, setEmailInput] = useState('')
  // const [passwordInput, setPasswordInput] = useState('')


  // const onJobTitleChange = event => {
  //   setJobTitleInput(event.target.value);
  //   console.log(event.target.value);
  // }

  // register form input handlers that will be passed to onRegister function
  // const emailChangeHanlder = event => {
  //   setEmailInput(event.target.value);
  // }

  // const passwordChangeHandler = event => {
  //   setPasswordInput(event.target.value);
  // }


  useEffect(() => {
    // addData();
    // dummyDataToFirebase();
    // getCompanyData();
  }, [])



  // function that listens for changes in the the value input and when the 
  // user clicks search, log those changes to the console.

//   const onValueChange = event => {
//   setValueInput(event.target.value);
//   console.log(event.target.value);

// }


  // when user submits, create an object out of both of the inputs and push the object onto the 
  // formInput array

  // const onSearchHandler = event => {
  //   event.preventDefault();
  //   setJobInputTouched(true);
  //   setValueInputTouched(true);

  //   if (jobTitleInput.trim() === '') {
  //     setIsJobValid(false);
  //     return;
  //   }
  //   if (valueInput.trim() === '') {
  //     setIsValueValid(false);
  //     return;
  //   }
  //   const finalizedInput = {
  //     jobTitleInput: jobTitleInput,
  //     valueInput: valueInput
  //   }

  //   setUserSearches((prevState) => {
  //     return [finalizedInput, ...prevState]
  //   })
  //   console.log(userSearches);
  //   setIsJobValid(true)
  //   setIsValueValid(true)
  //   setJobTitleInput('');
  //   setValueInput('');

  // }


  // const notValidJobInput = !jobTitleInput && jobInputTouched
  // const notValidValueInput = !valueInput && valueInputTouched

  // const inputClasses = notValidJobInput || notValidValueInput ? 'form-control-invalid' : '';
 
  return (
    <AuthProvider>

    <div>
          <Route path='/login'>
            <div className={appClasses['login']}>
              <Login/>  
            </div>  
          </Route>
          <Route path='/register'> 
            <div className={appClasses['register']}>
              <Register/>
            </div>
          </Route>
          <div>
            {/* the code below should be wrapped in a private route component that will only show when the user is authenticated */}
            <PrivateRoute path='/searches' className={appClasses['searches']} component={SearchFormContainer}></PrivateRoute>
          </div>
    </div>
    </AuthProvider>
  );
}


export default App;
