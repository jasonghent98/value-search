import React from 'react'
import { Route, Redirect } from 'react-router-dom';
import { useAuth } from '../Contexts/AuthContext';

// When user tries to access protected route, redirect to /login with React-Router. 
// This is a wrapper component that will wrap around protected routes

const PrivateRoute = ({component: Component, ...rest}) => {
    const { currentUser } = useAuth();

    return (
        <Route
        {...rest}
        render={props => {
        currentUser ? <Component {...props} /> : <Redirect to='/login'/>
        }}>
            
        </Route>
    )
}

export default PrivateRoute;