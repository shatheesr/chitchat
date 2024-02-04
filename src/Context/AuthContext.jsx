import { createContext, useContext, useState } from "react";
import { GoogleAuthProvider, signInWithRedirect } from "firebase/auth";

import { auth } from "../firebase";
const AuthContext = createContext();
export const AuthProvider = ({children})=>{
    const [currentUser,setCurrentUser] = useState(null);
    const SignWithGoogle =() =>{
        const provider = new GoogleAuthProvider();
        signInWithRedirect(auth,provider)
    }
    const value = {
        currentUser,
        setCurrentUser,
        SignWithGoogle
    }
    return(
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    )
}
export const UserAuth = () => {
    return useContext(AuthContext); 
}