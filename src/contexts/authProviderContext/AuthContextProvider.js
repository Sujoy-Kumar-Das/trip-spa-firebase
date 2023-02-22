import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, sendEmailVerification, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from '../../firebase/Firebase.init';

export const AuthContext = createContext();
const auth = getAuth(app)


const AuthContextProvider = ({children}) => {

    const [user,setUser] = useState(null)
    const googlePorvider = new GoogleAuthProvider();
    const singInWithGoogle = ()=>{
    return signInWithPopup(auth,googlePorvider);
}

const createUser = (email,password) =>{
    return createUserWithEmailAndPassword(auth,email,password);
}

const login = (email,password)=>{
    return signInWithEmailAndPassword(auth,email,password);
}

const forgotPass = email =>{
    return  sendPasswordResetEmail(auth,email)
}
const verify = ()=>{
    return sendEmailVerification(auth.currentUser);
}

const logOut = ()=>{
    return signOut(auth);
}
const updateUser = detail =>{
    return updateProfile(auth.currentUser,detail);
}
useEffect(()=>{
    const unsubscribe = onAuthStateChanged(auth,currentUser=>{
        
        if(currentUser === null || currentUser.emailVerified){
            setUser(currentUser)
        }
    })
    return ()=>{
        unsubscribe();
    }
},[])

    const authInfo = {user,singInWithGoogle,createUser,login,forgotPass,verify,logOut,updateUser}
    return (
        
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
        
    );
};

export default AuthContextProvider;