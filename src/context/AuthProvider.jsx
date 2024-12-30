import {
    createUserWithEmailAndPassword,
    GoogleAuthProvider,
    onAuthStateChanged,
    signInWithEmailAndPassword,
    signInWithPopup,
    signOut,
    updateProfile,
} from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';

import AuthContext from './AuthContext';
import { auth } from '../firebase/firebase.config';
import axios from 'axios';


const AuthProvider = ({ children }) => {




    const [loading, setLoading] = useState(true)
    const [user, setUser] = useState(null);

    const googleProvider = new GoogleAuthProvider();
    // console.log(router)
    const handleRegister = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const handleLogin = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }
    const handleGoogleLogin = () => {
        setLoading(true)
        return signInWithPopup(auth, googleProvider)
    }
    const updateProfileProfile = (updateData) => {
        return updateProfile(auth.currentUser, updateData)
    }
    const handleLogOut = () => {
        return signOut(auth)
    }
    const authInfo = {
        user,
        setUser,
        handleRegister,
        handleLogin,
        handleGoogleLogin,
        handleLogOut,
        updateProfileProfile,
        loading
    }
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser)
            console.log('state Captured', currentUser?.email)

            if (currentUser?.email) {
                const user = { email: currentUser.email };
                axios.post('https://assignment-11-server-kappa-inky.vercel.app/jwt', user, {
                    withCredentials: true
                })
                    .then(res => {
                        console.log('Login Token',res.data);
                        setLoading(false);
                    })
            }else{
                axios.post('https://assignment-11-server-kappa-inky.vercel.app/logout', {}, {
                    withCredentials: true
                })
                .then(res => {
                    console.log('Log OUt User', res.data);
                    setLoading(false);
                } )
            }

            

        })
        return () => {
            unsubscribe();
        }
    }, [])

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;