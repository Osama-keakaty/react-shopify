import { initializeApp } from 'firebase/app';
import {
    getAuth,
    signInWithPopup,
    GoogleAuthProvider,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    onAuthStateChanged,
} from 'firebase/auth';
import {
    doc,
    getDoc,
    setDoc,
    getFirestore,
} from 'firebase/firestore'
const firebaseConfig = {
    apiKey: "AIzaSyCoTch8pcIomGiJKMO1Rt8d9Z_UKG9k7Bg",
    authDomain: "react-shopify-c2553.firebaseapp.com",
    projectId: "react-shopify-c2553",
    storageBucket: "react-shopify-c2553.firebasestorage.app",
    messagingSenderId: "934056995897",
    appId: "1:934056995897:web:3c0c510f88df5e5520b1e8"
};

// Initialize Firebase
initializeApp(firebaseConfig);

//! create sign-in application using google provider with specific parameters
const provider = new GoogleAuthProvider();
provider.setCustomParameters({
    prompt: "select_account"
});
//! create the auth (it is a singleton in application and keeps track the auth in this variable)
export const auth = getAuth();

//! create a sign in with popup 
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

//! initialize our db to use it for checking if a collection is exist.   
export const db = getFirestore();

//! create an async function to check if this is doc is exist and otherwise create one  
export const createUserDocumentFromAuth = async (userAuth, additional = {}) => {
    // if we didn't recieve userAuth don't run the function 
    if (!userAuth) return;
    // create a document reference 
    const userDocRef = doc(db, "users", userAuth.uid);
    // fetch the user from the reference 
    const userSnapshot = await getDoc(userDocRef);
    // check if that user with that id exist 
    if (!userSnapshot.exists()) {
        // if Not, create a user's doc by taking the user's name and email 
        const { displayName, email } = userAuth;
        // and determine the time that he loged in.
        const createdAt = new Date();

        try {
            // create a doc that userDocRef determined it and save his name and email and login time 
            setDoc(userDocRef, {
                displayName,
                email,
                createdAt,
                //the additional object must contain the same the previous values name (displayName , email)
                ...additional
            })
        } catch (error) {
            console.log('error creating the user', error.message);
        }
    }
    // return the new or exist user 
    return userDocRef
};

//! build sign up task
export const createAuthUserWithEmailAndPassword = async (email, password) => {
    // if we didn't recieve email or password, don't run the function 
    if (!email || !password) return;
    // create user 
    try {

        return await createUserWithEmailAndPassword(auth, email, password);
    } catch (error) {
        if (error.code === 'auth/email-already-in-use') {
            alert('Cannot create user, email already in use')
        } else if (error.code === "auth/network-request-failed") {
            alert('Please ensure you are connected to a VPN to access this service')
        } else {

            console.log("error", error.message)
        }
    }
};

//! build sign in with email and password task
export const signInUserWithEmailAndPassword = async (email, password) => {
    if (!email || !password) return;
    try {
        return await signInWithEmailAndPassword(auth, email, password);
    } catch (error) {
        if (error.code === 'auth/invalid-credential') {
            alert('Wrong email or password')
        } else if (error.code === "auth/network-request-failed") {
            alert('Please ensure you are connected to a VPN to access this service')
        } else {

            console.log("error", error.message)
        }
    }
}

//! build sign out task
export const signOutUser = async () => {
    try {
        return await signOut(auth);
    } catch (error) {
        console.log("error", error.message)
    }
}

//! build on auth changed listener
export const onAuthStateChangedListener = (callback) => {
    return onAuthStateChanged(auth, callback);
}


