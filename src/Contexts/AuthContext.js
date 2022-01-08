import React, { createContext, useContext, useState, useEffect } from 'react'
import { auth, db, users1Ref } from '../API/Firebase';
import { setDoc, doc, addDoc } from '@firebase/firestore';


const AuthContext = createContext();

export const useAuth = () => {
    return useContext(AuthContext)
}

export const AuthProvider = (props) => {
    const [currentUser, setCurrentUser] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [alert, setAlert] = useState(true);

    const signUp = (email, password) => {
        try {
           return auth.createUserWithEmailAndPassword(email, password).then(async (user) => { 
               if (user) {
                // const userId = user.user.uid;
                // const docRef = doc(db, 'users1', userId); 
                // console.log(userId)
                // await setDoc(docRef, {
                //     uid: userId,
                //     email,
                //     password
                // }, {merge: true})
                await addDoc(users1Ref, {
                    email,
                    password
                })
               }
        
            })
        } catch (error) {
            console.log(error, 'from authContext.js')
        }
        console.log('hello')
    }

    const login = (email, password) => {
        try {
            return auth.signInWithEmailAndPassword(email, password)
        } catch (error) {
            console.log(error)
        }
    }

    const logout = async () => {
        try {
            await auth.signOut()
            console.log(currentUser)
            return;
        } catch (error) {
            console.log(error, 'from authContext.js')
        }
    }

    const hideAlert = () => {
        return setAlert(() => !alert);
    }

    useEffect(() => {
        const observer = auth.onAuthStateChanged(user => {
            setCurrentUser(user)
            setIsLoading(false)
        })
        return observer;
    }, [])

    const value = {
        currentUser,
        setCurrentUser,
        login,
        signUp,
        logout,
        hideAlert
    }


    return (
        <AuthContext.Provider value={value}>
            {!isLoading && props.children}
        </AuthContext.Provider>
    )
}

