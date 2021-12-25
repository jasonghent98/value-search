import React, { createContext, useContext, useState, useEffect } from 'react'
import { auth } from '../API/Firebase';

const AuthContext = createContext();

export const useAuth = () => {
    return useContext(AuthContext)
}

export const AuthProvider = ({children}) => {
    const [currentUser, setCurrentUser] = useState();
    const [isLoading, setIsLoading] = useState(true);

    const signUp = (email, password) => {
        try {
           return auth.createUserWithEmailAndPassword(email, password)
        } catch (error) {
            console.log(error, 'from authContext.js')
        }
    }

    useEffect(() => {
        const unsubscribed = auth.onAuthStateChanged(user => {
            setCurrentUser(children.user);
            setIsLoading(false);
        })
        return unsubscribed;
    }, [children.user])

    const value = {
        currentUser,
        setCurrentUser,
        signUp
    }


    return (
        <AuthContext.Provider value={value}>
            {!isLoading && children}
        </AuthContext.Provider>
    )
}

