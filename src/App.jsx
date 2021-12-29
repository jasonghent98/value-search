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


  useEffect(() => {
    // addData();
    // dummyDataToFirebase();
    // getCompanyData();
  }, [])

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
