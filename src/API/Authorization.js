import 'firebase/auth'
import React, { useEffect, useState } from 'react'

export const AuthContext = React.createContext();

export const AuthProvider = () => {
    const [currentUser, setCurrentUser] = useState(null);
    
}
