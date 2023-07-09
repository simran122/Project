
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup, signOut } from 'firebase/auth';



const firebaseConfig = {
    apiKey: "AIzaSyDkPxwX2V7RclpH2IhVOpQjrcioYSPPicI",
    authDomain: "auth-59f60.firebaseapp.com",
    projectId: "auth-59f60",
    storageBucket: "auth-59f60.appspot.com",
    messagingSenderId: "930567091510",
    appId: "1:930567091510:web:33df866d322b0b6d456f97"
};


const firebase = initializeApp(firebaseConfig);
const auth = getAuth(firebase);

const googleAuthProvider = new GoogleAuthProvider();

export const signInWithGoogle = async () => {
    try {
        googleAuthProvider.setCustomParameters({ prompt: 'select_account' });
        await signInWithPopup(auth, googleAuthProvider);
    } catch (error) {
        throw new Error('Google sign-in error:', error);
    }
};

export const logout = async () => {
    try {
        await signOut(auth);
    } catch (error) {
        console.log('Logout error:', error);
    }
};

export default firebase;