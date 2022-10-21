import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth"
import app from '../Firebase/Firebase.config'
export const AuthContext = createContext()
const auth = getAuth(app)
const UserContext = ({children}) => {
    const[user, setUser]= useState(null)
    const provider = new GoogleAuthProvider()
    const userRegister =(email,password)=>{
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const userLogin = (email, password)=>{
        return signInWithEmailAndPassword(auth, email, password)
    }
    const singInGoogle = () =>{
        return signInWithPopup(auth,provider)
    }
    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth,(currentUser)=>{
            console.log('user inside state change', currentUser)
            setUser(currentUser)
         
        });
        return ()=>{
            unsubscribe()
        }

    },[])
    const logOut = () =>{
        return signOut(auth)
    }
    const authInfo = {user,singInGoogle,userRegister,userLogin,logOut}
    return (
        <div>
            <AuthContext.Provider value={authInfo}>
            {children}
            </AuthContext.Provider>
        </div>
    );
};

export default UserContext;