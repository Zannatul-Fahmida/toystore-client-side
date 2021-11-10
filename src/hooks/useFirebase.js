import { getAuth, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged, signInWithEmailAndPassword, createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { useState } from "react";
import { useEffect } from "react";
import initializeFirebase from "../pages/Login/firebase/firebase.init";

initializeFirebase();

const useFirebase = () => {
    const [user, setUser] = useState({});
    const [name, setName] = useState('');
    const [error, setError] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [isLoading, setIsLoading] = useState(true);
    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();

    const signInUsingGoogle = () => {
        return signInWithPopup(auth, googleProvider)
            .finally(() => setIsLoading(false));
    }

    useEffect(() => {
        const unsubscribed = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
            }
            else {
                setUser({});
            }
            setIsLoading(false);
        });
        return () => unsubscribed;
    }, [])

    const logOut = () => {
        setIsLoading(true);
        signOut(auth)
            .then(() => { })
            .finally(() => setIsLoading(false));
    }
    const handleName = e => {
        setName(e.target.value);
    }
    const handleEmail = e => {
        setEmail(e.target.value);
    }
    const handlePassword = e => {
        setPassword(e.target.value);
    }
    const handleConfirmPassword = e => {
        setConfirmPassword(e.target.value);
        if (password === confirmPassword) {
            setPassword(password);
        }
        else {
            setError("Confirm password doesn't match")
        }
    }
    const logInWithEmailAndPassword = () => {
        return signInWithEmailAndPassword(auth, email, password)
            .catch(error => {
                setError(error.message);
            })
    }
    const signUpWithEmailAndPassword = () => {
        return createUserWithEmailAndPassword(auth, email, password)
            .catch(error => {
                setError(error.message);
            })

    }
    const setUserName = () => {
        updateProfile(auth.currentUser, { displayName: name })
            .then(result => { })
    }

    return {
        user,
        error,
        isLoading,
        signInUsingGoogle,
        logOut,
        handleEmail,
        handleName,
        handlePassword,
        logInWithEmailAndPassword,
        signUpWithEmailAndPassword,
        handleConfirmPassword,
        setUserName,
        setError,
        setUser
    }
}

export default useFirebase;